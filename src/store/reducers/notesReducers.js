import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const initialState = {
    notes : [
        {
            id : 1,
            title : 'title 1',
            description : 'sambaladooooooo'
        },
        {
            id : 2,
            title : 'title 2',
            description : 'jansajansjansjasnjnas'
        }
    ]
}

const notesReducers = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_NOTES':
        return {...state, notes : [...state.notes, action.payload]};
    default :
        return state;
  }
}

export default notesReducers

const styles = StyleSheet.create({})