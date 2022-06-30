import React from "react";
import "./navbar.css"
import { v4 as uuid } from "uuid"
import logo from "./Stanzalogo.png"
import roboto from "./roboto.png"
// import SelectSearch from 'react-select-search';
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
    PhoneIcon,
    RadioGroup,Stack,
    Radio,Select,
    // ArrowForwardIcon

  } from '@chakra-ui/react'
import {Link }from "react-router-dom"

export const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
   
    const btnRef = React.useRef()
    
  

    

    return (

        <div className="navbar_container">
                <div key={uuid}>
                <img src={logo} alt="alt" srcset="" />
                </div>
                <div className="navbar_details">
                <a href="/">About Us</a>
                <a href="/">Our PACT</a>
                <a href="/">partner With Us</a>
                <a href="/">Explore Residences</a>
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
            <Select placeholder='Select a city' size="lg" focusBorderColor="gray">

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
<Select placeholder='Select a locality' size="lg" focusBorderColor="gray"  _>
  <option value='Bannerghatta' >Bannerghatta</option>
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
            <div className="navbar_duratation">
            <Select placeholder='Duratation'  size="lg" borderColor='gray' focusBorderColor="gray">
          
  <option value='Less then 3 months'>Less then 3 months</option>
  <option value='3-6 months'>3-6 months</option>
  <option value='More then 6 months'>More then 6 months</option>
</Select>
            </div>
            <div className="navbar_robot"  >
            <div className="robot_check">
                <div className="robot_id" onclick="rightSymbol()">
                <input type="checkbox" name="" className="roboto_checked" /></div>
                <label for="snd">I`m not a robot</label>
            </div>
            <div className="roboto_image">
                <img src={roboto} alt=""/>
            </div>
        </div>

          </DrawerBody>

          <DrawerFooter>
            {/* <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>  */}
            {/* <Button  colorScheme='teal' mr={0}   onClick={handlechange} >Connnect</Button> */}
            <Link className="connect" to="#">Connect -></Link>
        
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      </div>
                </div>
        </div>
    )
}
