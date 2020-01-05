//
//  App.js
//  Spacebook
//
//  Created by Supernova.
//  Copyright © 2018 Supernova. All rights reserved.
//

import Login from "./App/Login/Login"
import Welcome from "./App/Welcome/Welcome"
import EventDetail from "./App/EventDetail/EventDetail"
import Profile from "./App/Profile/Profile"
import ProfileSettings from "./App/ProfileSettings/ProfileSettings"
import { createStackNavigator, createAppContainer } from "react-navigation"
import * as Font from "expo-font"
import Signup from "./App/Signup/Signup"
import { createBottomTabNavigator } from "react-navigation"
import Messages from "./App/Messages/Messages"
import ProfilePhotos from "./App/ProfilePhotos/ProfilePhotos"
import { DangerZone, AppLoading } from "expo"
import Timeline from "./App/Timeline/Timeline"
import React from "react"

const PushRouteOne = createStackNavigator({
	Welcome: {
		screen: Welcome,
	},
	Login: {
		screen: Login,
	},
	Signup: {
		screen: Signup,
	},
}, {
	initialRouteName: "Welcome",
})

const PushRouteTwo = createStackNavigator({
	Timeline: {
		screen: Timeline,
	},
}, {
	initialRouteName: "Timeline",
})

const PushRouteThree = createStackNavigator({
	Messages: {
		screen: Messages,
	},
}, {
	initialRouteName: "Messages",
})

const PushRouteFour = createStackNavigator({
	Profile: {
		screen: Profile,
	},
	ProfileSettings: {
		screen: ProfileSettings,
	},
	ProfilePhotos: {
		screen: ProfilePhotos,
	},
}, {
	initialRouteName: "Profile",
})

const Untitled = createBottomTabNavigator({
	PushRouteTwo: {
		screen: PushRouteTwo,
	},
	PushRouteThree: {
		screen: PushRouteThree,
	},
	PushRouteFour: {
		screen: PushRouteFour,
	},
}, {
	tabBarPosition: "bottom",
	animationEnabled: true,
	tabBarOptions: {
		showIcon: true,
		activeTintColor: "rgb(139, 27, 140)",
		inactiveTintColor: "rgb(139, 27, 140)",
		indicatorStyle: {
			backgroundColor: "transparent",
		},
		style: {
			backgroundColor: "rgb(248, 248, 248)",
		},
	},
	defaultNavigationOptions: ({ navigation }) => {
	
		const { routeName } = navigation.state
		
		switch (routeName) {
			case "PushRouteTwo":
				return Timeline.tabBarItemOptions(navigation)
			case "PushRouteThree":
				return Messages.tabBarItemOptions(navigation)
			case "PushRouteFour":
				return Profile.tabBarItemOptions(navigation)
		}
	},
})

const PushRouteFive = createStackNavigator({
	EventDetail: {
		screen: EventDetail,
	},
}, {
	initialRouteName: "EventDetail",
})

const RootNavigator = createStackNavigator({
	PushRouteOne: {
		screen: PushRouteOne,
	},
	Untitled: {
		screen: Untitled,
	},
	PushRouteFive: {
		screen: PushRouteFive,
	},
}, {
	mode: "modal",
	headerMode: "none",
	initialRouteName: "PushRouteOne",
})

const AppContainer = createAppContainer(RootNavigator)



export default class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			fontsReady: false,
		}
	}

	componentDidMount() {
	
		this.initProjectFonts()
	}

	async initProjectFonts() {
	
		await Font.loadAsync({
			"Lato-Regular": require("./assets/fonts/LatoRegular.ttf"),
			"Lato-Bold": require("./assets/fonts/LatoBold.ttf"),
			"Lato-Black": require("./assets/fonts/LatoBlack.ttf"),
			".AppleSystemUIFont": require("./assets/fonts/SFNS.ttf"),
		})
		this.setState({
			fontsReady: true,
		})
	}

	render() {
	
		if (!this.state.fontsReady) { return (<AppLoading />); }
		return <AppContainer/>
	}
}
