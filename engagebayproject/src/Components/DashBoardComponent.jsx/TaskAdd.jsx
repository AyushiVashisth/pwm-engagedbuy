import React from "react";
import { Divider, Grid, GridItem, Text } from "@chakra-ui/react";
import { ChatIcon, CopyIcon, EditIcon } from "@chakra-ui/icons";
const TaskAdd = () => {
  return (
    <>
      <Grid pt={10}
        h="200px"
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={4}
        width="95%"
        margin={"auto"}
        marginBottom="50px"
      >
        <GridItem
          rowSpan={3}
          border="1px solid #AAAAAA"
          borderRadius={5}
          colSpan={4}
        >
          <Text color={"#AAAAAA"} p={2} m={2}>
            Project Timeline
          </Text>
          <Divider />
          <Text color={"#AAAAAA"} p={10} textAlign="center">
            No current activity in time frame.
          </Text>
        </GridItem>
        <GridItem
          colSpan={2}
          p={4}
          textAlign="center"
          borderRadius={5}
          border="1px solid #AAAAAA"
        >
          <Text>
            <EditIcon mr={5} />
            Drafts a proposal
          </Text>
        </GridItem>
        <GridItem
          colSpan={2}
          p={4}
          textAlign="center"
          borderRadius={5}
          border="1px solid #AAAAAA"
        >
          <Text>
            <ChatIcon mr={5} />
            Create a contract
          </Text>
        </GridItem>
        <GridItem
          colSpan={2}
          p={4}
          textAlign="center"
          borderRadius={5}
          border="1px solid #AAAAAA"
        >
          <Text>
            <CopyIcon mr={5} />
            Send an invoice
          </Text>
        </GridItem>
      </Grid>
    </>
  );
};

export default TaskAdd;
