import NextLink from "next/link";
import {
  Button,
  Container,
  Box,
  Heading,
  Image,
  Link,
  List,
  SimpleGrid,
  Icon,
  useColorModeValue,
  ListItem,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Layout from "../components/layouts/article";
import { IoLogoTwitter, IoLogoGithub, IoLogoDiscord } from "react-icons/io5";

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="0.5rem"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          p={3}
          mb={6}
          mt={24}
          align="center"
        >
          Hello, Welcome to Stars
        </Box>
      </Container>
    </Layout>
  );
};

export default Page;
