import { Button, StyleSheet, Text, View } from 'react-native'

import React from "react";

const Products = ({navigation}) =>{
    return(
    <View style={styles.container}>
         <Button
            title="ver detalles del producto"
            onPress={()=>navigation.navigate('productDetail')}
            color="#000"

        />
    </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
       
        
    },
   
})


export default Products;