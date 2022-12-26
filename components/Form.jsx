import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from 'styles/Main.style'



const Form = ({ heading, fields, cta, onSubmit }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)


    const handleSubmit = async () => {

        if (fields[1] === 'Name') {

            if (!email || !name || !password) {

                alert('Fill all fields')
                setLoading(false)
                return
            }
        }

        if (!email) {

            alert('Fill all fields')
            setLoading(false)
            return
        }
        try {

            onSubmit && onSubmit()
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <View styles={styles.formContainer}>
            {heading &&
                <Text style={styles['paragraph']}>{heading}</Text>
            }

            {fields[1] === "Name" &&
                (<>
                    <Text style={styles.label}>{fields[1]}</Text>
                    <TextInput name={fields[1]}
                        value={name}
                        onChangeText={text => setName(text)}
                        style={styles.inputComponent}
                        autoCapitalize={'words'}
                        autoCorrect={true}
                    />
                </>)
            }

            {fields[0] === "Email" &&
                <>
                    <Text style={styles.label}>{fields[0]}</Text>
                    <TextInput name={fields[0]}
                        value={email}
                        onChangeText={text => setEmail(text)}
                        style={styles.inputComponent}
                        autoComplete={'email'}
                        keyboardType={'email-address'}
                    />
                </>
            }

            {fields[2] === "Password" &&
                <>

                    <Text style={styles.label}>{fields[2]}</Text>
                    <TextInput name={fields[2]}
                        value={password}
                        onChangeText={text => setPassword(text)}
                        style={styles.inputComponent}
                        autoComplete={'password'}
                    />
                </>
            }


            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>{loading ? '...' : cta}</Text>
            </TouchableOpacity>
        </View >
    )
}

export default Form