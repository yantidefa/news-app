import * as React from 'react';
import {
  Text,
  Box,
  HStack,
  Stack,
  Image,
  FormControl,
  Button,
  Input,
} from 'native-base';
var image = require('../android/app/src/main/res/mipmap-mdpi/pedia.png');

export default function LoginScreen({navigation}) {
  return (
    <Box alignItems="center" background={'white'} h='100%'>
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
            <Input
              type="password"
              defaultValue="12345"
              placeholder="password"
            />
          </Stack>
          <Stack mt="12">
            <Button
              size="sm"
              background={'#C40B0B'}
              fontSize={14}
              onPress={() => navigation.navigate('Home')}>
              <Text bold color={'white'}>
                LOGIN
              </Text>
            </Button>
          </Stack>
          <Stack mt="12" alignItems="center">
            <Button
              size="sm"
              background={'white'}
              fontSize={14}
              onPress={() => navigation.navigate('Register')}>
              <Text color={'#C40B0B'}>
                Register here
              </Text>
            </Button>
          </Stack>
        </FormControl>
      </Box>
    </Box>
  );
}
