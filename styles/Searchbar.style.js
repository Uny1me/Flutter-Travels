import { StyleSheet } from "react-native";

// styles
export default StyleSheet.create({
    container: {
        marginVertical: 20,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: "100%",

    },
    searchBar__unclicked: {
        padding: 10,
        flexDirection: "row",
        width: "100%",
        backgroundColor: 'rgba(255, 252, 253, 0.1)',
        borderRadius: 12,
        alignItems: "center",
    },
    searchBar__clicked: {
        padding: 10,
        flexDirection: "row",
        width: "100%",
        backgroundColor: "rgba(255, 252, 253, 0.1)",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    input: {
        fontSize: 20,
        marginLeft: 10,
        width: "100%",
        color: '#fff',
    },

});