import { createAppContainer, createStackNavigator } from 'react-navigation'
import TodoScreen from '../screens/TodoScreen';
import SubmitScreen from '../screens/SubmitScreen';

const AppNavigation = createStackNavigator({
    Home: TodoScreen,
    Submit: SubmitScreen
}, {
        initialRouteName: 'Home',
        headerMode: 'none'
    })

export default createAppContainer(AppNavigation)