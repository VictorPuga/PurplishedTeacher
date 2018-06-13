import { createStackNavigator } from 'react-navigation';
import * as Views from 'src/views/_index';

const { HomeScreen, OnboardingScreen } = Views

const RootNavigation = createStackNavigator(
{
    Onboarding: { screen: OnboardingScreen },
    Home: { screen: HomeScreen }
},
{
    initialRouteName: 'Home',
}
)

export default RootNavigation