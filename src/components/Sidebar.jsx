import { ArrowUpIcon, ArrowForwardIcon, CalendarIcon, EditIcon, HamburgerIcon, BellIcon, TimeIcon, SmallAddIcon } from "@chakra-ui/icons";
import { ListItem, List, ListIcon, Flex, Spacer } from "@chakra-ui/react";
import { NavLink } from "react-router-dom"
import { logout } from "../services/authService";

const Sidebar = () => {
    return (
        <Flex position='fixed' h= '80vh' flexDirection='column' alignItems='space-between'>
            <List color="white" fontSize="1.3em" spacing={10}>
                <ListItem>
                    <NavLink to="">
                        <ListIcon as={CalendarIcon} />
                        Dashboard
                    </NavLink>
        
                </ListItem>
                <ListItem>
                    <NavLink to="upload-dicom">
                        <ListIcon as={ArrowUpIcon} />
                        Upload DICOM image
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to="upload-png">
                        <ListIcon as={ArrowUpIcon} />
                            Upload PNG image
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to="register-patient">
                        <ListIcon as={EditIcon} />
                        Register Patient
                    </NavLink>
                </ListItem>
                
                <ListItem>
                    <NavLink to="previous-scans">
                        <ListIcon as={HamburgerIcon} />
                        Previous Scans
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to="patient-list">
                        <ListIcon as={HamburgerIcon} />
                        Patinet list
                    </NavLink>
                </ListItem>
            </List>
            <Spacer/>
            <List color="white" fontSize="1.2em" spacing={4}>
                <ListItem>
                    <NavLink 
                    onClick={()=> logout()}
                    >
                        <ListIcon as= {ArrowForwardIcon}/>
                        Log Out
                    </NavLink>
                </ListItem>
            </List> 
        </Flex>

        
     );
}
 
export default Sidebar;
