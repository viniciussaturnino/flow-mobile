import React from "react";
import { View, StatusBar } from "react-native";

const App: React.FC = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#FFF" />
    <View style={{ flex: 1, backgroundColor: "#FFF" }} />
  </>
);

export default App;
