import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { BleManager } from 'react-native-ble-plx';
export const manager = new BleManager();
const bloodPressure = [
    { "up": '100', "lp": '120' },
    { "up": '120', "lp": '125' },
    { "up": '110', "lp": '125' },
    { "up": '110', "lp": '130' },
    { "up": '90', "lp": '140' },
    { "up": '80', "lp": '155' },
    { "up": '102', "lp": '120' },
    { "up": '105', "lp": '140' },
]
const BloodPressure = ({ navigation }) => {
    const startScan = () => {
        _BleManager.startDeviceScan(Null, {
            allowDuplicates: false,
        },
            async (error, device) => {
                setDisplaText('Scanning...');
                if (error) {
                    _BleManager.stopDeviceScan();
                }
                console.log(device.localName, device.name);
                if (device.localName == 'Test' || device.name == 'Test') {
                    setDevices([...devices, device]);
                    _BleManager.stopDeviceScan();
                }
            },);
    };
    return (
        <View style={styles.container}>
            {/* <Button onClick={scanAndConnect}>Add Bluetooth</Button> */}
            <Button title="Add Bluetooth"
                onPress={() => scanAndConnect} />
            <Text style={styles.myHeading}>Blood Pressure Monitoring</Text>
            {bloodPressure && bloodPressure?.map((items, key) => (
                <View>
                    <Text>Upper BP {items.up} || Lower BP {items.lp}</Text>
                </View>
            ))}
        </View>
    )
}

export default BloodPressure;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
    },
    myHeading: {
        marginBottom: 10,
        fontSize: 20,
        fontWeight: '10 px'
    }
})