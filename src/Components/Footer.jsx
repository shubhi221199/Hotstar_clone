import React from 'react'
import {
    Box, Flex, Image, Button, Text, Stack, ButtonGroup
  } from '@chakra-ui/react'

import { TbCheck } from "react-icons/tb";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import './Footer.css'

const Footer = () => {
 return <Box color={'white'} mt={"2%"} py={'3%'} >
          {/* Top Footer  */}
          <Flex  gap={'20'} justifyContent={'space-evenly'} mb={'10'}>
            <Stack>
              <Text mb={'5'}>Company</Text>
              <Text color={'rgb(112,122,148)'}>About Us</Text>
              <Text color={'rgb(112,122,148)'}>Careers</Text>
            </Stack>
  
            <Stack>
              <Text mb={'3'}>View Website in</Text>
              <Button  className='btnf' leftIcon={<TbCheck />} variant={'ghost'} colorScheme='black' color={'rgb(112,122,148)'}>English</Button>
            </Stack>
  
            <Stack>
              <Text mb={'4'}>Need Help?</Text>
              <Text color={'rgb(112,122,148)'}>Visit Help Center</Text>
              <Text color={'rgb(112,122,148)'}>Share Feedback</Text>
            </Stack>
  
  
            <Stack>
              <Text mb={'2'}>Connect with Us</Text>
              <ButtonGroup>
                <Button className='btnf' colorScheme='black'><ImFacebook></ImFacebook></Button>
                <Button className='btnf' colorScheme='black'><BsTwitter></BsTwitter></Button>
              </ButtonGroup>
            </Stack>
          </Flex>
  
          {/* bottom footer  */}
          <Flex justifyContent={'space-between'} mx={'20'} px={'16'}>
            <Box color={'rgb(112,122,148)'} ml={'-2px'}>
              <Text mb={'2'}>2023 STAR. All Rights Reserved</Text>
              <Text>Terms of Use  Privacy Policy  FAQ</Text>
            </Box>
            <Box display={'flex'} gap={'10'} mr={'-20px'}>
              <Image src='https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/v1661346101/google-playstore'
                width={'140px'} height={'40px'} />
              <Image src='https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/v1661346071/ios-appstore'
                width={'140px'} height={'40px'} />
            </Box>
          </Flex>
  
        </Box>

  
}

export default Footer
