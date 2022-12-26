import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import style from 'styles/Home.style'
import mstyle from 'styles/Main.style'
import SelectDropdown from 'react-native-select-dropdown';


const Booking = () => {
    const cities = [
        'LOS', 'QUO', 'PHR', 'ABJ'
    ];

    return (
        <View>
            <Image style={style.ticket_background} source={require('assets/ticket.png')} />
            <View style={style.booking_container}>
                <View style={mstyle.flexCSB}>
                    <Text style={[mstyle.textWhite]}>From(Location)</Text>
                    <Text style={[mstyle.textWhite]}>To(Destination)</Text>
                </View>
                <View style={[mstyle.flexCSB]}>
                    <View style={{ width: '30%' }}>
                        <SelectDropdown
                            data={cities}
                            renderDropdownIcon={isOpened => {
                                return <Image source={require('assets/icons/arrow_drop_down.png')} style={{ width: 36, height: 24 }} />;
                            }}
                            // defaultValueByIndex={1} // use default value by index or default value
                            defaultValue={'LOS'} // use default value by index or default value
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem, index);
                            }}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                return selectedItem;
                            }}
                            rowTextForSelection={(item, index) => {
                                return item;
                            }}
                            buttonStyle={{ backgroundColor: 'transparent', alignItems: 'flex-start', paddingHorizontal: 0, width: '80%' }} buttonTextStyle={{ color: 'white', textAlign: 'left', marginHorizontal: 0 }}
                        />

                    </View>
                    <Image source={require('assets/icons/flight_takeoff.png')} />

                    <View style={{ width: '25%' }}>
                        <SelectDropdown
                            data={cities}
                            renderDropdownIcon={isOpened => {
                                return <Image source={require('assets/icons/arrow_drop_down.png')} style={{ width: 36, height: 24 }} />;
                            }}
                            // defaultValueByIndex={1} // use default value by index or default value
                            defaultValue={'QUO'} // use default value by index or default value
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem, index);
                            }}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                return selectedItem;
                            }}
                            rowTextForSelection={(item, index) => {
                                return item;
                            }}
                            buttonStyle={{ backgroundColor: 'transparent', alignItems: 'flex-start', paddingHorizontal: 0, width: '100%', }} buttonTextStyle={{ color: 'white', textAlign: 'left', marginHorizontal: 0 }}
                        />

                    </View>
                </View>
                {/* We need the logic to find through an array where the value from the select matches  the json and update a particular state */}


                <Image source={require('assets/icons/dotted_line_white.png')} style={{ width: '95%', marginHorizontal: 10, marginVertical: 12 }} />

                <View style={[mstyle.flexCSB, { width: '100%' }]}>
                    <Text style={{ color: 'rgba(255, 252, 253, 0.6)' }}>Passenger</Text>
                    <Text style={{ color: 'rgba(255, 252, 253, 0.6)' }}>Departure Date</Text>
                </View>
                <View style={[mstyle.flexCSB, { width: '100%', marginVertical: 6, }]}>
                    <Text style={[mstyle.textWhite, { alignSelf: 'center', width: '20%', textAlign: 'center' }]}>1</Text>
                    <Text style={mstyle.textWhite}>Sat, Oct 13 2022</Text>
                </View>
                {/* <View style={{ textAlign: 'center', width: '100%', borderColor: 'tomato', borderWidth: 1, alignItems: 'center' }}> */}

                <TouchableOpacity style={style.flight_button}>
                    <Text>Search flight here</Text>
                </TouchableOpacity>
                {/* </View> */}
            </View>
        </View >
    )
}

export default Booking