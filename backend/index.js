const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const User = require('./models/User');

const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/agro', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Conexión a la base de datos MongoDB establecida');
}).catch((err) => {
  console.error('Error al conectar a la base de datos MongoDB:', err);
});

app.post('/register', async (req, res) => {
  const { email, password, name, apellido } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: true, msg: 'El usuario ya existe.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ email, password: hashedPassword, name, apellido });
    await newUser.save();

    const token = jwt.sign({ email }, 'your-secret-key', { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    res.status(500).json({ error: true, msg: 'Error al registrar el usuario.' });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: true, msg: 'Credenciales inválidas.' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: true, msg: 'Credenciales inválidas.' });
    }

    const token = jwt.sign({ email }, 'your-secret-key', { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    console.error('Error al autenticar el usuario:', error);
    res.status(500).json({ error: true, msg: 'Error al autenticar el usuario.' });
  }
});

app.get('/user', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: true, msg: 'Token no proporcionado.' });
  }

  jwt.verify(token, 'your-secret-key', async (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: true, msg: 'Token inválido.' });
    }

    const email = decoded.email;

    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ error: true, msg: 'Usuario no encontrado.' });
      }

      res.json(user);
    } catch (error) {
      console.error('Error al obtener información del usuario:', error);
      res.status(500).json({ error: true, msg: 'Error al obtener información del usuario.' });
    }
  });
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
