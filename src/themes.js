import { createTheme } from "@mui/material/styles";

export const shades = {
    primary: {
        100: "#d1d6df",
        200: "#a3aebf",
        300: "#74859e",
        400: "#465d7e",
        500: "#18345e",
        600: "#132a4b",
        700: "#0e1f38",
        800: "#0a1526",
        900: "#050a13"
    },
    secondary: {
        100: "#d6d5e6",
        200: "#adabcd",
        300: "#8382b3",
        400: "#5a589a",
        500: "#312e81",
        600: "#272567",
        700: "#1d1c4d",
        800: "#141234",
        900: "#0a091a"
    },
    neutral: {
        100: "#fceed2",
        200: "#f9dda6",
        300: "#f6cd79",
        400: "#f3bc4d",
        500: "#f0ab20",
        600: "#c0891a",
        700: "#906713",
        800: "#60440d",
        900: "#302206"
    },
    active: {
        100: "#d3f3f8",
        200: "#a7e6f1",
        300: "#7adaea",
        400: "#4ecde3",
        500: "#22c1dc",
        600: "#1b9ab0",
        700: "#147484",
        800: "#0e4d58",
        900: "#07272c"
    },
}

export const theme = createTheme({
  palette: {
    primary: {
      main: shades.primary[500],
    },
    secondary: {
      main: shades.secondary[500],
    },
    neutral: {
      dark: shades.neutral[700],
      main: shades.neutral[500],
      light: shades.neutral[100],
    },
    highlight: {
        main: shades.active[500],
    }
  }
});
