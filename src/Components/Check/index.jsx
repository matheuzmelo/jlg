import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ButtonCheck, ButtonValue } from "./styles";
import { TouchableOpacity } from "react-native";

const Check = (props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(props.route || "")}>
      <ButtonValue>{props.value || "check"}</ButtonValue>
    </TouchableOpacity>
  );
};

export default Check;
