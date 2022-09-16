import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Header() {
    return (
        <View style = {styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: '#333' }}>Swap</Text>
                <Text style={{ color: '#00f5d4' }}>Vest</Text>
            </View>
            <TouchableOpacity style = {{backgroundColor : 'blue' , borderRadius: 20, width: 50}}> 
                <Text>LOGIN</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    botao: {
        borderRadius: 15,
        backgroundColor: 'blue'
    },
    container: {
        width: 280,
        justifyContent: 'space-evenly', 
        flexDirection: 'row', 
    }
})