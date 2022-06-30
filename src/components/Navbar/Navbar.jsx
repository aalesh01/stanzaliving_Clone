import React from "react";
import "./navbar.css"
import { v4 as uuid } from "uuid"
import logo from "./Stanzalogo.png"
import { Link } from "react-router-dom";

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
    RadioGroup,Stack,
    Radio,Select

  } from '@chakra-ui/react'
import { ChakraProvider } from "@chakra-ui/provider";
export const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  

    return (

        <div className="navbar_container">
                <div key={uuid}>
                <img src={logo} alt="alt" />
                </div>
                <div className="navbar_details">
                <Link to="/">About Us</Link>
                <Link to="/">Our PACT</Link>
                <Link to="/">partner With Us</Link>
                <Link to="/">Explore Residences</Link>
                </div>
                <div>
                    <Button ref={btnRef} colorScheme='teal' onClick={onOpen}className="navbar_callback">REQUEST CALLBACK</Button>
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
    <InputLeftAddon children={"+91"}  />
    <Input type='tel' placeholder='phone number' />
  </InputGroup>

            </div>
            <div className="navbar_profession">
                <label htmlFor="">I am a</label>
            <RadioGroup defaultValue='2' className=".navbar_profession_RadioGroup">

        <Stack spacing={5} direction='row' className="navbar_profession_RadioGroup">
         <Radio colorScheme='rgb(94, 187, 160)' value='1' size='lg'>
      Working Professional
    </Radio>
         <Radio colorScheme='rgb(94, 187, 160)' value='2' size='lg'>
     Student
      </Radio>
  </Stack>
</RadioGroup>

            </div>
            <div className="navbar_email">
            <Input placeholder='Email' size='lg' />
            </div>
            <div className="navbar_city">
            <Select placeholder='Select a city' size="lg">

  <option value='Ahmedabad'>Ahmedabad</option>
  <option value='Belgum'>Belgum</option>
  <option value='Bengaluru'>Bengaluru</option>
  <option value='Bhopal'>Bhopal</option>
  <option value='Chennai'>Chennai</option>
  <option value='Coimbatore'>Coimbatore</option>
  <option value='Dehradun'>Dehradun</option>
  <option value='Delhi'>Delhi</option>
  <option value='Gandinagar'>Gandinagar</option>
  <option value='Guntur'>Guntur</option>
  <option value='Gurgaon'>Gurgaon</option>
  <option value='Hyderabad'>Hyderabad</option>
  <option value='Indor'>Indor</option>
  <option value='Jaipur'>Jaipur</option>
  <option value='Kochi'>Kochi</option>
  <option value='Kota'>Kota</option>
  <option value='Mangalore'>Mangalore</option>
  <option value='Manipal'>Manipal</option>
  <option value='Mumbai'>Mumbai</option>
  <option value='Nagpur'>Nagpur</option>
  <option value='Pune'>Pune</option>
  <option value='Vadodara'>Vadodara</option>
  <option value='Vidyanagar'>Vidyanagar</option>
  <option value='Vijayawada'>Vijayawada</option>
  <option value='Visakhapatnam'>Visakhapatnam</option>
</Select>
<Select placeholder='Select a locality' size="lg">
  <option value='Bannerghatta'>Bannerghatta</option>
  <option value='Bellandur'>Bellandur</option>
  <option value='BTM Layout'>BTM Layout</option>
  <option value='Domlur'>Domlur</option>
  <option value='Electronic City Phase1'>Electronic City Phase1</option>
  <option value='Electronic City Phase 2'>Electronic City Phase 2</option>
  <option value='Hosur Road'>Hosur Road</option>
  <option value='HSR Layout'>HSR Layout</option>
  <option value='JP Nagart'>JP Nagar</option>
  <option value='Kengerit'>Kengeri</option>
  <option value='Koramangala'>Koramangala</option>
  <option value='Kumaraswamy Layout'>Kumaraswamy Layout</option>
  <option value='Kundalahalli Gate'>Kundalahalli Gate</option>
  <option value='Laibagh Road'>Laibagh Road</option>
  <option value='Mahadevapura'>Mahadevapura</option>
  <option value='Rajankunte'>Rajankunte</option>
  <option value='Rajarajeshwari Nagar'>Rajarajeshwari Nagar</option>
  <option value='BTM Layout'>Reva University</option>
  <option value='RVCE'>RVCE</option>
  <option value='Sarjapur Road'>Sarjapur Road</option>
  <option value='Whitefield'>Whitefield</option>
  <option value='Other'>Other</option>

</Select>
            
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

export default Navbar;