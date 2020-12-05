import React , {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, FlatList, Modal, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {globalStyles} from '../styles/global';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './ReviewForm';

export default function Home({navigation}) {
    const [modalOpen,setModalOpen] = useState(false);
    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
      ]);
      const addReview = (review) => {
          review.key=Math.random().toString();
          setReviews((prev)=>{
              return [review,...prev];
          });
          setModalOpen(false);
      }

      const deleteReview = (key) => {
          

          setReviews((prev)=>{
              return prev.filter((item)=> item.key != key);
          });
          setModalOpen(false);
      }
    return (
        <View style={globalStyles.container}>
        <Modal visible={modalOpen} animationType='slide' >
            <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            <View style={styles.modalContent} >
            <MaterialIcons 
            name='close'
            size={24}
            style={{...styles.modalToggle,...styles.modalClose}}
            onPress={()=>setModalOpen(false)}
            />
                <ReviewForm addReview={addReview}/>
            </View>
            </TouchableWithoutFeedback>
        </Modal>
        <MaterialIcons
        name='add'
        size={24}
        style={styles.modalToggle}
        onPress={()=>setModalOpen(true)}
         />
            <FlatList
            data={reviews}
            renderItem={({item}) => (
                <View>
                <Card styles={styles.Card}>
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails',item)}>
                    <Text>{item.title}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width:24, margin: 5}} onPress={() => deleteReview(item.key)}>
                    <MaterialIcons name='delete' size={24}/>
                </TouchableOpacity>
                    </Card>
                </View>
            )} />
          
        </View>
    )
}

const styles = StyleSheet.create({
    modalToggle:{
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'
    },
    
    itemRow:{
        flexDirection:'row',
    },
    modalContent:{
        flex:1
    },
    modalClose:{
        marginTop: 20,
        marginBottom: 0,
    }
})

