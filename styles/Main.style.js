import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#242424',
        paddingHorizontal: 20,
        justifyContent: 'center',
        paddingTop: 80,
    },
    heading: {
        color: '#FFF9FC',
        fontWeight: '600',
        fontSize: 30,
        fontFamily: 'SF Pro',
        textAlign: 'center'
    },
    paragraph: {
        fontWeight: '600',
        fontSize: 20,
        color: '#FFF9FC',
        textTransform: 'uppercase',
        letterSpacing: .75,
        marginVertical: 30,
        textAlign: 'center',
    },
    smallText: {
        fontWeight: '600',
        fontSize: 12,
        color: '#FFF9FC',
        textTransform: 'uppercase',
        letterSpacing: .75,
        marginVertical: 10,
        textAlign: 'center',
    },
    inputComponent: {
        marginVertical: 10,
        paddingHorizontal: 10,
        fontSize: 18,
        paddingVertical: 8,
        borderWidth: 1,
        marginBottom: 30,
        backgroundColor: 'white',
        borderRadius: 5
    },
    label: {
        color: '#FFF9FC',
        textTransform: 'uppercase',
    },
    formContainer: {

    },
    button: {
        backgroundColor: '#2596be',
        paddingVertical: 12,
        marginVertical: 6,
        borderRadius: 5
    },
    buttonText: {
        color: '#fff9fc',
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: .75,
        fontFamily: 'SF Pro Bold',
        fontWeight: '600'
    },
    bigflex: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    flexCSB: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    textFT: {
        color: '#2596be'
    },
    textWhite: {
        color: '#fffcfd',
        fontFamily: 'SF Pro'
    },
    textDark: {
        color: '#1E0713',
        fontFamily: 'SF Pro'
    },
    textBold: {
        fontFamily: 'SF Pro Bold'
    },
    bgDark: {
        backgroundColor: '#242424',
    },

});

