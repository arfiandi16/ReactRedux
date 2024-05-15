import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const initialState = {
    notes : [
        {
            id : '1',
            title : 'What is Lorem Ipsum?',
            description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        },
        {
            id : '2',
            title : 'Why do we use it?',
            description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        },
        {
            id : '3',
            title : 'Why do we use it?',
            description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        },
        {
            id : '4',
            title : 'Why do we use it?',
            description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        },
        {
            id : '5',
            title : 'Why do we use it?',
            description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        }
    ]
}

const notesReducers = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_NOTES':
        return {...state, notes : [...state.notes, action.payload]};
    case 'DELETE_NOTE':
        return {...state, notes : state.notes.filter(note => note.id !== action.payload)};
    default :
        return state;
  }
}

export default notesReducers

const styles = StyleSheet.create({})