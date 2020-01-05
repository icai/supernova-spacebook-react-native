//
//  OnlinePerson
//  Spacebook
//
//  Created by Supernova.
//  Copyright © 2018 Supernova. All rights reserved.
//

import { Text, StyleSheet, Image, View, TouchableWithoutFeedback } from "react-native"
import React from "react"


export default class OnlinePerson extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {
	
	}

	onOnlinePersonPress = () => {
	
	}

	render() {
	
		return <TouchableWithoutFeedback
				onPress={this.onOnlinePersonPress}>
				<View
					navigation={this.props.navigation}
					style={styles.onlinePerson}>
					<Text
						style={styles.mrsDoyaText}>Mrs. Doya</Text>
					<Image
						source={require("./../../assets/images/avatar-temp-2.png")}
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
	mrsDoyaText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "Lato-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		position: "absolute",
		left: 3,
		right: 2,
		bottom: 0,
	},
	avatarTempImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		left: -1,
		right: -1,
		top: -1,
		height: 62,
	},
})
