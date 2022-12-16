import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import React, { useEffect } from 'react'
import { useState } from 'react'
import "./HomeComponents.css"
import {Box,Button,Flex,Image} from '@chakra-ui/react'

function ClinetTestimonial() {

     let crauserData = [
       {
         image: "https://cdn5.engagebay.com/img/testimonials/santiago.jpeg",
         text: "A full-featured marketing platform. With this, you have all you need to get started and succeed. Having all in one platform make any marketer job much easier.",
         title: "Santiago B.",
         designation: "Southern Europe Director, Triptease",
       },
       {
         image: "https://cdn5.engagebay.com/img/testimonials/hongkiat.jpeg",
         text: "EngageBay has everything I need when it comes to managing customer relations and sales activities. The features I most frequently use are automation for sending emails, managing sales, and marketing automation. Plus, having a built-in live chat and help desk tool makes it really easy to engage with customers.",
         title: "Hongkiat L.",
         designation: "Editor-in-chief",
       },
       {
         image: "https://cdn5.engagebay.com/img/testimonials/leonard.jpeg",
         text: "Engagebay works pretty well with my business. I was using ActiveCampaign but the costs were adding up quite quickly. I tried other platforms but the automation sequence offered by ActiveCampaign is not easy to find, until, I got Engagebay. The platforms offer an awesome automation platform for emails, plus landing pages and forms. It works quite well and can be a perfect substitute.",
         title: "Leonardo W.",
         designation: "Founder, Wolff Consultoria",
       },
       {
         image: "https://cdn5.engagebay.com/img/testimonials/shawn.jpeg",
         text: "The software is easy to set up and implement. I feel EngageBay is quickly becoming a marketing automation competitor to the premium SAAS offerings. EngageBay's customer support has been very responsive and helped me resolve an implementation issue almost immediately.",
         title: "Shawn L.",
         designation: "Marketing Manager, List Biological Laboratories, Inc",
       },
     ];   
    const [imageState, setImageState] = useState(0);
    const [imageSrc, setImageSrc] = useState(crauserData[imageState].image);
    const [crouserPara, setCrouserPara] = useState(
      crauserData[imageState].text
    );
    const [crauserTitle, setCrauserTitle] = useState(
      crauserData[imageState].title
    );
    const [crauserDesignation, setCrauserDesignation] = useState(
      crauserData[imageState].designation
    );

    const rightClick = () =>{
      
      if (imageState == crauserData.length-1) {
        setImageState(0);
      }else{
         setImageState(imageState + 1);
      }
     
    }
    const leftClick = ()=> {
      if (imageState == 0) {
        setImageState(crauserData.length - 1);
      }else{
          setImageState(imageState - 1);
      }
    }

   useEffect(() => {
     const id = setInterval(() => {
       console.log(imageState);
       if (imageState == crauserData.length - 1) {
         setImageState(0);
       } else {
         setImageState(imageState + 1);
       }
     }, 5000);
     return () => {
       clearInterval(id);
     };
   }, [{imageState}]);

    useEffect(()=>{
          setImageSrc(crauserData[imageState].image);
          setCrouserPara(crauserData[imageState].text);
          setCrauserTitle(crauserData[imageState].title);
          setCrauserDesignation(crauserData[imageState].designation);
    },[{imageState}])

  console.log(imageState)
  return (
    <Box id="container_Client" pt={10} mt={"80px"}>
      <Box
        id="main_Client"
        bgImage={
          "url('https://appon.radiantthemes.com/wp-content/uploads/2019/01/testmonial-back.png?id=1537')"
        }
        bgPosition={"center"}
        bgRepeat={"no-repeat"}
      >
        <Image id="crauser-img" src={imageSrc} m={"auto"} />
        <Flex mb={5}>
          <Button id="left-btn" onClick={leftClick} bg={"transparent"}>
            <ChevronLeftIcon boxSize={10} />
          </Button>
          <Box>
            <p id="crauser-para">{crouserPara}</p>
          </Box>
          <Button id="right-btn" onClick={rightClick} bg={"transparent"}>
            <ChevronRightIcon boxSize={10} />
          </Button>
        </Flex>
        <h4 id="crauser-title">{crauserTitle}</h4>
        <p id="crauser-desin">{crauserDesignation}</p>
      </Box>
    </Box>
  );
}

export default ClinetTestimonial

