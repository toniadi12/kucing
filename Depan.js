import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  backgroundColor,
  borderRadius,
  Image,
  Dimensions,
} from 'react-native';

export class Depan extends Component {
  state = {
    dataGambar: '',
    dataGambarWidht: 0,
    dataGambarHeight: 0,
  };
  klikAmbilGambar = async () => {
    const url = 'https://api.thecatapi.com/v1/images/search';
    let data = '';

    await fetch(url)
      .then(Response => Response.json())
      .then(json => {
        data = json;
      });

    let gambar = data[0]['url'];
    let lebarGambar = data[0]['width'];
    let tinggiGambar = data[0]['height'];

    let lebarLayar = Dimensions.get('window').width;

    this.setState({dataGambar: gambar});
    this.setState({dataGambarWidth: lebarGambar});
    this.setState({dataGambarHeight: tinggiGambar});
  };

  render() {
    return (
      <View style={Styles.ViewWrapper}>
        <View style={Styles.ViewGambar}>
          <Image
            source={{uri: this.state.dataGambar}}
            style={{
              width: this.state.dataGambarWidht,
              height: this.state.dataGambarHeight,
            }}
          />
        </View>
        <View style={Styles.ViewTombol}>
          <TouchableOpacity
            onPress={this.klikAmbilGambar}
            style={Styles.TombolAmbil}>
            <Text style={Styles.TextAmbil}>Tampilan gambar kucing</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Depan;

const Styles = StyleSheet.create({
  ViewWrapper: {
    flex: 1,
    backgroundColor: 'FFF',
    padding: 20,
  },
  ViewGambar: {
    flex: 4,
    borderWidth: 1,
  },
  ViewTombol: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  TombolAmbil: {
    backgroundColor: '#009688',
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 10,
    elevation: 8,
  },
  TextAmbil: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
    textTransform: 'uppercase',
    alignSelf: 'center',
  },
});

// menit 40:24
