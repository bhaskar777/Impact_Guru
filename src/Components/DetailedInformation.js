import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DetailedInformation = (props) => {
   
    return(
        <TouchableOpacity
        onPress={()=> props.navigation.navigate('Detail',{item:props.item})}
        >
        <LinearGradient
        style={styles.detailView}
        colors={['#43cea2', '#4568dc']}
        >
        {/* This condition is there to check is image is null or not */}
        <Image source={props?.item?.image != null ? {uri:props?.item?.image?.medium} : require('../../assets/icons/tv.jpeg')} style={styles.imageStyle} />
        <Text numberOfLines={2} style={styles.nameStyle}>{props.item.name}</Text>
        <Text  style={styles.nameStyle}>Season: {props.item.season}</Text>
        </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    detailView:{
        width: (Dimensions.get('window').width - 75)/2,
        height: (Dimensions.get('window').width * (260/375)),
        backgroundColor: "white",
        marginTop: 2,
        marginRight: 25,
        marginBottom: 40,
        borderRadius: 17.5,
        // backgroundColor: "black",
        borderColor: "black",
        borderWidth: 1,
       
    },
    imageStyle: {
        marginTop: 12,
        marginHorizontal: 12,
        borderRadius: 17.5,
        width: ((Dimensions.get('window').width - 75)/2) - 24,
        height: (Dimensions.get('window').width * (158/375)),
        backgroundColor: "gray"
    },
    nameStyle: {
        color: "#171717",
        marginHorizontal: 14,
        fontSize: 16,
        marginTop: 12,
    },
})

export default DetailedInformation