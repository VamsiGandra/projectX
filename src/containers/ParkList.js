import { TabNavigator } from 'react-navigation';
import ParkListScreen from './ParkListScreen';
import MapViewScreen from './MapViewScreen';

const RootTabs = TabNavigator({
    ParkList: {
      screen: ParkListScreen,
    },
    MapView: {
      screen: MapViewScreen,
    },
  });
  
export default RootTabs;