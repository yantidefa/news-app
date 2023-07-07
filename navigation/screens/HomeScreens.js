import * as React from 'react';
import { 
    NativeBaseProvider, 
    Text, 
    Box,
    StatusBar,
    HStack,
    IconButton,
    AspectRatio,
    Stack,
    Heading,
    Center,
    Image,
    Pressable,
    Badge,
    Spacer,
    Flex,
    ScrollView,
    Avatar,
    VStack } from 'native-base';
	import { NavigationContainer } from '@react-navigation/native';
	var image1 = require('../img/d-article.png');
	var image2 = require('../img/article-1.png');
	var image3 = require('../img/article-2.png');
	var image4 = require('../img/article-3.png');

export default function HomeScreen({ navigation }) {
	return (
	<Center h="735px" onPress={()=>navigation.navigate('LoginScreen')}>
		<Box _dark={{bg: 'coolGray.800'}} _light={{bg: 'white' }} flex="1" safeAreaTop maxW="400px" w="100%">
			<Box bg="white">
			<HStack space={3} pt="12" pl="4" pb="12" size="md">
			<Avatar size="48px" source={{
					uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
			}} />
					<VStack>
					<Text fontSize="xs" color="coolGray.800" _dark={{color: 'warmGray.50'}} alignSelf="flex-start">
					Hallo
					</Text>
					<Heading>
						Afreen Khan
					</Heading>
					</VStack>
			</HStack>
			</Box>
			<ScrollView showsVerticalScrollIndicator={false}>
					<Box alignItems="center" bg="white">
						<Image source={image1} alt="Alternate Text"  width={370} height={147} />
					</Box>
					<Stack pt="4" pl="4" pr="4" pb="12" space={3}>
					<Stack space={2}>
						<Heading size="md">
						Breakthrough Study Reveals Potential Cure for Alzheimer's Disease
						</Heading>
					</Stack>
					</Stack>
					<Box pl="4" pr="5" py="2">
						<HStack alignItems="center" space={3} bg="white">
							<Image source={image2} alt="Alternate Text"  width={90} height={60} />
									<VStack>
									<Text fontSize="xs" color="coolGray.800" _dark={{color: 'warmGray.50'}} alignSelf="flex-start">
									12:47 PM
									</Text>
									<Text color="coolGray.800" _dark={{color: 'warmGray.50'}} bold isTruncated maxW="350" w="80%">
										World Leaders Gather for Global Climate Summit, Pledge Bold Actions
									</Text>
									</VStack>
							<Spacer />
						</HStack>
					</Box>
					<Box pl="4" pr="5" py="2">
						<HStack alignItems="center" space={3} bg="white">
							<Image source={image3} alt="Alternate Text"  width={90} height={60} />
									<VStack>
									<Text fontSize="xs" color="coolGray.800" _dark={{color: 'warmGray.50'}} alignSelf="flex-start">
									12:47 PM
									</Text>
									<Text color="coolGray.800" _dark={{color: 'warmGray.50'}} bold isTruncated maxW="350" w="80%">
									Tech Giant Launches Revolutionary Virtual Reality Gaming Console
									</Text>
									</VStack>
							<Spacer />
						</HStack>
					</Box>
					<Box pl="4" pr="5" py="2">
						<HStack alignItems="center" space={3} bg="white">
							<Image source={image4} alt="Alternate Text"  width={90} height={60} />
									<VStack>
									<Text fontSize="xs" color="coolGray.800" _dark={{color: 'warmGray.50'}} alignSelf="flex-start">
									12:47 PM
									</Text>
									<Text color="coolGray.800" _dark={{color: 'warmGray.50'}} bold isTruncated maxW="350" w="80%">
									Space Exploration Milestone: Astronauts Set New Record for Longest Space Mission
									</Text>
									</VStack>
							<Spacer />
						</HStack>
					</Box>
			</ScrollView>
		</Box>
	</Center>
	);
}