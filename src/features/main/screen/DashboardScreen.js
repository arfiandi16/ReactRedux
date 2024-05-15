import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors, sizes } from "../../../theme";

const DashboardScreen = () => {
    return (
       <View style={styles.container}>
        <TouchableOpacity style={styles.card}>
            <Text style={styles.title}>What is Lorem Ipsum?</Text>
            <Text style={styles.description}>Loahsdbdjb hjbasj bjb asjb hjasbjb a asb d asbj bashjb hjsbhjas bjbasd jbadsj bhjadsb hjbasd bhjsadb hjbadsj bjas hjbads jbj abjb jabs bhj bhjas bhjbas badsbhjabhj bas hjbadsj dbhjabs hjbhja bj bashjbhj adsjh sabhjbsabjba jbadsj bhjdbsa jbjsa bjabs hjas </Text>
        </TouchableOpacity>
           
       </View> 
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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

