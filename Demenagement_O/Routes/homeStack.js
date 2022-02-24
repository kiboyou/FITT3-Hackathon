import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../Chauffeurs';

const screens = {
    Home: {
        screen: Home,
    }
}

const HomeStack = createStackNavigator(screens);