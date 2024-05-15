import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import  ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyAtG_vk-qkM6uqkkuls3T8fllTSL1eb3W4",
    authDomain: "project1test-6bc26.firebaseapp.com",
    projectId: "project1test-6bc26",
    storageBucket: "project1test-6bc26.appspot.com",
    messagingSenderId: "192963045731",
    appId: "1:192963045731:web:23c535ef8afa6e3c4c0b56",
    measurementId: "G-F4D6EFHWTV"
  };

const firebaseApp = initializeApp(firebaseConfig);

const firebaseAuth = initializeAuth(firebaseApp,{
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

const Firebase = {
    app : firebaseApp,
    auth : firebaseAuth
}

export default Firebase;