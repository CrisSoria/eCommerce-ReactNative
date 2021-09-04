import React, {useState} from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './styles';
import countryList from 'country-list';
import Button from '../../components/Button/Button';

const countries = countryList.getData();
// console.log('paises',countries);

interface InitialState {
  fullname: string;
  phone: string;
  address: string;
  city: string;
}

const AddressScreen = () => {
  const [country, setCountry] = useState(countries[0].code);

  const initialState: any = {
    fullname: '',
    phone: '',
    address: '',
    city: '',
  };
  const [inputs, setInputs] = useState(initialState);

  const [errors, setErrors] = useState(initialState);

  const configInputs: any = {
    fullname: {
      placeholder: 'Full Name',
      label: 'Full Name (First and Last Name)',
      validate: () => {
        if (inputs.fullname.length < 5) {
          setErrors({...errors, fullname: 'Name is too short'});
        }
      },
    },
    phone: {
      placeholder: 'Phone Number',
      label: 'Phone Number',
      validate: () => {},
    },
    address: {
      placeholder: 'Address',
      label: 'Address',
      validate: () => {},
    },
    city: {
      placeholder: 'City',
      label: 'City',
      validate: () => {},
    },
  };

  const onCheckout = () => {
    //verifico la existencia de errores
    Object.values(errors).forEach(value => {
      if (value !== '') {
        Alert.alert('Fix all field errors befor submiting');
        return;
      }
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}>
      <ScrollView style={styles.root}>
        <View style={styles.row}>
          <Picker selectedValue={country} onValueChange={setCountry}>
            {countries.map((country, i) => (
              <Picker.Item key={i} value={country.code} label={country.name} />
            ))}
          </Picker>
        </View>

        {/* INPUTS */}
        {Object.keys(inputs).map((key, i) => (
          <View style={styles.row} key={i}>
            <Text style={styles.label}>{configInputs[key].label}</Text>
            <TextInput
              style={styles.input}
              placeholder={configInputs[key].placeholder}
              value={inputs[key]}
              onChangeText={value => {
                setInputs({...inputs, [key]: value});
                setErrors({...errors, [key]: ''});
              }}
              keyboardType={key === 'phone' ? 'phone-pad' : 'default'}
              onEndEditing={configInputs[key].validate}
            />
            {!!errors[key] && <Text style={styles.errors}>{errors[key]}</Text>}
          </View>
        ))}

        <Button text="Checkout" onPress={onCheckout} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddressScreen;
