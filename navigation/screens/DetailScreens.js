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
  View,
} from 'native-base';
var image = require('../img/d-article.png');
import {NavigationContainer} from '@react-navigation/native';

export default function DetailScreen({navigation, route}) {
  const {title, description, image} = route?.params;
  return (
    <View>
      <Center h="735px">
        <Box
          _dark={{bg: 'coolGray.800'}}
          _light={{bg: 'white'}}
          flex="1"
          safeAreaTop
          maxW="400px"
          w="100%">
          <Box bg="white">
            <HStack space={3} pt="12" pl="4" pb="12" size="md">
              <Avatar
                size="48px"
                source={{
                  uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                }}
              />
              <VStack>
                <Text
                  fontSize="xs"
                  color="coolGray.800"
                  _dark={{color: 'warmGray.50'}}
                  alignSelf="flex-start">
                  Hallo
                </Text>
                <Heading>Afreen Khan</Heading>
              </VStack>
            </HStack>
          </Box>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Stack pt="4" pl="4" pr="4" pb="4" space={3}>
              <Stack space={2}>
                <Text>2 Desember 2023</Text>
                <Heading size="md">{title}</Heading>
              </Stack>
            </Stack>
            <Box alignItems="center" bg="white">
              <Image
                source={image}
                alt="Alternate Text"
                width={370}
                height={147}
              />
            </Box>
            <Stack pt="8" pl="4" pr="4" pb="4" space={3}>
              <Stack space={2}>
                <Text>{description}</Text>
              </Stack>
            </Stack>
          </ScrollView>
        </Box>
      </Center>
    </View>
  );
}
