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
  Flex
} from "native-base";

import Icon from 'react-native-vector-icons/Ionicons';

function AppBar() {
  return <>
      <StatusBar backgroundColor="#3700B3" barStyle="light-content" />
      <Box safeAreaTop bg="violet.600" />
      <HStack bg="violet.600" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%">
        <HStack alignItems="center">
          <IconButton icon={<Icon name="ios-reorder-three" size={30} color="#FFF" />} />
          <Text color="white" fontSize="20" fontWeight="bold">
            Home
          </Text>
        </HStack>
      </HStack>
    </>;
}

export default () => {
  return (
    <NativeBaseProvider>
          <AppBar />
    </NativeBaseProvider>
  );
};
