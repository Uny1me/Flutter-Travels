import React, { useState } from 'react'
import {  TouchableOpacity } from 'react-native'
import styles from 'styles/Home.style'

const HoverableButton = (props) => {
    const [hover, setHover] = useState(false)
    return (
        <TouchableOpacity
            activeOpacity={1}
            style={[{ cursor: 'pointer' }, hover ? styles.hoverSyle : styles.smallBtn]}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >

            <TouchableOpacity {...props} />
        </TouchableOpacity>
    )
}

export default HoverableButton