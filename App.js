import { StyleSheet, Text, View, Image, ScrollView, Button, Modal, Pressable, TextInput,ActivityIndicator,ImageBackground } from 'react-native';
import { Atricle,LoadMore } from "./Components"
import { useState } from 'react';


export default function App() {
  const [model, setModel] = useState(false)
  const [userName, setUserName] = useState("Guest")
  const [isLoading, setIsLoading] = useState(false)
  const [userPic, setUserPic] = useState(require("./assets/icon.png"))
  let tempName = ""


  return (
    <View style={styles.container}>
      <View style={styles.header}>

        <Text style={{ color: "white", fontSize: 31, marginLeft: 10 }}>Hello {userName}!</Text>
        <Pressable
          onPress={() => {
            setModel((prevValue)=> !prevValue)
            }}>
          
          <ImageBackground style={{ height: 70, width: 70, marginRight: 10,  }}
            imageStyle = {{borderRadius:200}}
            source={userPic}
          >
            <Text style={{backgroundColor:"white",fontWeight:"bold",textAlign:"center", marginTop:50}}>{userName}</Text>
          </ImageBackground>
          
        </Pressable>
      </View>

      <Text style={{ marginTop: 10, fontWeight: "bold", fontSize: 23, marginLeft: "10%" }}>Today's Highlights</Text>

      <ScrollView style={{ marginLeft: "10%", marginRight: "10%" }}>

        <Atricle title={"First Article"} />
        <Atricle title={"Another Article"} />
        <Atricle title={"Important One"} />
        <ActivityIndicator
           animating={isLoading}
            size="small"
            color="#0000ff"
          />  
        <LoadMore setIsLoading={setIsLoading}/>

      </ScrollView>

      <Modal visible={model} transparent={true} animationType="fade">
        
        <View style={{ flex: 1,backgroundColor: 'rgba(52, 52, 52, 0.6)',justifyContent: "center",}}>
          <View style={{height:150,width:250,backgroundColor:"white", alignSelf:"center",borderRadius: 5,}}>
            <Pressable
            onPress={() => {
            setModel((prevValue)=> !prevValue)
          }}>
              <Image style={{ height: 25, width: 25,}}
              source={require("./assets/close.png")}
              />
            </Pressable>
            <Text style={{fontWeight:"bold", fontSize:20,marginLeft:20}}>Name:</Text>
            <TextInput
                placeholder="Initial Text"
                onChangeText={(value)=>{
                  tempName = value
                }}  
                
              />
            <Button title='Submit'
              
              onPress={() =>{
                setUserPic(require("./assets/User.png"))
                setUserName(tempName)
                setModel((prevValue)=> !prevValue)}
                }
            />
          </View>
        </View>
      </Modal>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  header: {
    marginTop: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 100,
    width: "100%",
    backgroundColor: "#632c8a",
    flexDirection: "row",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
});
