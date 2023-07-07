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
    FormControl,
    Button,
    Input,
    Link,
    WarningOutlineIcon
  } from "native-base";
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreens';
// import LinkButton from './screens/HomeScreens';
var image = require('../android/app/src/main/res/mipmap-mdpi/pedia.png');

const Stacks = createStackNavigator();
export default function LoginScreen() {
  
    return (
        <Box alignItems="center" background={"white"}>
          <HStack space={3} pt="24" pl="4" pb="24" size="md">
           <Image source={image} alt="Alternate Text" />
			   </HStack>
        <Box w="100%" maxWidth="300px">
          <FormControl isRequired>
            <Stack mb="5">
              <FormControl>Email</FormControl>
              <Input type="email" placeholder="email" />
            </Stack>
            <Stack>
              <FormControl>Password</FormControl>
              <Input type="password" defaultValue="12345" placeholder="password" />
            </Stack>
            <Stack mt="12">
                <Button size="sm" background={"#C40B0B"} fontSize={14}>
                 <Text bold color={"white"}>LOGIN</Text>
                </Button>
            </Stack>
            {/* <LinkButton to='HomeScreen'>Go to Jane's profile</LinkButton> */}
            <Stack mt="12" alignItems="center">
              <Link href='HomeScreen' isExternal _text={{color: "#C40B0B"}}>
                Register here
              </Link>
            </Stack>
          </FormControl>
        </Box>
      </Box>
    );
}