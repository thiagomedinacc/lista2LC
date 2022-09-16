import { StyleSheet, View, Text, Image } from "react-native"

export default function ClothingAdMosaico({ props }) {
    return (
        <View style={props.isDiscounted ? (props.isInStock ? styles.DescontoComEstoque : styles.DescontoSemEstoque) : props.isInStock ? styles.SemDescontoComEstoque : styles.SemDescontoComEstoque} >
            <View style={styles.textosInternos} >
                <Text>{props.title}</Text>
                {/* <Text>Valor: {props.originalValue}.00R$</Text> */}
                {props.isDiscounted ?
                    <View style={{ flexDirection: 'row' }}>
                        <Text>R$ </Text>
                        <Text style={{ textDecorationLine: 'line-through' }}> {props.originalValue}.00</Text>
                        <Text>--> R$ {props.currentValue}.00</Text>
                    </View>
                    :
                    <Text>Valor: {props.currentValue}.00R$</Text>
                }



                {/* <Text> {props.isDiscounted}</Text>
            <Text> {props.isInStock}</Text> */}
            </View>
            <Image style={styles.imagem} source={props.img} />


        </View>
    )


}

const styles = StyleSheet.create({
    SemDescontoSemEstoque: {
        flexDirection: 'row',
        borderWidth: 1,
        padding: 4,
        justifyContent: 'space-around',
        opacity: .5,
        aspectRatio: 2,
    },
    SemDescontoComEstoque: {
        flexDirection: 'row',
        borderWidth: 1,
        padding: 4,
        justifyContent: 'space-around',
        aspectRatio: 2,

    },
    DescontoComEstoque: {
        flexDirection: 'row',
        borderWidth: 1,
        padding: 4,
        justifyContent: 'space-around',
        backgroundColor: '#00f5d4',
        aspectRatio: 2,

    },
    DescontoSemEstoque: {
        flexDirection: 'row',
        borderWidth: 1,
        padding: 4,
        justifyContent: 'space-around',
        backgroundColor: '#00f5d4',
        opacity: .5,
        aspectRatio: 2,
    },
    mosaico: {
        justifyContent: 'center',
    },
    imagem: {
        height: 50,
        width: 50,
    },
    textosInternos: {
        flex: 1
    }
})