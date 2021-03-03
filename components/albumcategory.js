import { StyleSheet, Text,FlatList, View} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import AlbumComponent from './album.js';

export default function AlbumCategory(props){
    return(
        <View style = {styles.container}>
            <Text style = {styles.text}>
                {props.title}
            </Text>
            <FlatList
      data={props.albums}
      renderItem={({ item }) => <AlbumComponent album={item} />}
      keyExtractor={( item ) => item.id}
      showsHorizontalScrollIndicator={false}
      horizontal
    />
        </View>
    )
}


const styles = StyleSheet.create({
container:{
    marginTop:5,
    },
    
text:{
    marginLeft:10,
    fontSize:24,
    fontWeight: "bold"
},
    list:{
        flex:1 ,
        marginTop:10,
    }
});