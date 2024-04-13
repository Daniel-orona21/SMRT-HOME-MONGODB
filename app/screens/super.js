import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';

export default function SuperScreen() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../../assets/fondo.jpg')}
      style={styles.backgroundImage}
    >
      
      <SafeAreaView style={styles.container}>
     
        <Text style={styles.titulo}>Super</Text>   

        <View style={styles.swiperContainer}>
          <Swiper
            showsButtons={false}
            loop={true}
            containerStyle={styles.swiperWrapper}
          >
            <View style={styles.slide}>
              <Image source={require('../../assets/oferta3.jpg')} style={styles.foto} />
            </View>
            <View style={styles.slide}>
              <Image source={require('../../assets/oferta2.jpg')} style={styles.foto} />
            </View>
            <View style={styles.slide}>
              <Image source={require('../../assets/oferta.jpg')} style={styles.foto} />
            </View>
          </Swiper>
        </View>

        <Text style={styles.ofertas}>Ofertas Especiales!</Text> 
       
        

        <Text style={styles.category}>✪ Categorías</Text>

        <ScrollView>
       
        <View style={styles.boxContainer}>
        <TouchableOpacity>
          <View style={styles.box}>
            <View style={styles.circle}>
              <Image source={require('../../assets/1.png')} style={styles.imagenCirculo} />
            </View>
            <Text style={styles.textoCaja}>Frutas y Verduras</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={styles.box}>
            <View style={styles.circle}>
            <Image source={require('../../assets/2.png')} style={styles.imagenCirculo} />
            </View>
            <Text style={styles.textoCaja}>Panadería</Text>
          </View>
          </TouchableOpacity>
        </View>
       

      
        <View style={styles.boxContainer}>
        <TouchableOpacity>
          <View style={styles.box}>
            <View style={styles.circle}>
            <Image source={require('../../assets/3.png')} style={styles.imagenCirculo} />
            </View>
            <Text style={styles.textoCaja}>Área Blanca</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity>
          <View style={styles.box}>
            <View style={styles.circle}>
            <Image source={require('../../assets/4.png')} style={styles.imagenCirculo} />
            </View>
            <Text style={styles.textoCaja}>Lácteos</Text>
          </View>
          </TouchableOpacity>
        </View>
       
       
        <View style={styles.boxContainer}>
        <TouchableOpacity>
          <View style={styles.box}>
            <View style={styles.circle}>
            <Image source={require('../../assets/5.png')} style={styles.imagenCirculo} />
            </View>
            <Text style={styles.textoCaja}>Vinos y Licores</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={styles.box}>
            <View style={styles.circle}>
            <Image source={require('../../assets/6.png')} style={styles.imagenCirculo} />
            </View>
            <Text style={styles.textoCaja}>Electrónica</Text>
          </View>
          </TouchableOpacity>
        </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  category: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    marginLeft: 20,
    marginTop: 25,
    marginBottom: 10,
  },
  textoCaja: {
    fontWeight: 'bold',
    fontSize: 10,
    color: 'white',
    marginTop: 5,
  },
  container: {
    flex: 1,
    padding: 8,
    marginTop: -40,
  },
  boxContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    
  },
  box: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: 135,
    height: 135,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20, 
  },
  circle: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    width: 80,
    height: 80,
    borderRadius: 100,
    marginTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagenCirculo: {
    width: 35,
    height: 35,
  },
  titulo: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 33,
    marginLeft: 20,
  },
  ofertas: {
    color: 'white',
    fontSize: 17,
    marginTop: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
 
  iconContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    right: 20,
    top: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  swiperContainer: {
    height: 160,
    borderRadius: 8,
    marginTop: 10,
    overflow: 'hidden',
    marginLeft: 20,
    marginRight: 20,
  },
  swiperWrapper: {
    alignItems: 'center',

  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  foto: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});