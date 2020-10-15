import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    infoContainer: {
        flexDirection: "row",
    },
    infoIcon: {
        height: 20,
        resizeMode: "contain",
        marginRight: 15
    },
    nextButtonContainer: {
        width: "100%",
        alignItems: "flex-end",
        marginTop: 20
    },
    itemContainer: {
        width: "90%",
        borderRadius: 15,
        borderStyle: "dotted",
        padding: 10,
        borderWidth: 1,
        alignSelf: "center",
        backgroundColor: "white",
        marginTop: 15
    },
    itemWrapper: {
        justifyContent: "space-between",
        flexDirection: "row",
    },
    itemTitle: {
        color: "black",
        fontSize: 17
    },
    itemDaysDetails: {
        color: "#5742fe",
        fontSize: 15,
        marginTop: 5
    },
    editIcon: {
        height: 20,
        resizeMode: "contain"
    }
});
export default styles;