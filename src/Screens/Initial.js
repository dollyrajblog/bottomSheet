import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import * as Progress from 'react-native-progress';
import React, { useMemo, useRef, useState} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
const Initial = () => {
  const [check, setCheck] = useState(false);
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['60%', '90%'], []);
  const handleSheetChanges = index => {
    setCheck(!check);
    console.log('handleSheetChanges', index);
    console.log('===>', check);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <GestureHandlerRootView style={{flex: 1}}>
        <View></View>
        <BottomSheet
          ref={bottomSheetRef}
          index={0}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          containerOffset={0}
          containerStyle={{backgroundColor: 'lightblue'}}
          backgroundStyle={{
            backgroundColor: '#fff',
            borderRadius: 30,
            borderWidth: 1,
            borderColor: '#110257',
          }}
          handleComponent={() => (
            <Image
              source={
                check != true
                  ? require('../assets/images/scroll.png')
                  : require('../assets/images/remove.png')
              }
              style={{
                height: 30,
                width: 40,
                tintColor: '#110257',
                alignSelf: 'center',
              }}
            />
          )}>
          {/*<Progress.Pie progress={0.4} size={100}/>*/}
        </BottomSheet>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};
export default Initial;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  contentContainer: {
    alignItems: 'center',
  },
});
