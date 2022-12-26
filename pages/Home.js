import React from 'react'
import { ScrollView, View } from 'react-native'
import styles from 'styles/Main.style'
import setStyle from 'styles/Home.style'
import SearchBar from 'components/SearchBar'

import TabbedNavigation from 'components/home-components/TabbedNavigation'
import Profile from 'components/home-components/Profile'
import Booking from 'components/home-components/Booking'
import Places from 'components/home-components/Places'

export default Home = ({ navigation }) => {

    return (
        <ScrollView style={[setStyle.container, styles.bgDark]}>
            <Profile navigation={navigation} />
            <SearchBar />
            <TabbedNavigation />
            <Booking />
            <Places />
        </ScrollView >

    )
}
