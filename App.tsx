import React from "react";

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
  VStack
} from "native-base";

import Icon from 'react-native-vector-icons/Ionicons';

// header
// function AppBar() {
//   return <Center>
//       <Box _dark={{bg: 'coolGray.800'}} _light={{bg: 'white' }} flex="1" safeAreaTop maxW="400px" w="100%">
//         <Box bg="white">
//           <HStack space={3} pt="12" pl="4" pb="12" size="md">
//             <Avatar size="48px" source={{uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} />
//             <VStack>
//               <Text fontSize="xs" color="coolGray.800" _dark={{color: 'warmGray.50'}} alignSelf="flex-start">
//                 Hallo
//               </Text>
//               <Heading>
//                 Afreen Khan
//               </Heading>
//             </VStack>
//           </HStack>
//        </Box>
//       </Box>
//     </Center>;
// }
// header

// banner
function Banner() {
  return 
}
// banner

// content
function Content() {
  return <Center h="735px">
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
        <Image source={{uri: "https://wallpaperaccess.com/full/317501.jpg"}} alt="Alternate Text"  width={370} height={147} />
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
          <Image source={{uri: "https://wallpaperaccess.com/full/317501.jpg"}} alt="Alternate Text"  width={90} height={60} />
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
          <Image source={{uri: "https://wallpaperaccess.com/full/317501.jpg"}} alt="Alternate Text"  width={90} height={60} />
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
          <Image source={{uri: "https://wallpaperaccess.com/full/317501.jpg"}} alt="Alternate Text"  width={90} height={60} />
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
        </ScrollView>
      </Box>
    </Center>;
}
// content

// footer
function Footer() {
  const [selected, setSelected] = React.useState(1);
  return <NativeBaseProvider>
      <Box flex={1} bg="white" width="100%" alignSelf="center">
        <HStack bg="#C40B0B" alignItems="center">
          <Pressable opacity={selected === 0 ? 1 : 0.5} py="3" flex={1} onPress={() => setSelected(0)}>
            <Center>
              <IconButton icon={<Icon name="home-outline" size={25} color="white" />} variant={"ghost"} colorScheme="indigo" />
            </Center>
          </Pressable>
          <Pressable opacity={selected === 1 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(1)}>
            <Center>
              <IconButton icon={<Icon name="search" size={25} color="white" />} variant={"ghost"} colorScheme="indigo" />
            </Center>
          </Pressable>
          <Pressable opacity={selected === 3 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(3)}>
            <Center>
              <IconButton icon={<Icon name="person-outline" size={25} color="white" />} variant={"ghost"} colorScheme="indigo" />
            </Center>
          </Pressable>
        </HStack>
      </Box>
    </NativeBaseProvider>;
}
// footer

export default () => {
  return (
    <NativeBaseProvider>
          <Content />
          <Footer />
    </NativeBaseProvider>
  );
};
