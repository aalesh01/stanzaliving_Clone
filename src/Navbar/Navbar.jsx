import React from "react";
import "./navbar.css"
import { v4 as uuid } from "uuid"
import logo from "./Stanzalogo.png"
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input ,
    useDisclosure ,
    InputGroup,
    InputLeftAddon,
    PhoneIcon

  } from '@chakra-ui/react'
  import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
export const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  



    return (

        <div className="navbar_container">
                <div key={uuid}>
                <img src={logo} alt="alt" srcset="" />
                </div>
                <div className="navbar_details">
                <a href="">About Us</a>
                <a href="">Our PACT</a>
                <a href="">partner With Us</a>
                <a href="">Explore Residences</a>
                </div>
                <div>
                    <button ref={btnRef} colorScheme='teal' onClick={onOpen}className="navbar_callback">REQUEST CALLBACK</button>
<div >
                    <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size="md"
      >
        <DrawerOverlay />
        <DrawerContent >
          <DrawerCloseButton />
          <DrawerHeader>REQUEST CALLBACK</DrawerHeader>
     
          
          <div className="navbar_callrequst_rightslide"></div>

          <DrawerBody>
            <div className="navbar_username">
                <Input type="text" placeholder="First Name" width='45%'  />
                <Input type="text" placeholder="Last Name" width='45%' size="md"/>
            </div>
            <div className="navbar_mobilenumber">
            <InputGroup>
    <InputLeftAddon children={"+91",<PhoneIcon color='gray.300' />}  />
    <Input type='tel' placeholder='phone number' />
  </InputGroup>

            </div>

          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      </div>
                </div>
        </div>
    )
}