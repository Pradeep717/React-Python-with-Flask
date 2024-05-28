import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Icon,
  IconButton,
  Text,

} from "@chakra-ui/react";
import React from "react";
import { BiTrash } from "react-icons/bi";
import EditModel from "./EditModel";

const UserCard = ({ user }) => {
  return (
    <Card>
      <CardHeader>
        <Flex>
          <Flex
            alignItems="center"
            flex="1"
            gap={4} 
          >
            <Avatar size="md" name={user.name} />
            <Box>
              <Heading size="md">{user.name}</Heading>
              <Text>{user.role}</Text>
            </Box>
          </Flex>
          <Flex>
            <EditModel />
            <IconButton
              variant="ghost"
              colorScheme="red"
              size={"sm"}
              aria-label="Delete User"
              icon={<BiTrash size={20} />}
            />
          </Flex>
        </Flex>
      </CardHeader>

      <CardBody>
        <Text>{user.description}</Text>
      </CardBody>
    </Card>
  );
};

export default UserCard;
