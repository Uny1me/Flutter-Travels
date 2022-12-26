import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SignIn from "pages/SignIn";
import SignUp from "pages/SignUp";
import Home from "pages/Home";


const screens = {
    Welcome: { screen: SignIn },
    Home: { screen: Home },
    SignUp: { screen: SignUp },
}

const Landing = createStackNavigator(screens)

export default createAppContainer(Landing)