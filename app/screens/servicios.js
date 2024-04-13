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
  
  export default function ServiciosScreen() {
    const navigation = useNavigation();
    return (
      <ImageBackground
        source={require('../../assets/fondo8.jpg')}
        style={styles.backgroundImage}
      >
        <SafeAreaView style={styles.container}>
          <Text style={styles.titulo}>Servicios</Text>
  
          {/* Contenedor de cajas */}
  
  
        <TouchableOpacity>
          <View style={styles.boxesContainer2}>
            <View style={styles.box2}>
              <View style={styles.circle}>
                <Image source={require('../../assets/luz.png')} style={styles.iconoCirculo} />
              </View>
              <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                <Text style={styles.textoCaja3}>Luz</Text>
                <Text style={styles.textoCaja4}>Renovación: 11/03</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <Text style={styles.textoCaja5}>〉</Text>
              </View>
            </View>
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={styles.boxesContainer2}>
            <View style={styles.box2}>
              <View style={styles.circle}>
                <Image source={require('../../assets/awa.png')} style={styles.iconoCirculo} />
              </View>
              <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                <Text style={styles.textoCaja3}>Agua</Text>
                <Text style={styles.textoCaja4}>Renovación: 22/02</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <Text style={styles.textoCaja5}>〉</Text>
              </View>
            </View>
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={styles.boxesContainer2}>
            <View style={styles.box2}>
              <View style={styles.circle}>
                <Image source={require('../../assets/red.png')} style={styles.iconoCirculo} />
              </View>
              <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                <Text style={styles.textoCaja3}>Servicio de Internet</Text>
                <Text style={styles.textoCaja4}>Renovación: 17/02</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <Text style={styles.textoCaja5}>$499 〉</Text>
              </View>
            </View>
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={styles.boxesContainer2}>
            <View style={styles.box2}>
              <View style={styles.circle}>
                <Image source={require('../../assets/gas.png')} style={styles.iconoCirculo} />
              </View>
              <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                <Text style={styles.textoCaja3}>Gas</Text>
                <Text style={styles.textoCaja4}>Renovación: 30/03</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <Text style={styles.textoCaja5}>〉</Text>
              </View>
            </View>
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={styles.boxesContainer2}>
            <View style={styles.box2}>
              <View style={styles.circle}>
                <Image source={require('../../assets/cable.png')} style={styles.iconoCirculo} />
              </View>
              <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                <Text style={styles.textoCaja3}>TV por Cable</Text>
                <Text style={styles.textoCaja4}>Renovación: 11/02</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <Text style={styles.textoCaja5}>$199 〉</Text>
              </View>
            </View>
          </View>
          </TouchableOpacity>
  
          
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
  
    
    boxesContainer2: {
      flexDirection: 'row',
      marginTop: 5,
      justifyContent: 'center',
      marginLeft: 10,
    },
  
    
    box2: {
      width: 365,
      height: 80,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      borderRadius: 18.5,
      margin: 5,
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
    
    textoCaja3: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    textoCaja4: {
      color: 'grey',
      fontSize: 14.2,
    },
    textoCaja5: {
      color: 'grey',
      fontSize: 14.2,
      marginRight: 5,
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
      marginRight: 10,
      marginTop: 137,
      resizeMode: 'contain',
    },
    puntos: {
      width: 25,
      height: 25,
      marginTop: 134,
      marginRight: 0,
      marginLeft: 20,

      resizeMode: 'contain',
    },
   
    
  });