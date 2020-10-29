import React from 'react';
import { Image, StyleSheet} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';
import AppButton from './AppButton';
import AppText from '../components/AppText';
import { set } from 'react-native-reanimated';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
})

function LoginScreen({setLogin}) {
  let acceptable = {
    email: "email@gmail.com",
    password: "1234", 
  }
  const handleSubmit = (values) => {
    let emailMatch = values.email === acceptable.email;
    let passwordMatch = values.password === acceptable.password;
    if (emailMatch && passwordMatch) {
      setLogin()
    } else {
      alert('Sorry, wrong combo!');
    }
  }

  return (
    <Screen style={styles.container}>
      <Image 
      style={styles.logo}
      source={require('../assets/myLogo.png')}/>

      <Formik
      initialValues={{email: '', password: ''}}
      onSubmit={(values) => handleSubmit(values)}
      validationSchema={validationSchema}
      > 
        { ( {handleChange, handleSubmit, values, errors, setFieldTouched, touched} ) => (
          <>
          <AppTextInput 
          autoCapitilize="none"
          autoCorrect={false}
          icon="email"
          multiline={false}
          keyboardType="email-address"
          onBlur={() => setFieldTouched("email")}
          placeholder="Email"
          onChangeText={handleChange("email")}
          value={values.email}
          />
          {touched.email && <AppText style={{color: "red", paddingLeft: 10}} title={errors.email}></AppText>}
          <AppTextInput 
          autoCapitilize="none"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          onBlur={() => setFieldTouched("password")}
          multiline={false}
          secureTextEntry={true}
          onChangeText={handleChange("password")}
          value={values.password}
          />
          {touched.password && <AppText style={{color: "red", paddingLeft: 10}} title={errors.password}></AppText>}
          <AppButton title="Login" color="blue" onPress={handleSubmit}/>
        </>
        ) }
      </Formik>
    </Screen>
  )
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80, 
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  }
})
export default LoginScreen;