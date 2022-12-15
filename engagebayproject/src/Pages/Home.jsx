import React from "react";
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import '../Styles/Home.css'
import {Box} from "@chakra-ui/react";
import VideoBackGround from "../Components/HomeComponents/VideoBackGround";
import AvtivitySolution from "../Components/HomeComponents/AvtivitySolution";
import ReviewsTab from "../Components/HomeComponents/ReviewsTab";
import CreateOwnViews from "../Components/HomeComponents/CreateOwnViews";
import ClinetTestimonial from "../Components/HomeComponents/ClinetTestimonial";
import GetStartedBox from "../Components/HomeComponents/GetStartedBox";
import BoxHover from "../Components/HomeComponents/BoxHover";

function Home() {
  return (
    <>
      <Box id="nav-container" w={"full"}>
        <Navbar />
      </Box>
      <Box w={"full"} overflow={"hidden"}>
        <VideoBackGround/>
        <AvtivitySolution/>
        <ReviewsTab/>
        <CreateOwnViews/>
        <ClinetTestimonial/>
        <BoxHover/>
        <GetStartedBox/>
        <Footer/>
      </Box>
      
    </>
  );
}

export default Home
