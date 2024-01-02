import defaultColors from "../../static/data/default-colors.json"
import darkColors from "../../static/data/dark-theme-colors.json"
import { lightness } from "@theme-ui/color"
const theme = {
  colors: {
    ...defaultColors,
    text: "#333",
    background: "#fff",
    primary: "",
    accent: "#fff",
    muted: "rgba(0, 0, 0, 0.7)",
    cardBg: "",
    textShadow: "",
    labelText: "#777",
    inputBorder: "#aaa",
    inputBackground: "#fff",
    socialIcons: lightness("siteColor", 0.4),
    socialIconsHover: lightness("siteColor", 0.3),
    buttonColor: lightness("siteColor", 0.9),
    buttonHoverBg: lightness("siteColor", 0.4),
    buttonHoverColor: lightness("siteColor", 0.8),
    modes: {
      dark: {
        text: "#999",
        background: "#000",
        primary: "",
        accent: "#5C2941",
        muted: "rgba(0, 0, 0, 0.2)",
        // cardBg: "linear-gradient(180deg, rgba(13, 11, 11, 0.8) 12%, rgba(19, 20, 22, 0.9) 80%)",
        cardBg: "",
        textShadow: "rgba(0, 0, 0, 0.9)",
        labelText: "#777",
        inputBorder: "#777",
        inputBackground: "#333",
        socialIcons: lightness("siteColor", 0.5),
        socialIconsHover: lightness("siteColor", 0.9),
        buttonColor: lightness("siteColor", 0.7),
        buttonHoverBg: lightness("siteColor", 0.3),
        buttonHoverColor: lightness("siteColor", 0.9),
        ...darkColors,
      },
    },
  },
  links: {
    postLink: {
      color: "muted",
      "&:hover": {
        color: "text",
      },
    },
  },
  variants: {
    button: {
      bg: "siteColor",
      color: "buttonColor",
      "&:hover": {
        bg: "buttonHoverBg",
        color: "buttonHoverColor",
      },
    },
    socialIcons: {
      a: {
        color: "socialIcons",
        ":hover": {
          color: "socialIconsHover",
        },
      },
    },
  },
}

export default theme