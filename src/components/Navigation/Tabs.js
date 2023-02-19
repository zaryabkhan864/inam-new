import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FirstScreen from '../Screens/FirstScreen';
import BloodPressure from '../Screens/BloodPressure';
import ThirdScreen from '../Screens/ThirdScreen';
import FourthScreen from '../Screens/FourthScreen';
const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={FirstScreen} />
      <Tab.Screen name="BloodPressure" component={BloodPressure} />
      <Tab.Screen name="Third" component={ThirdScreen} />
      <Tab.Screen name="Fourth" component={FourthScreen} />
    </Tab.Navigator>
  );
};
export default Tabs;
