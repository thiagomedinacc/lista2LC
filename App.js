
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ClothingAd from './components/ClothingAd';
import Toogle from './components/Toogle/Toogle';
import ClothingAdMosaico from './components/ClothingAdMosaico';
import camisetaAdidas from './assets/camisetaAdidas.jpg';
import calcaNike from './assets/calcaNike.jpg';
import terno from './assets/terno.jpg'
import Header from './components/Header';

export default function App() {
  const [roupas, setRoupas] = useState(
    [
      {
        title: 'Camisa Adidas',
        type: 'camisa',
        color: 'branca',
        originalValue: 50,
        currentValue: 50,
        isDiscounted: false,
        isInStock: true,
        img: camisetaAdidas
      },
      {
        title: 'Calça Nike',
        type: 'calça',
        color: 'preta',
        originalValue: 150,
        currentValue: 150,
        isDiscounted: false,
        isInStock: true,
        img: calcaNike

      },
      {
        title: 'Terno Brossman',
        type: 'terno',
        color: 'cinza',
        originalValue: 1500,
        currentValue: 1200,
        isDiscounted: true,
        isInStock: false,
        img: terno
      }
    ]
  )
  const [exibicaoLista, setExibicaoLista] = useState(true);
  const toogleSwitch = () => setExibicaoLista(!exibicaoLista);

  return (
    <View style={styles.container}>
        <Header style = {{backgroundCoslor: 'red'}}/>

      <View style={styles.header}>
        <Text> Alterar Exibição</Text>
        <Toogle onChange={toogleSwitch} />
      </View>
      <View style={exibicaoLista ? styles.lista : styles.foo} >
        {exibicaoLista ?
          <>
            <View style={styles.textContainer}>
              <Text style={styles.text}>Exibição em lista </Text>
            </View>
            {roupas?.map((roupa, index) =>
              <View >
                <ClothingAd key={index} props={roupa} />
              </View>
            )}
          </>
          :
          <>
            <View style={styles.textContainer}>
              <Text style={styles.text}>Exibição em Mosaico </Text>

            </View>
            <View style={styles.mosaico}>
              {roupas?.map((roupa, index) =>
                <View style={{width: 180}} >
                  <ClothingAdMosaico style = {styles.teste} key={index} props={roupa} />
                </View>)}

            </View>

          </>

        }
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 45,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1,
    padding: 3
  },
  lista: {
    flexDirection: 'column',
    marginBottom: 100
  },
  mosaico: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    display: 'flex',
    justifyContent: 'space-between'


  },
  text: {
    fontWeight: 'bold',
    marginBottom: 10

  },
  textContainer: {
    alignItems: 'center'
  },
  teste: {
    backgroundColor: 'red'
  }
});
