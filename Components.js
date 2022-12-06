import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Model, Button,Alert } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Atricle = ({title}) => {
    return(
        <View style={{backgroundColor:"#ede3d0",marginBottom:10,marginTop:10}}>
        <Text style={{margin:10,marginBottom:0,fontWeight:"bold",fontSize:16}}>
        {title}
        </Text>
        <Text style={{margin:10,marginTop:0}}>
        Pellentesque sollicitudin gravida velit, ut mattis leo porta sed. Mauris enim dui, tempor maximus arcu eu, tristique ornare purus. Sed vel fermentum lorem. In pulvinar vel odio in auctor. Donec aliquam orci non lectus placerat, id euismod diam facilisis. Donec suscipit tincidunt urna a suscipit. Quisque viverra imperdiet commodo. Nulla quis faucibus sapien. Suspendisse at ipsum nec arcu interdum sagittis. Sed a arcu dictum, tempor felis eu, congue metus. Fusce eget felis justo.
        </Text>
        </View>
    )
}
const LoadMore =({setIsLoading}) => {
    return(
        <Button title='Load More'
            onPress={() => {
              setIsLoading((prevValue)=>!prevValue)
              Alert.alert(

               "Unable To Load",
               "Alert There was an error. Please try again.",
               [
                  {
                    text: "OK",
                    onPress: () => setIsLoading((prevValue)=>!prevValue)
                  },
               ],
             );
           }}
         />
    )
    
}

export {Atricle,LoadMore}
