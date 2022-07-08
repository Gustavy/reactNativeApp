import { Text, TouchableOpacity, View } from "react-native";
import { Button } from "../components/button";
import { Input } from "../components/input";
import { Typo } from "../components/typo";
import { Layout } from "../layout";
import * as Yup from "yup";
import { useFormik } from "formik";
import { register } from "../services/auth";
import { useState } from "react";

export function RegisterScreen({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [authError, setAuthError] = useState("");

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  
  const formik = useFormik({
      initialValues,
      validationSchema,
    });
    
const { handleChange, handleBlur, values, errors, touched } = formik;
  const handleSubmit = async () => {
    setLoading(true);
    setAuthError("");
    const res = await register(values);
    setLoading(false);
    if (!res?.success)
      return setAuthError(res?.message || "Something went wrong");
    navigation.navigate("Login");
  };

  return (
    <Layout>
      <View
        style={{
          marginTop: 106,
          paddingBottom: 24,
          flexGrow: 1,
          justifyContent: "space-between",
        }}
      >
        <View>
          <Typo weight="bold" size={24}>
            Create account
          </Typo>
          <Typo size={14} color="#ACB1C1" marginTop={8}>
            Fill in the details to get started
          </Typo>

          <View
            style={{
              marginTop: 32,
            }}
          >
            <Input
              placeholder="Enter your names"
              label="Names"
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
            />
            <Input
              placeholder="Enter your email"
              label="Email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
            <Input
              placeholder="Enter your password"
              label="Password"
              security={true}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
            />
          </View>

          <Button onPress={handleSubmit}>Sign Up</Button>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
            }}
          >
            Already have an account ?
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "#BB23F0",
              }}
            >
              {" "}
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
}
