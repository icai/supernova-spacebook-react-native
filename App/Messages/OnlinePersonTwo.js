//
//  OnlinePersonTwo
//  Spacebook
//
//  Created by Supernova.
//  Copyright © 2018 Supernova. All rights reserved.
//

import React from "react"
import { TouchableWithoutFeedback, StyleSheet, Image, View, Text } from "react-native"


export default class OnlinePersonTwo extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {
	
	}

	onOnlinePersonTwoPress = () => {
	
	}

	render() {
	
		return <TouchableWithoutFeedback
				onPress={this.onOnlinePersonTwoPress}>
				<View
					navigation={this.props.navigation}
					style={styles.onlinePerson}>
					<Text
						style={styles.jackText}>Jack</Text>
					<Image
						source={require("./../../assets/images/avatar-temp-3.png")}
						style={styles.avatarTempImage}/>
				</View>
			</TouchableWithoutFeedback>
	}
}

const styles = StyleSheet.create({
	onlinePerson: {
		backgroundColor: "transparent",
		width: 60,
		height: 75,
	},
	jackText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Lato-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		position: "absolute",
		left: 18,
		right: 18,
		bottom: 0,
	},
	avatarTempImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: -1,
		right: -1,
		top: -1,
		height: 62,
	},
})
