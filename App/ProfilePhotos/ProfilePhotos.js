//
//  ProfilePhotos
//  Spacebook
//
//  Created by Supernova.
//  Copyright © 2018 Supernova. All rights reserved.
//

import React from "react"
import { TouchableOpacity, StyleSheet, Image, View } from "react-native"
import ViewFour from "./ViewFour"
import ViewSeven from "./ViewSeven"
import ViewEight from "./ViewEight"
import { FlatGrid } from "react-native-super-grid"
import Title from "./Title"
import ViewSix from "./ViewSix"
import TitleTwo from "./TitleTwo"
import ViewFive from "./ViewFive"
import { LinearGradient } from "expo-linear-gradient"


export default class ProfilePhotos extends React.Component {

	static navigationOptions = ({ navigation }) => {
	
		const { params = {} } = navigation.state
		return {
				headerTransparent: true,
				headerBackground: <LinearGradient
					start={{
						x: -0.01,
						y: 0.51,
					}}
					end={{
						x: 1.01,
						y: 0.49,
					}}
					locations={[0, 1]}
					colors={["rgb(247, 132, 98)", "rgb(139, 27, 140)"]}
					style={styles.navigationBarGradient}/>,
				title: "Dr. When photos",
				headerTintColor: "white",
				headerLeft: <View
					style={styles.headerLeftContainer}>
					<TouchableOpacity
						onPress={params.onGroupPressed ? params.onGroupPressed : () => null}
						style={styles.navigationBarItem}>
						<Image
							source={require("./../../assets/images/group-2.png")}
							style={styles.navigationBarItemIcon}/>
					</TouchableOpacity>
				</View>,
				headerRight: null,
				headerStyle: {
				},
			}
	}

	constructor(props) {
		super(props)
	}

	componentDidMount() {
	
		this.props.navigation.setParams({
			onGroupPressed: this.onGroupPressed,
		})
	}

	onGroupPressed = () => {
	
		this.props.navigation.goBack()
	}

	renderGalleryFlatListCell = ({ item }) => {
	
		return <Title/>
	}

	render() {
	
		return <View
				style={styles.profilePhotosView}>
				<View
					style={styles.galleryFlatListViewWrapper}>
					<FlatGrid
						renderItem={this.renderGalleryFlatListCell}
						items={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
						itemDimension={375}
						spacing={10}
						style={styles.galleryFlatList}/>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	navigationBarItemIcon: {
		tintColor: "white",
	},
	navigationBarGradient: {
		flex: 1,
	},
	headerLeftContainer: {
		flexDirection: "row",
		marginLeft: 8,
	},
	navigationBarItem: {
	},
	profilePhotosView: {
		backgroundColor: "rgb(244, 242, 244)",
		flex: 1,
	},
	galleryFlatList: {
		backgroundColor: "transparent",
		width: "100%",
		height: "100%",
	},
	galleryFlatListViewWrapper: {
		flex: 1,
		marginTop: 73,
	},
})
