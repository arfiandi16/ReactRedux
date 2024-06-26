import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignInScreen, SignUpScreen} from '../features/auth';
import {DashboardScreen} from '../features/main';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import Firebase from '../../firebaseConfig';
import {Ionicons} from '@expo/vector-icons';
import { ActivityIndicator, Pressable, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NotesScreen from '../features/main/screen/NotesScreen';
import { colors } from '../theme';


const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const navigation = useNavigation();
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(Firebase.auth, (user) => {
            if(user){
                setUser(user);  
            }
            else {
                setUser(null);
            }
            setLoading(false);
        })
        return () => unsubscribe();
    },[]);

    if(loading){
        return(
            <View style={{
                flex : 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <ActivityIndicator size='small' color={colors.primary.blue}/>
            </View>
        )
    }

    const signOutHandler = async () => {
        try {
            await signOut(Firebase.auth);
        }
        catch (error){
            console.error(error);
        }
    }
    
    console.log("UserData : " + user);
    return (
        <Stack.Navigator
            screenOptions={{ 
            headerStyle: {backgroundColor:'white'}
          }}>
            
            {user ? (        
                
                <Stack.Screen name='DashboardScreen' component={DashboardScreen} 
                    options={{
                        headerTitle : 'ODP Batch 4',
                        headerTitleAlign:'center',
                        headerLeft: () => (
                            <Ionicons
                                name='person-circle'
                                size={24} 
                                color={'grey'}
                                style={{marginHorizontal:10}}
                                onPress={signOutHandler}
                            /> 
                        ),
                        headerRight: () => (
                            <Ionicons
                                name='add-circle-sharp'
                                size={24} 
                                color={'grey'}
                                style={{marginHorizontal:10}}
                                onPress={() => navigation.navigate('NotesScreen')}
                            />  
                        )
                    }}
                />

            ) : (
                <Stack.Screen name='SignInScreen' component={SignInScreen} options={{
                    headerShown: false,
                }}/>
            )
            }
            <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
            <Stack.Screen name='NotesScreen' component={NotesScreen} />
        </Stack.Navigator>
    );
}

export default StackNavigator;