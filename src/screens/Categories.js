import { Button, StyleSheet, Text, View } from 'react-native'

import React from "react";

const Categories = ({navigation}) =>{
    return(
    <View style={styles.container}>
        <Text>Categories</Text>
        <Button
            title="Ir a tienda"
            onPress={()=>navigation.navigate('Products')}
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


export default Categories;