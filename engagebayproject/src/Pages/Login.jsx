import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  Image,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import {Link} from 'react-router-dom'
const initialState = {
  username: "",
  password: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "username":
      return { ...state, username: action.payload };
    case "password":
      return { ...state, password: action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function Login() {  

const history = useNavigate();

const [state, dispatch] = useReducer(reducer, initialState);


  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, password } = state;

    const getuserArr = JSON.parse(localStorage.getItem("userData"));

    console.log(getuserArr);

    if (username === "") {
      alert("EMAIL field required");
    } else if (!username.includes("@")) {
      alert("Please enter valid EMAIL address");
    } else if (password === "") {
      alert("PASSWORD field required");
    } else if (password.length < 5) {
      alert("Please enter PASSWORD more than 5 characters");
    } else {
      if (getuserArr && getuserArr.length) {
       
        const userLogin = getuserArr.filter((el) => {
          return el.username === username && el.password === password;
        });
        console.log(userLogin);
        if (userLogin.length === 0) {
          alert("Invalid Details");
        } else {
          console.log("done");
          dispatch({ type: "reset" });
          localStorage.setItem("user_login", JSON.stringify(...userLogin));
          history("/dashboard");
        }
      }
    }
  };

  return (
    <>
      <Box w={"full"}>
        <Flex w={"full"} direction={"row"}>
          <Box w={"35%"} h={"max-content"}>
            <Box w={"full"} p={"10"} textAlign={"center"} m={"auto"}>
              <Image
                w={"60%"}
                m={"auto"}
                mt={6}
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2YCASGOjHa88SjGyJXjWOnfgNrmJieI-ZEw&usqp=CAU"
                }
              />
              <Text fontSize={"4xl"}>Login</Text>
              <FormControl mt={4}>
                <Grid gap={4}>
                  <Box>
                    <FormLabel>Username</FormLabel>
                    <Input
                      placeholder="Work Email"
                      borderRadius={1}
                      py={6}
                      type="email"
                      name="username"
                      value={state.username}
                      onChange={(e) =>
                        dispatch({ type: "username", payload: e.target.value })
                      }
                    />
                  </Box>
                  <Box>
                    <FormLabel>Password</FormLabel>
                    <Input
                      placeholder="Password"
                      borderRadius={1}
                      py={6}
                      name="password"
                      type="password"
                      value={state.password}
                      onChange={(e) =>
                        dispatch({ type: "password", payload: e.target.value })
                      }
                    />
                  </Box>
                </Grid>
              </FormControl>
              <Button
                mt={6}
                w={"full"}
                bgColor="#f2603e"
                borderRadius={1}
                py={6}
                color={"white"}
                type="submit"
                _hover={{ bgColor: "#f2603e" }}
                onClick={handleSubmit}
              >
                <Text fontSize={18}>Login</Text>
              </Button>
              <Button
                mt={4}
                w={"full"}
                p={0}
                h={"full"}
                border={"1px solid #007bff"}
                borderRadius={2}
                bgColor={"#007bff"}
                _hover={{ bgColor: "#007bff" }}
              >
                <Flex w={"full"} alignItems={"center"}>
                  <Image
                    h={"full"}
                    w={12}
                    p={3}
                    bgColor={"white"}
                    src="https://d2p078bqz5urf7.cloudfront.net/cloud/dev/assets/img/google-favicon.png"
                  />
                  <Text w={"full"} h={"full"} color={"white"}>
                    SIGN IN WITH G SUITE
                  </Text>
                </Flex>
              </Button>
              <Box mt={9}>
                <Link fontSize={"14"}>Forget Password?</Link>
                <Text fontSize={"14"}>
                  Don't have an account? <Link to="/signup">Sign Up</Link>
                </Text>
                <Flex
                  align={"center"}
                  gap={1}
                  justify={"center"}
                  fontSize={"14"}
                >
                  <Text>Privacy Policy</Text>
                  <Image
                    src={
                      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAQElEQVR42qXKwQkAIAxDUUdxtO6/RBQkQZvSi8I/pL4BoGw/XPkh4XigPmsUgh0626AjRsgxHTkUThsG2T/sIlzdTsp52kSS1wAAAABJRU5ErkJggg=="
                    }
                  />
                </Flex>
              </Box>
            </Box>
          </Box>
          <Box
            w={"65%"}
            h={"100vh"}
            position={"fixed"}
            top={0}
            right={0}
            backgroundImage={
              "linear-gradient(135deg, #130CB7 10%, #52E5E7 100%)"
            }
            bgRepeat={"no-repeat"}
            bgSize={"full"}
          >
            <Box
              w={"75%"}
              backgroundImage={
                "linear-gradient(135deg, #2856b7 10%, #339ad4 100%)"
              }
              p={3}
              position={"absolute"}
              top={6}
              right={4}
              borderRadius={2}
            >
              <Grid
                templateRows="repeat(3, 1fr)"
                templateColumns="20% 80%"
                gap={1}
              >
                <GridItem rowSpan={3} colSpan={1} align={"center"}>
                  <Image
                    w={"17"}
                    borderRadius={"50%"}
                    m={"auto"}
                    src="https://cdn5.engagebay.com/img/testimonials/ivana.jpeg"
                  />
                </GridItem>
                <GridItem rowSpan={2} colSpan={1}>
                  <Text color={"white"} fontSize={"sm"}>
                    I love the landing page builder and ability to import a URL
                    and basically create any type of landing page. This makes
                    creating funnels super easy. You can then customize it to
                    suit your needs.
                  </Text>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1} align={"right"}>
                  <Text color={"white"}>
                    - Ivana B, Founder, New Marketing Agency
                  </Text>
                </GridItem>
              </Grid>
            </Box>
            <Box w={"full"} position={"absolute"} bottom={0}>
              <Flex justify={"center"}>
                <Image
                  w={"65%"}
                  align={"bottom center"}
                  src={
                    "https://d2p078bqz5urf7.cloudfront.net/cloud/assets/img/login-image.svg"
                  }
                />
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default Login;
