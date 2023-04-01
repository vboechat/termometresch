import { ChakraTheme, extendTheme } from "@chakra-ui/react";

const customChakraTheme: Partial<ChakraTheme> = {
  config: {
    initialColorMode: "dark",
  },
  colors: {
    blue: "#2F4DC6",
    green: {
      500: "#22C55E",
      600: "#20bd5b",
    },
  },
  fonts: {
    heading: "Poppins, system-ui, sans-serif",
    body: "Poppins, system-ui, sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "#C7D2FE",
      },
    },
  },
};

const theme = extendTheme(customChakraTheme);

export default theme;
