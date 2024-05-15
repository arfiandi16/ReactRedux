import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert } from "react-native";
import { colors, sizes } from "../../../theme";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote } from "../../../store/actions/noteActions";

const DashboardScreen = () => {
    const notes = useSelector((state) => state.notes.notes);
    const dispatch = useDispatch();
    console.log(notes);

    const onDelete = () => {
        
    }

    const noteRender = (item) => (
        <TouchableOpacity style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <TouchableOpacity onPress={() => Alert.alert(
            'Delete Note?',
            'Are you sure ?',
            [
                {
                    text:'Cancel',
                    onPress: () => {},
                    style: 'cancel'
                },
                {
                    text:'OK',
                    onPress: () => {dispatch(deleteNote(item.id))}
                }
            ]
        )}> 
            <Text>Delete</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    );
    return ( 
            <FlatList 
                data={notes}
                contentContainerStyle={styles.container}
                keyExtractor={(item,index) => index.toString()}
                renderItem={({item}) => noteRender(item)}
            />
            
    );
}

const styles = StyleSheet.create({
    container: { 
        padding: sizes.xl2/2
    },
    card : {
        margin : sizes.xl2 /2,
        paddingHorizontal : sizes.large,
        paddingVertical : sizes.xl2,
        borderRadius : sizes.large,
        borderColor : colors.textColors.black,
        borderWidth : 1,
    },
    title : {
        color : colors.textColors.black,
        fontWeight : '600',
        fontSize : sizes.large,
        marginBottom : 8
   },
    description : {
        color : colors.textColors.grey,
        fontWeight: '400',
        fontSize : sizes.small
    }

});

export default DashboardScreen;

