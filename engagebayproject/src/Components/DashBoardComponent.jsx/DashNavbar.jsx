import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Image,
  Menu,
  Text,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  useDisclosure,
  Avatar,
  IconButton,
  Stack,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import { IoEllipsisHorizontal } from "react-icons/io5";
import {
  MdOutlineShoppingCart,
  MdAttachMoney,
  MdPowerSettingsNew,
} from "react-icons/md";
import { AiFillSetting, AiOutlineGroup } from "react-icons/ai";

function DashNavbar() {
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 15 ? setnavColor("#FFFFFF") : setnavColor("transparent");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

 const user= JSON.parse(localStorage.getItem("user_login"))

 const {
   isOpen: isOpenMarketing,
   onOpen: onOpenMarketing,
   onClose: onCloseMarketing,
 } = useDisclosure();

  const {
    isOpen: isOpenContacts,
    onOpen: onOpenContacts,
    onClose: onCloseContacts,
  } = useDisclosure();
  const {
    isOpen: isOpenForms,
    onOpen: onOpenForms,
    onClose: onCloseForms,
  } = useDisclosure();
  const {
    isOpen: isOpenTemplates,
    onOpen: onOpenTemplates,
    onClose: onCloseTemplates,
  } = useDisclosure();
   const {
     isOpen: isOpenCampaigns,
     onOpen: onOpenCampaigns,
     onClose: onCloseCampaigns,
   } = useDisclosure(); 
   const {
     isOpen: isOpenEtc,
     onOpen: onOpenEtc,
     onClose: onCloseEtc,
   } = useDisclosure();

   const history = useNavigate();

  const userLogout = () => {
    localStorage.removeItem("user_login");
    history("/");
  };


  return (
    <Box
      px={"3"}
      h={"60px"}
      style={{
        backgroundColor: "grey",
      }}
      w={"full"}
    >
      <Flex
        w={"full"}
        direction={"row"}
        justify={"space-around"}
        alignItems={"center"}
        h={"full"}
      >
        <Flex w={"17%"} gap={2} h={"full"} alignItems={"center"}>
          <Link to="/dashboard">
            <Image
              w={"12"}
              h={"10"}
              mt={1}
              src="https://d2p078bqz5urf7.cloudfront.net/cloud/dev/assets/img/logo/engagebay-logo.png"
              alt="Engagebay Logo"
            />
          </Link>
          <Image
            h={"90%"}
            src="https://d2p078bqz5urf7.cloudfront.net/cloud/assets/img/menu-icons/menu-divider.png"
          />
          <Box color={"white"}>
            <Menu isOpen={isOpenMarketing}>
              <MenuButton
                border={"1px solid white"}
                transition="all 0.2s"
                _hover={{ color: "purple.400" }}
                aria-label="Courses"
                color={"white"}
                py={2}
                px={5}
                onMouseEnter={onOpenMarketing}
                onMouseLeave={onCloseMarketing}
              >
                Marketing <ChevronDownIcon color={"white"} />
              </MenuButton>
              <MenuList
                // mt={"-9px"}
                bgColor={"#522a77"}
                borderRadius={3}
                zIndex={0}
                border={"1px solid #522a77"}
                onMouseEnter={onOpenMarketing}
                onMouseLeave={onCloseMarketing}
              >
                <MenuItem _hover={{ bgColor: "#322659" }}>Marketing</MenuItem>
                <MenuItem _hover={{ bgColor: "#322659" }}>Sales</MenuItem>
                <MenuItem _hover={{ bgColor: "#322659" }}>Service</MenuItem>
                <MenuItem _hover={{ bgColor: "#322659" }}>Livechat</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>

        <Box pl={10} w={"55%"} h={"full"} color={"white"}>
          <Flex
            direction={"row"}
            alignItems={"center"}
            // justify={"space-around"}
            h={"full"}
            fontSize={14}
            gap={6}
          >
            <SearchIcon color={"white"} />
            <Box h={"full"}>
              <Menu isOpen={isOpenContacts} h={"full"}>
                <MenuButton
                  transition="all 0.2s"
                  _hover={{ bgColor: "#522a77" }}
                  aria-label="Courses"
                  onMouseEnter={onOpenContacts}
                  onMouseLeave={onCloseContacts}
                  h={"full"}
                  p={2}
                  color={"white"}
                  zIndex={2}
                >
                  Contacts <ChevronDownIcon />
                </MenuButton>
                <MenuList
                  mt={"-9px"}
                  bgColor={"#522a77"}
                  borderRadius={0}
                  zIndex={0}
                  border={"1px solid #522a77"}
                  onMouseEnter={onOpenContacts}
                  onMouseLeave={onCloseContacts}
                >
                  <MenuItem _hover={{ bgColor: "#322659" }}>Contacts</MenuItem>
                  <MenuItem _hover={{ bgColor: "#322659" }}>Lists</MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <Box h={"full"}>
              <Menu h={"full"} isOpen={isOpenForms}>
                <MenuButton
                  transition="all 0.2s"
                  _hover={{ bgColor: "#522a77" }}
                  aria-label="Courses"
                  onMouseEnter={onOpenForms}
                  onMouseLeave={onCloseForms}
                  h={"full"}
                  p={2}
                  color={"white"}
                >
                  Forms <ChevronDownIcon />
                </MenuButton>
                <MenuList
                  mt={"-9px"}
                  bgColor={"#522a77"}
                  borderRadius={0}
                  zIndex={0}
                  border={"1px solid #522a77"}
                  onMouseEnter={onOpenForms}
                  onMouseLeave={onCloseForms}
                >
                  <MenuItem _hover={{ bgColor: "#322659" }}>
                    Inline Forms
                  </MenuItem>
                  <MenuItem _hover={{ bgColor: "#322659" }}>
                    Popup Forms
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <Flex color={"white"} align={"center"}>
              <Text h={"full"}>Landing Pages</Text>
            </Flex>
            <Box h={"full"}>
              <Menu h={"full"} isOpen={isOpenTemplates}>
                <MenuButton
                  transition="all 0.2s"
                  _hover={{ bgColor: "#522a77" }}
                  aria-label="Courses"
                  onMouseEnter={onOpenTemplates}
                  onMouseLeave={onCloseTemplates}
                  h={"full"}
                  p={2}
                  color={"white"}
                >
                  Templates
                  <ChevronDownIcon />
                </MenuButton>
                <MenuList
                  mt={"-9px"}
                  bgColor={"#522a77"}
                  borderRadius={0}
                  zIndex={0}
                  border={"1px solid #522a77"}
                  onMouseEnter={onOpenTemplates}
                  onMouseLeave={onCloseTemplates}
                >
                  <MenuItem _hover={{ bgColor: "#322659" }}>
                    Email Templates
                  </MenuItem>
                  <MenuItem _hover={{ bgColor: "#322659" }}>
                    Video Templates
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <Box h={"full"}>
              <Menu h={"full"} isOpen={isOpenCampaigns}>
                <MenuButton
                  transition="all 0.2s"
                  _hover={{ bgColor: "#522a77" }}
                  aria-label="Courses"
                  onMouseEnter={onOpenCampaigns}
                  onMouseLeave={onCloseCampaigns}
                  h={"full"}
                  p={2}
                  color={"white"}
                >
                  Campaigns
                  <ChevronDownIcon />
                </MenuButton>
                <MenuList
                  mt={"-9px"}
                  bgColor={"#522a77"}
                  borderRadius={0}
                  zIndex={0}
                  border={"1px solid #522a77"}
                  onMouseEnter={onOpenCampaigns}
                  onMouseLeave={onCloseCampaigns}
                >
                  <MenuItem _hover={{ bgColor: "#322659" }}>
                    Email Brodcasts
                  </MenuItem>
                  <MenuItem _hover={{ bgColor: "#322659" }}>
                    SMS Brodcasts
                  </MenuItem>
                  <MenuItem _hover={{ bgColor: "#322659" }}>Sequences</MenuItem>
                  <MenuItem _hover={{ bgColor: "#322659" }}>
                    Automation
                  </MenuItem>
                  <MenuItem _hover={{ bgColor: "#322659" }}>Workflows</MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <Box h={"full"}>
              <Menu h={"full"} isOpen={isOpenEtc}>
                <MenuButton
                  transition="all 0.2s"
                  _hover={{ bgColor: "#522a77" }}
                  aria-label="Courses"
                  onMouseEnter={onOpenEtc}
                  onMouseLeave={onCloseEtc}
                  h={"full"}
                  p={2}
                  color={"white"}
                >
                  <IoEllipsisHorizontal fontSize="1.25rem" bg={"none"} />
                </MenuButton>
                <MenuList
                  mt={"-9px"}
                  bgColor={"#522a77"}
                  borderRadius={0}
                  zIndex={0}
                  border={"1px solid #522a77"}
                  onMouseEnter={onOpenEtc}
                  onMouseLeave={onCloseEtc}
                >
                  <MenuItem _hover={{ bgColor: "#322659" }}>
                    Social Suits
                  </MenuItem>
                  <MenuItem _hover={{ bgColor: "#322659" }}>
                    File Repository
                  </MenuItem>
                  <MenuItem _hover={{ bgColor: "#322659" }}>
                    Push Notifications
                  </MenuItem>
                  <MenuItem _hover={{ bgColor: "#322659" }}>
                    Site Messages
                  </MenuItem>
                  <MenuItem _hover={{ bgColor: "#322659" }}>
                    Sticky Bars
                  </MenuItem>
                  <MenuItem _hover={{ bgColor: "#322659" }}>Web Rules</MenuItem>
                  <MenuItem _hover={{ bgColor: "#322659" }}> Trash</MenuItem>
                  <MenuItem _hover={{ bgColor: "#322659" }}>
                    Activities
                  </MenuItem>
                  <MenuItem _hover={{ bgColor: "#322659" }}> SMS Logs</MenuItem>
                  <MenuItem _hover={{ bgColor: "#322659" }}>Reports</MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Flex>
        </Box>
        <Box w={"28%"}>
          <Flex gap={3} align={"center"} justify={"center"}>
            <Button
              borderRadius={"3px"}
              bg={"#f2603e"}
              color={"#FFFFFF"}
              fontSize={13}
              _hover={{ backgroundColor: "orange.500" }}
            >
              Switch to Modern
            </Button>
            <Button
              fontSize={13}
              borderRadius={"3px"}
              bg={"white"}
              color={"#f2603e"}
              border={"1px solid #f2603e"}
              _hover={{ backgroundColor: "#EDF2F7" }}
            >
              Schedule a Call
            </Button>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<Avatar size="md" bg="grey.500" />}
                variant="outline"
              />
              <MenuList p={0}>
                <MenuItem p={0}>
                  <Stack bg={"#4285f4"} p={2} color={"white"}>
                    <Text>{user.name}</Text>
                    <Text>{user.username}</Text>
                  </Stack>
                </MenuItem>
                <MenuItem icon={<MdOutlineShoppingCart />}> Billing</MenuItem>
                <MenuItem icon={<AiFillSetting />}>Preferences</MenuItem>
                <MenuItem icon={<AiOutlineGroup />}>Account Settings</MenuItem>
                <MenuItem icon={<MdAttachMoney />}>Refer & Earn</MenuItem>
                <MenuItem onClick={userLogout} icon={<MdPowerSettingsNew />}>
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default DashNavbar;
