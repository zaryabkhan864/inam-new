import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { BleManager } from "react-native-ble-plx";

const bloodPressure = [
  { up: "100", lp: "120" },
  { up: "120", lp: "125" },
  { up: "110", lp: "125" },
  { up: "110", lp: "130" },
  { up: "90", lp: "140" },
  { up: "80", lp: "155" },
  { up: "102", lp: "120" },
  { up: "105", lp: "140" },
];
const BloodPressure = ({ navigation }) => {
  const [displayText, setDisplayText] = useState("Ready");
  const [devices, setDevices] = useState([]);
  const [manager, setManager] = useState();


  useEffect(() => {
    setManager(new BleManager());

    return () => {
      if (manager) {
        manager.destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (manager) {
      const subscription = manager.onStateChange(state => {
        if (state === "PoweredOn") {
          scanAndConnect();
          subscription.remove();
        }
      }, true);
    }
  }, [manager]);

  const scanAndConnect = () => {
    manager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        // Handle error (scanning will be stopped automatically)
        return;
      }

      // Check if it is a device you are looking for based on advertisement data
      // or other criteria.
      if (device.name === "TI BLE Sensor Tag" ||
        device.name === "SensorTag") {

        // Stop scanning as it's not necessary if you are scanning for one device.
        this.manager.stopDeviceScan();

        // Proceed with connection.
      }
    });
  };

  const startScan = () => {
    manager.startDeviceScan(
      null,
      {
        allowDuplicates: false,
      },
      async (error, device) => {
        setDisplayText("Scanning...");
        if (error) {
          manager.stopDeviceScan();
        }
        console.log(device.localName, device.name);
        if (device.localName == "Test" || device.name == "Test") {
          setDevices([...devices, device]);
          manager.stopDeviceScan();
        }
      },
    );
  };
  return (
    <View style={styles.container}>
      {/* <Button onClick={scanAndConnect}>Add Bluetooth</Button> */}
      <Button title="Add Bluetooth" onPress={startScan} />
      <Text style={styles.myHeading}>Blood Pressure Monitoring</Text>
      <Text>{displayText}</Text>
      {bloodPressure &&
        bloodPressure?.map((items, key) => (
          <View>
            <Text>
              Upper BP {items.up} || Lower BP {items.lp}
            </Text>
          </View>
        ))}
    </View>
  );
};

export default BloodPressure;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8fcbbc",
  },
  myHeading: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "10 px",
  },
});
