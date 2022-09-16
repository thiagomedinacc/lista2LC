import { TouchableOpacity, StyleSheet, Switch } from "react-native";
import { useState } from 'react';


export default function Toogle (props) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <Switch 
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        onChange = {props.onChange}
      />
    )
}

const styles = StyleSheet.create ({
    
})
    
