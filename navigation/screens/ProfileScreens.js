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
    Button,
    Avatar,
    VStack, 
    View} from 'native-base';
    var image = require('../img/b-profile.png');
export default function ProfileScreen({navigation}) {
    return (
        <Box background={'white'} h="100%">
            {/* <Box _dark={{bg: 'coolGray.800'}} _light={{bg: 'white' }} flex="1" safeAreaTop maxW="400px" w="100%"></Box> */}
            <Box alignItems="center" bg="white">
                <Image source={image} alt="Alternate Text"  width={420} height={200}  />
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    width="100%"
                    height="100%"
                    backgroundColor="black" 
                    opacity={0.7} 
                />
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                   
                >
                    <HStack space={3} pt="24" pl="8" pb="12" size="md">
                    <Avatar size="48px" source={{
                            uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                    }} />
					<VStack>
					<Text fontSize="xs" color="white" _dark={{color: 'warmGray.50'}} alignSelf="flex-start">
					Hallo
					</Text>
					<Heading color="white">
						Afreen Khan
					</Heading>
					</VStack>
			</HStack>
                </Box>
            </Box>

            <Box>
                <VStack pl='8' pt='12'>
					<Text fontSize="xs" color="#979797" _dark={{color: 'warmGray.50'}} alignSelf="flex-start">Email</Text>
					<Text color="#000000" fontSize="md">johan.william@gmail.com</Text>
				</VStack>
                <VStack pl='8' pt='8' pb='24'>
					<Text fontSize="xs" color="#979797" _dark={{color: 'warmGray.50'}} alignSelf="flex-start">Username</Text>
					<Text color="#000000" fontSize="md">Johan</Text>
				</VStack>

                <Stack pl='8' pr='8' pt='24'>
                    <Button size="sm" background={"#C40B0B"} variant="outline" fontSize={14}>
                    <Text bold color={"white"}>LOGOUT</Text>
                </Button>
            </Stack>
            </Box>
         </Box>
    );
}