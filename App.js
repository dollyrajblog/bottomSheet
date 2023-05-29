// import React, { useCallback, useMemo, useRef } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';

// const App = () => {
//   const bottomSheetRef = useRef(null);
//   const snapPoints = useMemo(() => ['25%', '50%','60%'], []);
//   const handleSheetChanges = useCallback((index) => {
//     console.log('handleSheetChanges', index);
//   }, []);
//   return (
//     <View style={styles.container}>
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <BottomSheet
//         ref={bottomSheetRef}
//         index={0}
//         snapPoints={snapPoints}
//         onChange={handleSheetChanges}
//         enableOverDrag={true}
//       >
//         <BottomSheetScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
//           <View style={styles.contentContainer}>
//             <Text>Awesome</Text>
//           </View>
//           <View style={styles.contentContainer}>
//             <Text>Awesome</Text>
//           </View>
//           <View style={styles.contentContainer}>
//             <Text>Awesome</Text>
//           </View>
//           <View style={styles.contentContainer}>
//             <Text>Awesome</Text>
//           </View>
//           <View style={styles.contentContainer}>
//             <Text>Awesome</Text>
//           </View>
//           <View style={styles.contentContainer}>
//             <Text>Awesome</Text>
//           </View>
//           <View style={styles.contentContainer}>
//             <Text>Awesome</Text>
//           </View>
//           <View style={styles.contentContainer}>
//             <Text>Awesome</Text>
//           </View>
//           <View style={styles.contentContainer}>
//             <Text>Awesome</Text>
//           </View>
//           <View style={styles.contentContainer}>
//             <Text>Awesome</Text>
//           </View>
//           <View style={styles.contentContainer}>
//             <Text>Awesome</Text>
//           </View>
//         </BottomSheetScrollView>
//       </BottomSheet>
//     </GestureHandlerRootView>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'grey',
//   },
//   contentContainer: {
//     flex: 1,
//     alignItems: 'center',
//   },
// });
// export default App;
import {SafeAreaView} from 'react-native';
import React from 'react';
import Initial from './src/Screens/Initial';
// import PasswordGenerator from './src/Screens/PasswordGenerator/PasswordGenerator'

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Initial />
    </SafeAreaView>
  );
};
export default App;
