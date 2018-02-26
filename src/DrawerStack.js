import { DrawerNavigator } from 'react-navigation';
import LogOut from './LogOut';

const DrawerStack = DrawerNavigator({
    LogOut : { screen: LogOut },
  }
)


export default DrawerStack;