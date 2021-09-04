import React, {Dispatch, SetStateAction} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

interface HeaderComponentPros {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}

const HeaderComponent = ({
  searchValue,
  setSearchValue,
}: HeaderComponentPros) => (
  <SafeAreaView style={styles.root}>
    <StatusBar barStyle="dark-content" backgroundColor="#22e3dd" />
    <View style={styles.bar}>
      <Feather name="search" size={25} />
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={searchValue}
        onChangeText={setSearchValue}
      />
    </View>
  </SafeAreaView>
);

export default HeaderComponent;

const styles = StyleSheet.create({
  root: {backgroundColor: '#22e3dd'},
  bar: {
    margin: 10,
    padding: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    height: 40,
    marginLeft: 10,
    width: '100%',
  },
});
