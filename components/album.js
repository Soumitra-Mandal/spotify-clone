import { StyleSheet, Text,Image, View} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';



export default function  AlbumComponent(props){
    return (
        <View style= {styles.container}>
        <Image 
        style ={styles.image}
        source={{uri:props.album.imageUri}}
/>
            <Text style = {styles.text}>
                {props.album.artistNames}
            </Text>
        </View>
    )
}

AlbumComponent.propTypes = {
    id:PropTypes.string,
    image:PropTypes.string,
    artistNames:PropTypes.string,
}
const styles = StyleSheet.create({
    container: {
    width:175,
     margin:10,
    },
    text:{
      fontSize: 16,
      marginTop:8,
      color:"#555"
  
    },
    image:{
        height:175,
        width:"100%"
    }
  });
  
