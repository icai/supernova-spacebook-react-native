//
//  LifetimeEvent
//  Spacebook
//
//  Created by Supernova.
//  Copyright © 2018 Supernova. All rights reserved.
//

import { TouchableWithoutFeedback, StyleSheet, View, Text, Image } from "react-native"
import React from "react"


export default class LifetimeEvent extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {
	
	}

	onLifetimeEventPress = () => {
	
	}

	render() {
	
		return <TouchableWithoutFeedback
				onPress={this.onLifetimeEventPress}>
				<View
					navigation={this.props.navigation}
					style={styles.lifetimeEvent}>
					<View
						style={styles.bgView}/>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							alignSelf: "center",
							width: 233,
							top: 18,
							height: 151,
							alignItems: "center",
						}}>
						<Image
							source={require("./../../assets/images/avatarastronaut.png")}
							style={styles.avatarAstronautImage}/>
						<Text
							style={styles.plutoPostedANewLText}>Pluto posted a new life event</Text>
						<Text
							style={styles.inAComplicatedRelText}>In a complicated relationship</Text>
					</View>
				</View>
			</TouchableWithoutFeedback>
	}
}

const styles = StyleSheet.create({
	lifetimeEvent: {
		backgroundColor: "transparent",
		width: "100%",
		height: 196,
	},
	bgView: {
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		right: 0,
		top: 29,
		bottom: 1,
	},
	avatarAstronautImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 94,
		height: 94,
	},
	plutoPostedANewLText: {
		color: "black",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		opacity: 0.4,
		marginTop: 12,
	},
	inAComplicatedRelText: {
		color: "rgb(47, 47, 47)",
		fontFamily: "Lato-Black",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		backgroundColor: "transparent",
		marginTop: 2,
	},
})
