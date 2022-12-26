import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Form from 'components/Form'
import Logo from 'components/Logo'
import styles from 'styles/Main.style'
import { routePage } from 'utils/home'


const SignIn = ({ navigation }) => {

    const routeHome = () => {
        routePage(navigation, 'Home')
    }

    return (
        <View style={styles.container}>
            <Logo />
            <Text style={styles.heading}>Welcome Back</Text>
            <Form fields={['Email']} cta="Sign in" onSubmit={routeHome} />
            <View style={styles.bigflex}>

                <Text style={styles.smallText}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => routePage(navigation, 'SignUp')}>
                    <Text style={[styles.smallText, styles.textFT]}> &nbsp; Create one</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default SignIn