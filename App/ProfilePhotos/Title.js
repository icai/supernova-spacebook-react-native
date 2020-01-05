//
//  Title
//  Spacebook
//
//  Created by Supernova.
//  Copyright © 2018 Supernova. All rights reserved.
//

import { Text, TouchableWithoutFeedback, StyleSheet, View } from "react-native"
import React from "react"


export default class Title extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {
	
	}

	onTitlePress = () => {
	
	}

	render() {
	
		return <TouchableWithoutFeedback
				onPress={this.onTitlePress}>
				<View
					navigation={this.props.navigation}
					style={styles.title}>
					<Text
						style={styles.todayText}>TODAY</Text>
				</View>
			</TouchableWithoutFeedback>
	}
}

const styles = StyleSheet.create({
	title: {
		backgroundColor: "transparent",
		width: 375,
		height: 37,
		justifyContent: "center",
		alignItems: "flex-start",
	},
	todayText: {
		backgroundColor: "transparent",
		opacity: 0.4,
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 20,
	},
})
