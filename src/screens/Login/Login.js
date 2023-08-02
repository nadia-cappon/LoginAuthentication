import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useFormik } from "formik";
import * as yup from "yup";
import AuthenticationService from "../../services/AuthenticationService";
import { AntDesign } from "@expo/vector-icons"; 
import styles from "./style";
import { FontAwesome5 } from "@expo/vector-icons";

const Login = ({ setIsAuthenticated }) => {
  const [error, setError] = useState(false);

  const validationSchema = yup.object().shape({
    login: yup
      .string()
      .required("obligatoire")
      .test(
        "3len",
        "au moins 3 caractères",
        (val) => !!val && val.length >= 3
      ),
    password: yup
      .string()
      .required("obligatoire")
      .test(
        "3len",
        "au moins 3 caractères",
        (val) => !!val && val.length >= 3
      ),
  });

  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const isAuthenticated = await AuthenticationService.login(
          values.login,
          values.password
        );
        setIsAuthenticated(isAuthenticated);
        setError(!isAuthenticated);
      } catch (error) {
        console.error("Error during login:", error);
        setError(true);
      }
    },
  });

  return (
    <ImageBackground
      style={styles.bgImage}
      source={{ uri: 'https://images.pexels.com/photos/17475683/pexels-photo-17475683/free-photo-of-maisons-ete-jardin-maison.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
    >
      <View style={styles.container}>
        <View style={styles.logo}>
          <FontAwesome5 name="car" size={80} color="#F1F1E6" />
        </View>
        <View>
          <View>
            <AntDesign name="user" size={24} color="black" />
          </View>
          <TextInput
            placeholder="login"
            value={formik.values.login}
            onChangeText={formik.handleChange("login")}
            onBlur={formik.handleBlur("login")}
          />
        </View>
        <View>
          <View>
            <AntDesign name="key" size={24} color="black" />
          </View>
          <TextInput
            placeholder="password"
            value={formik.values.password}
            onChangeText={formik.handleChange("password")}
            onBlur={formik.handleBlur("password")}
            secureTextEntry
          />
        </View>
        <TouchableOpacity
          onPress={() => formik.handleSubmit()}
          style={styles.touchable}
        >
          <View>
            <Text>Se connecter</Text>
          </View>
        </TouchableOpacity>
        {error && <Text>Connexion impossible</Text>}
      </View>
    </ImageBackground>
  );
};

export default Login;

