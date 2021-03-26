import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList, TextInput, StatusBar as MystatusBar } from 'react-native';
import DetailedInformation from '../Components/DetailedInformation';

const Home = (props) => {
	const [ detail, setDetails ] = useState([]);
	const [ search, setSearch ] = useState('');
	const [ data, setData ] = useState([]);

	useEffect(() => {
		apiData();
	}, []);

	const apiData = async () => {
		try {
			let response = await fetch('http://api.tvmaze.com/shows/1/episodes');
			let data = await response.json();
			console.log(data);
			setDetails(data);
		} catch (err) {
			console.log(err);
		}
	};

	const searchApi = async (text) => {
		setSearch(text);
		try {
			let response = await fetch('http://api.tvmaze.com/singlesearch/shows?q=' + text);
			let data = await response.json();
			console.log(data);
			setData(data);
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<LinearGradient colors={[ '#004e92', '#000428' ]} style={{ flex: 1 }}>
			<SafeAreaView style={{ flex: 1 }}>
				<View style={styles.searchView}>
					<TextInput
						onChangeText={(text) => {
							searchApi(text);
						}}
						placeholder="Search for movies..."
					/>
				</View>
				{search.length == 0 && (
					<FlatList
						showsVerticalScrollIndicator={false}
						data={detail}
						numColumns={2}
						style={{ alignSelf: 'center' }}
						renderItem={({ item, index }) => {
							return <DetailedInformation item={item} navigation={props.navigation} />;
						}}
					/>
				)}
				{search.length != 0 && (
					<FlatList
						showsVerticalScrollIndicator={false}
						data={data}
						numColumns={2}
						style={{ alignSelf: 'center' }}
						renderItem={({ item, index }) => {
							return <DetailedInformation item={item} navigation={props.navigation} />;
						}}
					/>
				)}
			</SafeAreaView>
		</LinearGradient>
	);
};
const styles = StyleSheet.create({
	searchView: {
		backgroundColor: '#fff',
		marginStart: 16,
		marginEnd: 16,
		padding: 12,
		borderRadius: 100,
		marginBottom: 24,
        marginTop:Platform.OS == "ios"?0:MystatusBar.currentHeight
	}
});
export default Home;
