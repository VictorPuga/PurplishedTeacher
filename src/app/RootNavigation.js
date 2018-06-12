import { createStackNavigator } from 'react-navigation';
import * as Views from 'src/views/_index';

const { HomeScreen, OnboardingScreen } = Views

const RootNavigation = createStackNavigator({
    Home: {
    screen: HomeScreen
    },
})

export default RootNavigation