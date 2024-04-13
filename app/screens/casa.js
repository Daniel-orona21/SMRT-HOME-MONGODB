import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CasaScreen() {
  const navigation = useNavigation();
  const [box1Color, setBox1Color] = useState('rgba(0, 0, 0, 0.5)');
  const [isBox1Active, setBox1Active] = useState(false);

  const [box2Color, setBox2Color] = useState('rgba(0, 0, 0, 0.5)');
  const [isBox2Active, setBox2Active] = useState(false);

  const [box3Color, setBox3Color] = useState('rgba(0, 0, 0, 0.5)');
  const [isBox3Active, setBox3Active] = useState(false);

  const [box4Color, setBox4Color] = useState('rgba(0, 0, 0, 0.5)');
  const [isBox4Active, setBox4Active] = useState(false);

  const handleBoxPress = (boxNumber) => {
    switch (boxNumber) {
      case 1:
        setBox1Color(isBox1Active ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.6)');
        setBox1Active(!isBox1Active);
        break;
      case 2:
        setBox2Color(isBox2Active ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.6)');
        setBox2Active(!isBox2Active);
        break;
      case 3:
        setBox3Color(isBox3Active ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.6)');
        setBox3Active(!isBox3Active);
        break;
      case 4:
        setBox4Color(isBox4Active ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.6)');
        setBox4Active(!isBox4Active);
        break;
      default:
        break;
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/fondo.png')}
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.titulo}>Mi casa</Text>

        {/* Contenedor de cajas */}
        <View style={styles.boxesContainer}>
          {/* Caja 1 */}
          <TouchableOpacity onPress={() => handleBoxPress(1)}>
            <View style={[
              styles.box,
              { backgroundColor: box1Color },
            ]}>
              <View style={styles.circle}>
                <Image source={require('../../assets/lampara.png')} style={styles.iconoCirculo} />
              </View>
              <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                <Text style={styles.textoCaja}>Luz Dormitorio</Text>
                <Text style={styles.textoCaja2}>{isBox1Active ? 'Activado' : 'Desactivado'}</Text>
              </View>
            </View>
          </TouchableOpacity>

    
          <TouchableOpacity onPress={() => handleBoxPress(2)}>
            <View style={[
              styles.box,
              { backgroundColor: box2Color },
            ]}>
              <View style={styles.circle}>
                <Image source={require('../../assets/sala.png')} style={styles.iconoCirculo} />
              </View>
              <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                <Text style={styles.textoCaja}>Luz de Sala</Text>
                <Text style={styles.textoCaja2}>{isBox2Active ? 'Activado' : 'Desactivado'}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.boxesContainer}>
          {/* Caja 3 */}
          <TouchableOpacity onPress={() => handleBoxPress(3)}>
            <View style={[
              styles.box,
              { backgroundColor: box3Color },
            ]}>
              <View style={styles.circle}>
                <Image source={require('../../assets/foco.png')} style={styles.iconoCirculo} />
              </View>
              <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                <Text style={styles.textoCaja}>Patio Trasero</Text>
                <Text style={styles.textoCaja2}>{isBox3Active ? 'Activado' : 'Desactivado'}</Text>
              </View>
            </View>
          </TouchableOpacity>


          <TouchableOpacity onPress={() => handleBoxPress(4)}>
            <View style={[
              styles.box,
              { backgroundColor: box4Color },
            ]}>
              <View style={styles.circle}>
                <Image source={require('../../assets/lampara2.png')} style={styles.iconoCirculo} />
              </View>
              <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                <Text style={styles.textoCaja}>Recamara</Text>
                <Text style={styles.textoCaja2}>{isBox4Active ? 'Activado' : 'Desactivado'}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>


        <View style={styles.boxesContainer2}>
          <View style={styles.box2}>
            <View style={styles.circle}>
              <Image source={require('../../assets/tv.png')} style={styles.iconoCirculo} />
            </View>
            <TouchableOpacity>
            <View style={{ flexDirection: 'column', marginLeft: 10 }}>
              <Text style={styles.textoCaja3}>Seguir viendo en Sala de Estar</Text>
              <Text style={styles.textoCaja4}>No se ha encontrado contenido</Text>
            </View>
            </TouchableOpacity>
          </View>
        </View>

       
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => console.log('chin')}>
            <Image source={require('../../assets/mas.png')} style={styles.mas} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
        <View style={styles.circulo}>
          <Image source={require('../../assets/perfil-2.png')} style={styles.puntos}/>
        </View>
      </TouchableOpacity>
        </View>


        
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    marginTop: -50,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },

  boxesContainer: {
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'center',
    marginLeft: 10,
  },
  boxesContainer2: {
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'center',
    marginLeft: 10,
  },

  box: {
    width: 180,
    height: 80,
    borderRadius: 20,
    margin: 10,
    marginLeft: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  box2: {
    width: 365,
    height: 80,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 20,
    margin: 10,
    marginLeft: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 50,
    height: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 100,
    marginLeft: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoCaja: {
    color: 'white',
    fontSize: 13.5,
    fontWeight: 'bold',
  },
  textoCaja2: {
    color: 'grey',
    fontSize: 13.5,
  },
  textoCaja3: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textoCaja4: {
    color: 'grey',
    fontSize: 14.2,
  },

  iconoCirculo: {
    width: 25,
    height: 25,
  },

  titulo: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 50,
    marginLeft: 20,
  },
  iconContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    right: 20,
    top: 20,
  },
  mas: {
    width: 20,
    height: 20,
    marginRight: 35,
    marginTop: 135,
    resizeMode: 'contain',
  },
  puntos: {
    width: 25,
    height: 25,
    marginTop: 132,
    marginRight: 0,
    resizeMode: 'contain',
  },
  
});

