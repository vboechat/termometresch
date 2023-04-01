import { Flex } from "@chakra-ui/react";
import React from "react";

type CardProps = {
  children: React.ReactNode;
};

const Card = ({ children }: CardProps) => {
  return (
    <Flex
      backgroundColor="blue"
      maxWidth={400}
      p={6}
      rounded="lg"
      shadow="md"
      width="full"
      flexDirection="column"
      justifyContent="center"
    >
      {children}
    </Flex>
  );
};

export default Card;
