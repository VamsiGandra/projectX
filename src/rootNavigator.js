import { StackNavigator } from 'react-navigation';

import SignIn from './signIn';
import DrawerNavigation from './DrawerNavigation';

const RootNavigator = StackNavigator({
    SignIn: {
        screen: SignIn,
    },
    DrawerNavigation: {
        screen: DrawerNavigation,
    }
},
{
    headerMode: 'none',
    }

);

export default RootNavigator;
