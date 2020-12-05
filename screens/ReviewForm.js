import React , {useState} from 'react';
import {StyleSheet, View, Text, Button, TextInput} from 'react-native';
import {globalStyles} from '../styles/global';
import {Formik} from 'formik';
import * as yup from 'yup';
import Flatbutton from '../shared/submitButton';

const reviewSchema = yup.object({
    title: yup.string()
        .required()
        .min(4),
    body: yup.string()
        .required()
        .min(8),
    rating: yup.string()
        .required()
        .test('is-num-1-5','Rating must be a number 1-5',(val)=>{
            return parseInt(val) < 6 && parseInt(val) > 0;
        })
})


export default function ReviewForm({addReview}) {
    return (
        <View style={globalStyles.container} >
            <Formik
                initialValues={{ title:'' , body:'', rating:'' }}
                validationSchema={reviewSchema}
                onSubmit={(values)=>{
                    addReview(values);
                }}
            >
                {(props)=>(
                    <View>
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Review Title'
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                            onBlur={props.handleBlur('title')}
                        /> 
                        <Text styles={globalStyles.errorText} >{props.touched.title &&props.errors.title}</Text>
                        <TextInput 
                            multiline minHeight={60}
                            style={globalStyles.input}
                            placeholder='Body'
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                            onBlur={props.handleBlur('body')}
                        />
                        <Text styles={globalStyles.errorText} >{props.touched.body && props.errors.body}</Text>
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Rating(1-5)'
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                            keyboardType='numeric'
                            onBlur={props.handleBlur('rating')}
                        />
                        <Text styles={globalStyles.errorText} >{props.touched.rating &&props.errors.rating}</Text>
                        {/* <Button color='maroon' title='Submit' onPress={()=> props.handleSubmit()} /> */}
                        <Flatbutton text='submit' onPress={props.handleSubmit} />
                    </View>
                )}

            </Formik>
        </View>
    )
}
