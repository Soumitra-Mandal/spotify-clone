import { StyleSheet, FlatList, View} from 'react-native';
import React from 'react';
import AlbumCategory from '../albumcategory.js';

const gradient = `linear-gradient(-120deg, green, white)`;
const albumCategories =[
  {
  id:'1',
  title: 'Weekend Blues',
  albums:
  [
  {
  id:'1',
  imageUri:'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg?ts=1561488440',
  artistNames:'Ryan Jones, Avicii, George Brown'
},

{
  id:'2',
  imageUri:'https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Charlie_Puth_-_Nine_Track_Mind.png/220px-Charlie_Puth_-_Nine_Track_Mind.png',
  artistNames:'Charlie Puth, Greenday'
},
{
  id:'3',
  imageUri:'https://i.pinimg.com/originals/48/24/93/48249335e8c3852d59a5a27e054bb8d2.jpg',
  artistNames:'Weekend, Marshmello'
},
{
  id:'4',
  imageUri:'https://i.pinimg.com/originals/98/f1/8d/98f18df052ee2bbc6e4c64db946f3ead.jpg',
  artistNames:'Taylor Swift, Maroon 5, Armaan Malik'
}
]},
{
  id:'2',
  title: 'Your Favorite Artists',
  albums:
  [
  {
  id:'1',
  imageUri:'https://i.pinimg.com/originals/5b/c5/22/5bc522cf1e82f5299a738f9c324e9c59.jpg',
  artistNames:'Coldplay'
},

{
  id:'2',
  imageUri:'https://i.pinimg.com/originals/1a/81/da/1a81da98a86b1b584e124c597362ad7c.jpg',
  artistNames:'Sam Smith'
},
{
  id:'3',
  imageUri:'https://i.pinimg.com/originals/48/8c/f8/488cf80589a59fc9b7b72821e59036fe.jpg',
  artistNames:'Chainsmokers'
},
{
  id:'4',
  imageUri:'https://static.qobuz.com/images/covers/0a/g6/d3l181j9vg60a_600.jpg',
  artistNames:'Arijit Singh'
}
]},
{
  id:'3',
  title: 'Recently Played',
  albums:
  [
  {
  id:'1',
  imageUri:'https://i.pinimg.com/originals/90/6f/53/906f5344d12da76ec53c2e87978a786d.jpg',
  artistNames:'Marshmello'
},

{
  id:'2',
  imageUri:'https://i.pinimg.com/originals/93/46/ae/9346ae87fe8ffc5b2a9903c934a98832.jpg',
  artistNames:'Shawn Mendes'
},
{
  id:'3',
  imageUri:'https://i.pinimg.com/originals/2e/77/20/2e77207a8cbdac3bbff129c22995a9ea.jpg',
  artistNames:'Camila Cabello'
},
{
  id:'4',
  imageUri:'https://i.pinimg.com/564x/86/56/9f/86569ff32bf66e39dcd79d66fcfae814.jpg',
  artistNames:'Ed Sheeran'
}
]}


]




function HomeScreen() {
    return (
      <View style = {styles.container}>
     
    <FlatList
    data = {albumCategories}
    renderItem={
      ({item})=>  (
      <AlbumCategory 
      title = {item.title}
      albums= {item.albums} 

      />
      )}
      keyExtractor = {(item)=>item.id}
      showsHorizontalScrollIndicator={false}
      horizontal ={false}
    />
    </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      paddingTop:70,
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',    
    },
   cat:{

   },
   background:{
     flex:1,
   }
  });
  

export default HomeScreen;