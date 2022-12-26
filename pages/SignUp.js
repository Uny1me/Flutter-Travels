import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Form from 'components/Form'
import Logo from 'components/Logo'
import styles from 'styles/Main.style'
import { routePage } from 'utils/home'


const SignUp = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Logo />
            <Text style={styles.heading}>Welcome To Flutter Travels</Text>
            <Form cta="Create account" heading='Create an account' fields={['Email', 'Name', 'Password']} />
            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={styles.smallText}>Already have an account? &nbsp;</Text>
                <TouchableOpacity onPress={() => routePage(navigation, 'Welcome')}>
                    <Text style={[styles.smallText, styles.textFT]}>SIGN IN</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}


export default SignUp