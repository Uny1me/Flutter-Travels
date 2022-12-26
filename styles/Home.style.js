import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        flex: 1,
        paddingTop: 30,
    },

    text: {
        fontSize: 20,
        lineHeight: 20,
    },
    textTwo: {
        fontSize: 16,
    },
    smallBtn: {
        backgroundColor: 'rgba(255, 252, 253, 0.2)',
        paddingVertical: 6,
        paddingHorizontal: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 113,
        height: 36,
        borderRadius: 12
    },
    smallBtn_text: {
        color: '#fffcfd',
    },
    icon: {
        marginRight: 8
    },
    hoverSyle: {
        backgroundColor: '#fff'
    },
    booking_container: {
        marginVertical: 32,
        paddingHorizontal: 16
    },
    ticket_background: {
        position: 'absolute',
        marginVertical: 20,
        width: '100%'

    },
    flight_button: {
        backgroundColor: 'white',
        alignItems: 'center',
        width: '50%',
        paddingVertical: 8,
        borderRadius: 12,
        paddingHorizontal: 16.5,
        alignSelf: 'center',
    },
    // Places
    heading: {
        fontSize: 16
    },
    borderStyle: {
        borderBottomWidth: 4,
        borderBottomColor: '#ff99cd',
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3
    },
    images_container: {
        paddingVertical: 8,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    }
})