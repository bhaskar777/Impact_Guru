import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, ImageBackground, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import HomeHeader from '../Components/HomeHeader';
const Detail = (props) => {
	console.log(props);
	return (
		<LinearGradient colors={[ '#1CA7EC', '#1F2f98' ]} style={{ flex: 1 }}>
			<SafeAreaView style={{ flex: 1 }}>
				<HomeHeader navigation={props.navigation} />
				<View>
					{/* Getting Data from params */}
					<ImageBackground
						style={styles.image}
						imageStyle={{ borderRadius: 16 }}
						source={{ uri: props.route.params.item.image.original }}
						resizeMode={'cover'}
					>
						<Text style={styles.posterText}>Movie Poster</Text>
					</ImageBackground>
					<ScrollView style={{ height: '100%' }}>
						<Text style={styles.textStyle}>Date: {props.route.params.item.airdate}</Text>
						<Text style={styles.textStyle}>Description: {props.route.params.item.summary}</Text>
						<Text style={[ styles.textStyle, { textTransform: 'capitalize' } ]}>
							Movie Type: {props.route.params.item.type}
						</Text>
						<Text style={[ styles.textStyle ]}>Run time: {props.route.params.item.runtime} in mins</Text>
						<Text style={[ styles.textStyle ]}>Scedule time: {props.route.params.item.airtime} </Text>
					</ScrollView>
				</View>
			</SafeAreaView>
		</LinearGradient>
	);
};

const styles = StyleSheet.create({
	image: {
		width: Dimensions.get('window').width - 32,
		height: 300,
		marginTop: 24,
		alignSelf: 'center'
	},
	textStyle: {
		marginStart: 12,
		marginTop: 8,
		fontSize: 14
	},
	posterText: {
		color: '#fff',
		fontSize: 14,
		backgroundColor: '#000c',
		alignSelf: 'flex-start',
		position: 'absolute',
		bottom: 24,
		left: 24,
		padding: 8,
		borderRadius: 10,
		overflow: 'hidden'
	}
});

export default Detail;
