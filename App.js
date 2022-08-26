import React from "react"; 
import { I18nManager, Text, View } from "react-native";
import COLORS from "./Colors.js";
import ButtomBar from "./components/ButtomBar.js";
import SendMessegeButton from "./components/SendMessegeButton.js";
import styles from "./styles.js";

I18nManager.allowRTL(false);

const App = () => {
  return(
    <>
      <View style={{flex: 9}}></View>
      <ButtomBar/>
    </>
  );
};

export default App;