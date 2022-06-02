import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';

const ligthgreen = '#35d351';

export default function App() {
  const handlePressGoToGithub = async () => {
    console.log('Verificando link');
    const res = await Linking.canOpenURL('https://github.com/felipersan');
    if (res) {
      console.log('Link aprovado');
      console.log('Abrindo link....');
      await Linking.openURL('https://github.com/felipersan');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <View style={styles.content}>
        <Image
          style={styles.profile}
          source={{
            uri: 'https://avatars.githubusercontent.com/u/99933188?s=400&u=7befd83b280bd9b5adfd8b0f416bd9b5ee907a3d&v=4',
          }}
        />
        <Text style={[styles.defaulttext, styles.titletext]}>
          Felipe Sanfilippo
        </Text>
        <Text style={[styles.defaulttext, styles.nicktext]}>felipersan</Text>
        <Text style={[styles.defaulttext, styles.descriptiontext]}>
          FullStack developer| React Js | React Native | HTML | CSS | Javascript
        </Text>
        <TouchableOpacity onPress={handlePressGoToGithub} style={styles.button}>
          <Text style={styles.btntext}>Open in GitHub</Text>
        </TouchableOpacity>
        <View style={styles.activitymegawrapper}>
          <View style={styles.activitywrapping}>
            <View style={styles.activity}></View>
            <View style={styles.activity}></View>
            <View style={styles.activity}></View>
            <View style={styles.activity}></View>
            <View style={styles.activity}></View>
            <View style={styles.activity}></View>
          </View>
          <View style={styles.activitywrapping}>
            <View style={styles.activity}></View>
            <View style={[styles.activity, styles.ligthgreen]}></View>
            <View style={[styles.activity, styles.ligthgreen]}></View>
            <View style={[styles.activity, styles.ligthgreen]}></View>
            <View style={[styles.activity, styles.ligthgreen]}></View>
            <View style={styles.activity}></View>
          </View>
          <View style={styles.activitywrapping}>
            <View style={styles.activity}></View>
            <View style={[styles.activity, styles.ligthgreen]}></View>
            <View style={styles.activity}></View>
            <View style={styles.activity}></View>
            <View style={[styles.activity, styles.ligthgreen]}></View>
            <View style={styles.activity}></View>
          </View>
          <View style={styles.activitywrapping}>
            <View style={styles.activity}></View>
            <View style={styles.activity}></View>
            <View style={[styles.activity, styles.ligthgreen]}></View>
            <View style={[styles.activity, styles.ligthgreen]}></View>
            <View style={styles.activity}></View>
            <View style={styles.activity}></View>
          </View>
          <View style={styles.activitywrapping}>
            <View style={styles.activity}></View>
            <View style={styles.activity}></View>
            <View style={styles.activity}></View>
            <View style={styles.activity}></View>
            <View style={styles.activity}></View>
            <View style={styles.activity}></View>
          </View>
          <View style={styles.activitywrapping}>
            <View style={styles.activity}></View>
            <View style={styles.activity}></View>
            <View style={styles.activity}></View>
            <View style={styles.activity}></View>
            <View style={styles.activity}></View>
            <View style={styles.activity}></View>
          </View>
          <View style={styles.activitywrapping}>
            <View style={styles.activity}></View>
            <View style={[styles.activity, styles.ligthgreen]}></View>
            <View style={[styles.activity, styles.ligthgreen]}></View>
            <View style={[styles.activity, styles.ligthgreen]}></View>
            <View style={[styles.activity, styles.ligthgreen]}></View>
            <View style={styles.activity}></View>
          </View>
          <View style={styles.activitywrapping}>
            <View style={styles.activity}></View>
            <View style={styles.activity}></View>
            <View style={styles.activity}></View>
            <View style={styles.activity}></View>
            <View style={styles.activity}></View>
            <View style={styles.activity}></View>
          </View>
          <View style={styles.activitywrapping}>
            <View style={styles.activity}></View>
            <View style={styles.activity}></View>
            <View style={styles.activity}></View>
            <View style={styles.activity}></View>
            <View style={styles.activity}></View>
            <View style={styles.activity}></View>
          </View>
          <View style={styles.activitywrapping}>
            <View style={styles.activity}></View>
            <View style={styles.activity}></View>
            <View style={[styles.activity, styles.ligthgreen]}></View>
            <View style={[styles.activity, styles.ligthgreen]}></View>
            <View style={styles.activity}></View>
            <View style={styles.activity}></View>
          </View>
          <View style={styles.activitywrapping}>
            <View style={styles.activity}></View>
            <View style={[styles.activity, styles.ligthgreen]}></View>
            <View style={styles.activity}></View>
            <View style={styles.activity}></View>
            <View style={[styles.activity, styles.ligthgreen]}></View>
            <View style={styles.activity}></View>
          </View>
          <View style={styles.activitywrapping}>
            <View style={styles.activity}></View>
            <View style={styles.activity}></View>
            <View style={[styles.activity, styles.ligthgreen]}></View>
            <View style={[styles.activity, styles.ligthgreen]}></View>
            <View style={styles.activity}></View>
            <View style={styles.activity}></View>
          </View>
          <View style={styles.activitywrapping}>
            <View style={styles.activity}></View>
            <View style={styles.activity}></View>
            <View style={styles.activity}></View>
            <View style={styles.activity}></View>
            <View style={styles.activity}></View>
            <View style={styles.activity}></View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  profile: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  defaulttext: {
    color: '#fff',
  },
  titletext: {
    fontSize: 24,
    marginTop: 10,
    fontWeight: 'bold',
  },
  nicktext: {
    fontSize: 18,
    color: '#4F565E',
    marginTop: 5,
  },
  descriptiontext: {
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 14,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#4F565E',
    borderRadius: 10,
    padding: 14,
  },
  btntext: {
    color: '#fff',
  },
  activitymegawrapper: {
    flexDirection: 'row',
    margin: 20,
  },
  activity: {
    height: 20,
    width: 20,
    borderRadius: 5,
    marginTop: 1,
    marginLeft: 1,
    backgroundColor: 'green',
  },
  ligthgreen: {
    backgroundColor: ligthgreen,
  },
});
