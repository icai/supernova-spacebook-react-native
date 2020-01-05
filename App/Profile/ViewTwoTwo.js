//
//  ViewTwoTwo
//  Spacebook
//
//  Created by Supernova.
//  Copyright © 2018 Supernova. All rights reserved.
//

import React from "react"
import { Image, TouchableWithoutFeedback, View, StyleSheet } from "react-native"


export default class ViewTwoTwo extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {
	
	}

	onViewTwoTwoPress = () => {
	
	}

	render() {
	
		return <TouchableWithoutFeedback
				onPress={this.onViewTwoTwoPress}>
				<View
					navigation={this.props.navigation}
					style={styles.view}>
					<Image
						source={require("./../../assets/images/photo-2.png")}
						style={styles.photo2Image}/>
				</View>
			</TouchableWithoutFeedback>
	}
}

const styles = StyleSheet.create({
	view: {
		backgroundColor: "transparent",
		width: 122,
		height: 122,
		justifyContent: "center",
		alignItems: "center",
	},
	photo2Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 122,
		height: 122,
	},
})
