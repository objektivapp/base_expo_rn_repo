import { StyleSheet } from 'react-native';
import { colors } from '../../theme';


const styles = StyleSheet.create({
    overviewContainer: {
        flexDirection: "row",
    },
    infoImage: {
        height: 20,
        resizeMode: "contain",
        marginRight: 15
    },
    commitText: {
        color: colors.lightGrey,
        marginTop: 20,
        fontSize: 17
    },
    datePickerContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        marginTop: 20
    }
});
export default styles;