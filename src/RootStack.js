import { StackNavigator } from 'react-navigation';
import WelcomeStack from './WelcomeStack';
import HomeStack from './HomeStack';

const RootStack = StackNavigator({
    Welcome: {
        screen: WelcomeStack,
    },
    HomeStack: {
        screen: HomeStack
    },
}

);

export default RootStack;