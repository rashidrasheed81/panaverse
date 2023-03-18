"use client";
import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  Flex,
  Icon,
  Center,
} from "@chakra-ui/react";
import Home from "../components/Home";
import Link from "next/link";
import { ImWhatsapp } from "react-icons/im";
import { VscGithub } from "react-icons/vsc";
import { SiGooglemaps } from "react-icons/si";

export default function Contact() {
  return (
    <>
      <Home title="Contact" src={"contact.jpg"} />
      <Box>
        <Center>
          <Grid pt={"30px"} pb={"10"} color={"black"}>
            <Heading size={"lg"} color={"black"} pb="5" px={{base:'90',md:'10'}} >
              Contact Us
            </Heading>

            <Link href={"https://wa.me/00923167634620"} target="_blank" >
              <Text
                fontSize={"2xl"}
                fontStyle="normal"
                textColor={"green.600"}
                pb="1"
                 
              >
                {" "}
                <Icon as={ImWhatsapp} pr="1" />
                +92 3167634620
              </Text>
            </Link>

            <Link href={"https://github.com/rashidrasheed81"} target="_blank">
              <Text as="b" fontSize={"xl"} fontStyle="normal">
                <Icon as={VscGithub} pr="1" /> rashidrasheed81@gmail.com
              </Text>
            </Link>
            <Link
              href={"https://goo.gl/maps/RdFJnziwQLvysNp36"}
              target="_blank"
            >
              <Text as="b" fontSize={"xl"} color={"green.800"}  >
                <Icon as={SiGooglemaps} pr="1" /> Kot Radha Kishen, Pakistan
              </Text>
            </Link>
          </Grid>
        </Center>
      </Box>
    </>
  );
}
