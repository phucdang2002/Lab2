import { StyleSheet } from "react-native";
export default styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#F5F5F5'
    },
    btn: {
        width: 80,
        height: 70,
        borderWidth: 1,
        borderRadius: 70,
    },
    num: {
        textAlign: "center",
        lineHeight: 70,
        fontSize: 30
    },
    cal: {
        textAlign: "center",
        lineHeight: 70,
        fontSize: 25,
        color: '#FF9501',
    },
    clear: {
        textAlign: "center",
        lineHeight: 70
    },
    equal: {
        textAlign: "center",
        lineHeight: 70,
        color: "#fff",
        fontSize: 25
    },
    btnCal: {
        width: 80,
        height: 70,
        backgroundColor: '#F0F0F0',
        borderWidth: 1,
        borderRadius: 50,
    },
    btnZero: {
        width: 160,
        height: 70,
        textAlign: "center",
        borderWidth: 1,
        borderRadius: 50,
    },
    btnEqual: {
        width: 80,
        height: 70,
        textAlign: "center",
        borderWidth: 1,
        borderRadius: 50,
        backgroundColor: '#FF9501'
    },
    btnClear: {
        width: 320,
        height: 80,
        borderWidth: 1,
        borderRadius: 50,
    },
    result : {
        textAlign: "center",
        fontSize: 35
    }
})