import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import * as Progress from 'react-native-progress';

const PasswordGenerator = () => {
  const [lowercase, setLowerCase] = useState(true);
  const [uppercase, setUpperCase] = useState(false);
  const [number, setNumber] = useState(false);
  const [specificno, setSpecificNo] = useState(false);
  const [count, setCount] = useState(null);
  const [password_generated, setPassword_Generated] = useState(false);
  const [password, setPassword] = useState('');
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    if ((timer <= 20) & password_generated) {
      setTimeout(() => setTimer(timer + 1), 1000);
    } else {
      setTimer(0);
      generated();
    }
   
  }, [timer, password_generated]);

  const generated = () => {
    const change = parseInt(count);
    var newpassword = '';
    var result = '';
    if (lowercase) {
      newpassword += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (uppercase) {
      newpassword += 'ABCDEFGHIJKLMNOPQRSTUVWZYZ';
    }
    if (number) {
      newpassword += '0123456789';
    }
    if (specificno) {
      newpassword += '!@#$%&*+_-.?/|';
    }

    for (let i = 0; i < change; i++) {
      console.log('i', i, typeof change);
      result += newpassword.charAt(
        Math.round(Math.random() * newpassword.length),
      );
      console.log(
        newpassword.charAt(Math.round(Math.random() * newpassword.length)),
      );
    }
    setPassword(result);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          padding: 20,
        }}>
        <Text
          style={{
            color: '#000',
            fontSize: 20,
            fontWeight: 'bold',
            textDecorationLine: 'underline',
            alignSelf: 'center',
          }}>
          Password Generator
        </Text>
        <View style={styles.line}>
          <Text>Enter no of Characters</Text>
          <TextInput
            maxLength={2}
            keyboardType={'numeric'}
            style={{
              borderWidth: 1,
              borderColor: 'lightgrey',
              width: 100,
              borderRadius: 2,
              fontSize: 16,
              color: '#000',
              paddingHorizontal: 10,
            }}
            onChangeText={txt => setCount(txt)}
          />
        </View>
        <View style={styles.line}>
          <Text>Lower Case</Text>
          <BouncyCheckbox
            size={25}
            fillColor="green"
            unfillColor="#FFFFFF"
            disableBuiltInState
            isChecked={lowercase}
            onPress={() => setLowerCase(!lowercase)}
          />
        </View>
        <View style={styles.line}>
          <Text>Upper Case</Text>
          <BouncyCheckbox
            size={25}
            fillColor="blue"
            unfillColor="#FFFFFF"
            disableBuiltInState
            isChecked={uppercase}
            onPress={() => setUpperCase(!uppercase)}
          />
        </View>
        <View style={styles.line}>
          <Text>Numbers</Text>
          <BouncyCheckbox
            size={25}
            fillColor="orange"
            unfillColor="#FFFFFF"
            disableBuiltInState
            isChecked={number}
            onPress={() => setNumber(!number)}
          />
        </View>
        <View style={styles.line}>
          <Text>Specific Characters</Text>
          <BouncyCheckbox
            size={25}
            fillColor="cyan"
            unfillColor="#FFFFFF"
            disableBuiltInState
            isChecked={specificno}
            onPress={() => setSpecificNo(!specificno)}
          />
        </View>

        <TouchableOpacity
          style={{
            alignSelf: 'center',
            backgroundColor: 'red',
            padding: 10,
            borderRadius: 5,
          }}
          onPress={() => {
            setPassword_Generated(true), setTimer(0), generated();
          }}>
          <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>
            Generate Password
          </Text>
        </TouchableOpacity>
        <Text>{password}</Text>
        {password_generated ? (
          <View
            style={{
              flex: 1,
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            <View>
              <Progress.Bar
                progress={timer / 20}
                width={240}
                height={10}
                borderRadius={100}
                color={'green'}
                unfilledColor={'white'}
              />
              <Text>{`${timer}`}</Text>
            </View>
            <Progress.Circle
              size={100}
              indeterminate={false}
              progress={timer / 20}
              showsText={true}
              thickness={10}
              endAngle={0.9}
              formatText={() => <Text>{`${timer}`}</Text>}
              textStyle={{color: 'green', fontSize: 20, fontWeight: '800'}}
              color={'green'}
              unfilledColor={'#fff'}
            />
          </View>
        ) : null}
      </View>
    </SafeAreaView>
  );
};
export default PasswordGenerator;
const styles = StyleSheet.create({
  line: {
    flexDirection: 'row',
    // backgroundColor: 'green',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    height: 40,
  },
});
