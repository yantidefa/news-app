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
    Input,
    ScrollView,
    FormControl,
    Avatar,
    VStack, 
    View} from 'native-base';
    var image = require('../img/d-article.png');
    import { NavigationContainer } from '@react-navigation/native';

    export default function DetailScreen({navigation}) {
    return (
        <View>
            <Center h="735px">
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
                <Stack pt="4" pl="4" pr="4" pb="4" space={3}>
                <Stack space={2}>
                    <Text>2 Desember 2023</Text>
                    <Heading size="md">
                    Breakthrough Study Reveals Potential Cure for Alzheimer's Disease
                    </Heading>
                </Stack>
                </Stack>
                <Box alignItems="center" bg="white">
                    <Image source={image} alt="Alternate Text"  width={370} height={147} />
                </Box>
                <Stack pt="8" pl="4" pr="4" pb="4" space={3}>
                <Stack space={2}>
                    <Text>A breakthrough study has recently brought forth groundbreaking revelations regarding a potential cure for Alzheimer's disease, instilling a renewed sense of optimism within the medical and scientific communities. Carried out by a dedicated team of researchers, this study employed cutting-edge methodologies and innovative approaches to delve into the intricacies of Alzheimer's. The findings of the research are nothing short of remarkable, as they have unveiled a novel therapeutic intervention that exhibits tremendous promise in combating cognitive decline and stalling the progression of the disease in a significant portion of the patient population.</Text>
                    <Text>The implications of this potential cure for Alzheimer's disease are far-reaching and significant. Alzheimer's, a neurodegenerative disorder that affects millions of individuals worldwide, has long been a challenging condition to address effectively. However, the newfound insights and promising results from this breakthrough study offer a glimmer of hope for patients and their families who have been grappling with the devastating impact of the disease. The development of an effective cure could transform the lives of those affected by Alzheimer's, potentially halting the relentless cognitive decline and enabling patients to regain a higher quality of life.</Text>
                </Stack>
                </Stack>
			</ScrollView>
		</Box>
	</Center>
        </View>
    );
}