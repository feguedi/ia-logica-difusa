import { theme } from '@chakra-ui/core'

const customColors = {
    primary: "#2196f3",
    second: "#03a9f4",
    danger: "#f44336",
    alert: "#ffc107",
    success: "#4caf50",
    grey: "#f5f5f5"
}

const materialColors = {
    "red": {
        50: "#ffebee",
        100: "#ffcdd2",
        200: "#ef9a9a",
        300: "#e57373",
        400 : "#ef5350",
        500: "#f44336",
        600: "#e53935",
        700: "#d32f2f",
        800: "#c62828",
        900: "#b71c1c",
        "A100": "#ff8a80",
        "A200": "#ff5252",
        "A400": "#ff1744",
        "A700": "#d50000"
    },
    "pink": {
        50: "#fce4ec",
        100: "#f48fb1",
        300: "#f06292",
        400: "#ec407a",
        500: "#e91e63",
        600: "#d81b60",
        700: "#c2185b",
        800: "#ad1457",
        900: "#880e4f",
        "A100": "#ff80ab",
        "A200": "#ff4081",
        "A400": "#f50057",
        "A700": "#c51162"
    },
    "purple": {
        50: "#f3e5f5",
        100: "#e1bee7",
        200: "#ce93d8",
        300: "#ba68c8",
        400: "#ab47bc",
        500: "#9c27b0",
        600: "#8e24aa",
        700: "#7b1fa2",
        800: "#6a1b9a",
        900: "#4a148c",
        "A100": "#ea80fc",
        "A200": "#e040fb",
        "A400": "#d500f9",
        "A700": "#aa00ff"
    },
    "deep purple": {
        50: "#ede7f6",
        100: "#d1c4e9",
        200: "#b39ddb",
        300: "#9575cd",
        400: "#7e57c2",
        500: "#673ab7",
        600: "#5e35b1",
        700: "#512da8",
        800: "#4527a0",
        900: "#311b92",
        "A100": "#b388ff",
        "A200": "#7c4dff",
        "A400": "#651fff",
        "A700": "#6200ea"
    },
    "indigo": {
        50: "#e8eaf6",
        100: "#c5cae9",
        200: "#9fa8da",
        300: "#7986cb",
        400: "#5c6bc0",
        500: "#3f51b5",
        600: "#3949ab",
        700: "#303f9f",
        800: "#283593",
        900: "#1a237e",
        "A100": "#8c9eff",
        "A200": "#536dfe",
        "A400": "#3d5afe",
        "A700": "#304ffe"
    },
    "blue": {
        50: "#e3f2fd",
        100: "#bbdefb",
        200: "#90caf9",
        300: "#64b5f6",
        400: "#42a5f5",
        500: "#2196f3",
        600: "#1e88e5",
        700: "#1976d2",
        800: "#1565c0",
        900: "#0d47a1",
        "A100": "#82b1ff",
        "A200": "#448aff",
        "A400": "#2979ff",
        "A700": "#2962ff"
    },
    "light blue": {
        50: "#e1f5fe",
        100: "#b3e5fc",
        200: "#81d4fa",
        300: "#4fc3f7",
        400: "#29b6f6",
        500: "#03a9f4",
        600: "#039be5",
        700: "#0288d1",
        800: "#0277bd",
        900: "#01579b",
        "A100": "#80d8ff",
        "A200": "#40c4ff",
        "A400": "#00b0ff",
        "A700": "#0091ea"
    },
    "cyan": {
        50: "#e0f7fa",
        100: "#b2ebf2",
        200: "#80deea",
        300: "#4dd0e1",
        400: "#26c6da",
        500: "#00bcd4",
        600: "#00acc1",
        700: "#0097a7",
        800: "#00838f",
        900: "#006064",
        "A100": "#84ffff",
        "A200": "#18ffff",
        "A400": "#00e5ff",
        "A700": "#00b8d4"
    },
    "teal": {
        50: "#e0f2f1",
        100: "#b2dfdb",
        200: "#80cbc4",
        300: "#4db6ac",
        400: "#26a69a",
        500: "#009688",
        600: "#00897b",
        700: "#00796b",
        800: "#00695c",
        900: "#004d40",
        "A100": "#a7ffeb",
        "A200": "#64ffda",
        "A400": "#1de9b6",
        "A700": "#00bfa5"
    },
    "green": {
        50: "#e8f5e9",
        100: "#c8e6c9",
        200: "#a5d6a7",
        300: "#81c784",
        400: "#66bb6a",
        500: "#4caf50",
        600: "#43a047",
        700: "#388e3c",
        800: "#2e7d32",
        900: "#1b5e20",
        "A100": "#b9f6ca",
        "A200": "#69f0ae",
        "A400": "#00e676",
        "A700": "#00c853"
    },
    "light green": {
        50: "#f1f8e9",
        100: "#dcedc8",
        200: "#c5e1a5",
        300: "#aed581",
        400: "#9ccc65",
        500: "#8bc34a",
        600: "#7cb342",
        700: "#689f38",
        800: "#558b2f",
        900: "#33691e",
        "A100": "#ccff90",
        "A200": "#b2ff59",
        "A400": "#76ff03",
        "A700": "#64dd17"
    },
    "lime": {
        50: "#f9fbe7",
        100: "#f0f4c3",
        200: "#e6ee9c",
        300: "#dce775",
        400: "#d4e157",
        500: "#cddc39",
        600: "#c0ca33",
        700: "#afb42b",
        800: "#9e9d24",
        900: "#827717",
        "A100": "#f4ff81",
        "A200": "#eeff41",
        "A400": "#c6ff00",
        "A700": "#aeea00"
    },
    "yellow": {
        50: "#fffde7",
        100: "#fff9c4",
        200: "#fff59d",
        300: "#fff176",
        400: "#ffee58",
        500: "#ffeb3b",
        600: "#fdd835",
        700: "#fbc02d",
        800: "#f9a825",
        900: "#f57f17",
        "A100": "#ffff8d",
        "A200": "#ffff00",
        "A400": "#ffea00",
        "A700": "#ffd600"
    },
    "amber": {
        50: "#fff8e1",
        100: "#ffecb3",
        200: "#ffe082",
        300: "#ffd54f",
        400: "#ffca28",
        500: "#ffc107",
        600: "#ffb300",
        700: "#ffa000",
        800: "#ff8f00",
        900: "#ff6f00",
        "A100": "#ffe57f",
        "A200": "#ffd740",
        "A400": "#ffc400",
        "A700": "#ffab00"
    },
    "orange": {
        50: "#fff3e0",
        100: "#ffe0b2",
        200: "#ffcc80",
        300: "#ffb74d",
        400: "#ffa726",
        500: "#ff9800",
        600: "#fb8c00",
        700: "#f57c00",
        800: "#ef6c00",
        900: "#e65100",
        "A100": "#ffd180",
        "A200": "#ffab40",
        "A400": "#ff9100",
        "A700": "#ff6d00"
    },
    "deep orange": {
        50: "#fbe9e7",
        100: "#ffccbc",
        200: "#ffab91",
        300: "#ff8a65",
        400: "#ff7043",
        500: "#ff5722",
        600: "#f4511e",
        700: "#e64a19",
        800: "#d84315",
        900: "#bf360c",
        "A100": "#ff9e80",
        "A200": "#ff6e40",
        "A400": "#ff3d00",
        "A700": "#dd2c00"
    },
    "brown": {
        50: "#efebe9",
        100: "#d7ccc8",
        200: "#bcaaa4",
        300: "#a1887f",
        400: "#8d6e63",
        500: "#795548",
        600: "#6d4c41",
        700: "#5d4037",
        800: "#4e342e",
        900: "#3e2723"
    },
    "grey": {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#eeeeee",
        300: "#e0e0e0",
        400: "#bdbdbd",
        500: "#9e9e9e",
        600: "#757575",
        700: "#616161",
        800: "#424242",
        900: "#212121"
    },
    "blue grey": {
        50: "#eceff1",
        100: "#cfd8dc",
        200: "#b0bec5",
        300: "#90a4ae",
        400: "#78909c",
        500: "#607d8b",
        600: "#546e7a",
        700: "#455a64",
        800: "#37474f",
        900: "#263238"
    }
}

const customFonts = {
    body: "Segoe UI",
    heading: "Montserrat"
}

export default {
    ...theme,
    colors: {
        ...theme.colors,
        ...customColors,
        ...materialColors
    },
    fonts: {
        ...theme.fonts,
        ...customFonts
    }
}

/**
 *{
     "colors": [{
         "name": "red",
         "key": "red",
         "android": "red",
         "default": {
             "strength": 500,
             "hex": "#f44336",
             "contrast": "white"
         },
         "shades": [{
             "strength": 50,
             "hex": "#ffebee",
             "contrast": "black"
         }, {
             "strength": 100,
             "hex": "#ffcdd2",
             "contrast": "black"
         }, {
             "strength": 200,
             "hex": "#ef9a9a",
             "contrast": "black"
         }, {
             "strength": 300,
             "hex": "#e57373",
             "contrast": "black"
         }, {
             "strength": 400,
             "hex": "#ef5350",
             "contrast": "black"
         }, {
             "strength": 500,
             "hex": "#f44336",
             "contrast": "white"
         }, {
             "strength": 600,
             "hex": "#e53935",
             "contrast": "white"
         }, {
             "strength": 700,
             "hex": "#d32f2f",
             "contrast": "white"
         }, {
             "strength": 800,
             "hex": "#c62828",
             "contrast": "white"
         }, {
             "strength": 900,
             "hex": "#b71c1c",
             "contrast": "white"
         }, {
             "strength": "A100",
             "hex": "#ff8a80",
             "contrast": "black"
         }, {
             "strength": "A200",
             "hex": "#ff5252",
             "contrast": "white"
         }, {
             "strength": "A400",
             "hex": "#ff1744",
             "contrast": "white"
         }, {
             "strength": "A700",
             "hex": "#d50000",
             "contrast": "white"
         }]
     }, {
         "name": "pink",
         "key": "pink",
         "android": "pink",
         "default": {
             "strength": 500,
             "hex": "#e91e63",
             "contrast": "white"
         },
         "shades": [{
             "strength": 50,
             "hex": "#fce4ec",
             "contrast": "black"
         }, {
             "strength": 100,
             "hex": "#f8bbd0",
             "contrast": "black"
         }, {
             "strength": 200,
             "hex": "#f48fb1",
             "contrast": "black"
         }, {
             "strength": 300,
             "hex": "#f06292",
             "contrast": "black"
         }, {
             "strength": 400,
             "hex": "#ec407a",
             "contrast": "black"
         }, {
             "strength": 500,
             "hex": "#e91e63",
             "contrast": "white"
         }, {
             "strength": 600,
             "hex": "#d81b60",
             "contrast": "white"
         }, {
             "strength": 700,
             "hex": "#c2185b",
             "contrast": "white"
         }, {
             "strength": 800,
             "hex": "#ad1457",
             "contrast": "white"
         }, {
             "strength": 900,
             "hex": "#880e4f",
             "contrast": "white"
         }, {
             "strength": "A100",
             "hex": "#ff80ab",
             "contrast": "black"
         }, {
             "strength": "A200",
             "hex": "#ff4081",
             "contrast": "white"
         }, {
             "strength": "A400",
             "hex": "#f50057",
             "contrast": "white"
         }, {
             "strength": "A700",
             "hex": "#c51162",
             "contrast": "white"
         }]
     }, {
         "name": "purple",
         "key": "purple",
         "android": "purple",
         "default": {
             "strength": 500,
             "hex": "#9c27b0",
             "contrast": "white"
         },
         "shades": [{
             "strength": 50,
             "hex": "#f3e5f5",
             "contrast": "black"
         }, {
             "strength": 100,
             "hex": "#e1bee7",
             "contrast": "black"
         }, {
             "strength": 200,
             "hex": "#ce93d8",
             "contrast": "black"
         }, {
             "strength": 300,
             "hex": "#ba68c8",
             "contrast": "white"
         }, {
             "strength": 400,
             "hex": "#ab47bc",
             "contrast": "white"
         }, {
             "strength": 500,
             "hex": "#9c27b0",
             "contrast": "white"
         }, {
             "strength": 600,
             "hex": "#8e24aa",
             "contrast": "white"
         }, {
             "strength": 700,
             "hex": "#7b1fa2",
             "contrast": "white"
         }, {
             "strength": 800,
             "hex": "#6a1b9a",
             "contrast": "white"
         }, {
             "strength": 900,
             "hex": "#4a148c",
             "contrast": "white"
         }, {
             "strength": "A100",
             "hex": "#ea80fc",
             "contrast": "black"
         }, {
             "strength": "A200",
             "hex": "#e040fb",
             "contrast": "white"
         }, {
             "strength": "A400",
             "hex": "#d500f9",
             "contrast": "white"
         }, {
             "strength": "A700",
             "hex": "#aa00ff",
             "contrast": "white"
         }]
     }, {
         "name": "deep purple",
         "key": "deep-purple",
         "android": "deep_purple",
         "default": {
             "strength": 500,
             "hex": "#673ab7",
             "contrast": "white"
         },
         "shades": [{
             "strength": 50,
             "hex": "#ede7f6",
             "contrast": "black"
         }, {
             "strength": 100,
             "hex": "#d1c4e9",
             "contrast": "black"
         }, {
             "strength": 200,
             "hex": "#b39ddb",
             "contrast": "black"
         }, {
             "strength": 300,
             "hex": "#9575cd",
             "contrast": "white"
         }, {
             "strength": 400,
             "hex": "#7e57c2",
             "contrast": "white"
         }, {
             "strength": 500,
             "hex": "#673ab7",
             "contrast": "white"
         }, {
             "strength": 600,
             "hex": "#5e35b1",
             "contrast": "white"
         }, {
             "strength": 700,
             "hex": "#512da8",
             "contrast": "white"
         }, {
             "strength": 800,
             "hex": "#4527a0",
             "contrast": "white"
         }, {
             "strength": 900,
             "hex": "#311b92",
             "contrast": "white"
         }, {
             "strength": "A100",
             "hex": "#b388ff",
             "contrast": "black"
         }, {
             "strength": "A200",
             "hex": "#7c4dff",
             "contrast": "white"
         }, {
             "strength": "A400",
             "hex": "#651fff",
             "contrast": "white"
         }, {
             "strength": "A700",
             "hex": "#6200ea",
             "contrast": "white"
         }]
     }, {
         "name": "indigo",
         "key": "indigo",
         "android": "indigo",
         "default": {
             "strength": 500,
             "hex": "#3f51b5",
             "contrast": "white"
         },
         "shades": [{
             "strength": 50,
             "hex": "#e8eaf6",
             "contrast": "black"
         }, {
             "strength": 100,
             "hex": "#c5cae9",
             "contrast": "black"
         }, {
             "strength": 200,
             "hex": "#9fa8da",
             "contrast": "black"
         }, {
             "strength": 300,
             "hex": "#7986cb",
             "contrast": "white"
         }, {
             "strength": 400,
             "hex": "#5c6bc0",
             "contrast": "white"
         }, {
             "strength": 500,
             "hex": "#3f51b5",
             "contrast": "white"
         }, {
             "strength": 600,
             "hex": "#3949ab",
             "contrast": "white"
         }, {
             "strength": 700,
             "hex": "#303f9f",
             "contrast": "white"
         }, {
             "strength": 800,
             "hex": "#283593",
             "contrast": "white"
         }, {
             "strength": 900,
             "hex": "#1a237e",
             "contrast": "white"
         }, {
             "strength": "A100",
             "hex": "#8c9eff",
             "contrast": "black"
         }, {
             "strength": "A200",
             "hex": "#536dfe",
             "contrast": "white"
         }, {
             "strength": "A400",
             "hex": "#3d5afe",
             "contrast": "white"
         }, {
             "strength": "A700",
             "hex": "#304ffe",
             "contrast": "white"
         }]
     }, {
         "name": "blue",
         "key": "blue",
         "android": "blue",
         "default": {
             "strength": 500,
             "hex": "#2196f3",
             "contrast": "white"
         },
         "shades": [{
             "strength": 50,
             "hex": "#e3f2fd",
             "contrast": "black"
         }, {
             "strength": 100,
             "hex": "#bbdefb",
             "contrast": "black"
         }, {
             "strength": 200,
             "hex": "#90caf9",
             "contrast": "black"
         }, {
             "strength": 300,
             "hex": "#64b5f6",
             "contrast": "black"
         }, {
             "strength": 400,
             "hex": "#42a5f5",
             "contrast": "black"
         }, {
             "strength": 500,
             "hex": "#2196f3",
             "contrast": "white"
         }, {
             "strength": 600,
             "hex": "#1e88e5",
             "contrast": "white"
         }, {
             "strength": 700,
             "hex": "#1976d2",
             "contrast": "white"
         }, {
             "strength": 800,
             "hex": "#1565c0",
             "contrast": "white"
         }, {
             "strength": 900,
             "hex": "#0d47a1",
             "contrast": "white"
         }, {
             "strength": "A100",
             "hex": "#82b1ff",
             "contrast": "black"
         }, {
             "strength": "A200",
             "hex": "#448aff",
             "contrast": "white"
         }, {
             "strength": "A400",
             "hex": "#2979ff",
             "contrast": "white"
         }, {
             "strength": "A700",
             "hex": "#2962ff",
             "contrast": "white"
         }]
     }, {
         "name": "light blue",
         "key": "light-blue",
         "android": "light_blue",
         "default": {
             "strength": 500,
             "hex": "#03a9f4",
             "contrast": "white"
         },
         "shades": [{
             "strength": 50,
             "hex": "#e1f5fe",
             "contrast": "black"
         }, {
             "strength": 100,
             "hex": "#b3e5fc",
             "contrast": "black"
         }, {
             "strength": 200,
             "hex": "#81d4fa",
             "contrast": "black"
         }, {
             "strength": 300,
             "hex": "#4fc3f7",
             "contrast": "black"
         }, {
             "strength": 400,
             "hex": "#29b6f6",
             "contrast": "black"
         }, {
             "strength": 500,
             "hex": "#03a9f4",
             "contrast": "white"
         }, {
             "strength": 600,
             "hex": "#039be5",
             "contrast": "white"
         }, {
             "strength": 700,
             "hex": "#0288d1",
             "contrast": "white"
         }, {
             "strength": 800,
             "hex": "#0277bd",
             "contrast": "white"
         }, {
             "strength": 900,
             "hex": "#01579b",
             "contrast": "white"
         }, {
             "strength": "A100",
             "hex": "#80d8ff",
             "contrast": "black"
         }, {
             "strength": "A200",
             "hex": "#40c4ff",
             "contrast": "black"
         }, {
             "strength": "A400",
             "hex": "#00b0ff",
             "contrast": "black"
         }, {
             "strength": "A700",
             "hex": "#0091ea",
             "contrast": "white"
         }]
     }, {
         "name": "cyan",
         "key": "cyan",
         "android": "cyan",
         "default": {
             "strength": 500,
             "hex": "#00bcd4",
             "contrast": "white"
         },
         "shades": [{
             "strength": 50,
             "hex": "#e0f7fa",
             "contrast": "black"
         }, {
             "strength": 100,
             "hex": "#b2ebf2",
             "contrast": "black"
         }, {
             "strength": 200,
             "hex": "#80deea",
             "contrast": "black"
         }, {
             "strength": 300,
             "hex": "#4dd0e1",
             "contrast": "black"
         }, {
             "strength": 400,
             "hex": "#26c6da",
             "contrast": "black"
         }, {
             "strength": 500,
             "hex": "#00bcd4",
             "contrast": "white"
         }, {
             "strength": 600,
             "hex": "#00acc1",
             "contrast": "white"
         }, {
             "strength": 700,
             "hex": "#0097a7",
             "contrast": "white"
         }, {
             "strength": 800,
             "hex": "#00838f",
             "contrast": "white"
         }, {
             "strength": 900,
             "hex": "#006064",
             "contrast": "white"
         }, {
             "strength": "A100",
             "hex": "#84ffff",
             "contrast": "black"
         }, {
             "strength": "A200",
             "hex": "#18ffff",
             "contrast": "black"
         }, {
             "strength": "A400",
             "hex": "#00e5ff",
             "contrast": "black"
         }, {
             "strength": "A700",
             "hex": "#00b8d4",
             "contrast": "black"
         }]
     }, {
         "name": "teal",
         "key": "teal",
         "android": "teal",
         "default": {
             "strength": 500,
             "hex": "#009688",
             "contrast": "white"
         },
         "shades": [{
             "strength": 50,
             "hex": "#e0f2f1",
             "contrast": "black"
         }, {
             "strength": 100,
             "hex": "#b2dfdb",
             "contrast": "black"
         }, {
             "strength": 200,
             "hex": "#80cbc4",
             "contrast": "black"
         }, {
             "strength": 300,
             "hex": "#4db6ac",
             "contrast": "black"
         }, {
             "strength": 400,
             "hex": "#26a69a",
             "contrast": "black"
         }, {
             "strength": 500,
             "hex": "#009688",
             "contrast": "white"
         }, {
             "strength": 600,
             "hex": "#00897b",
             "contrast": "white"
         }, {
             "strength": 700,
             "hex": "#00796b",
             "contrast": "white"
         }, {
             "strength": 800,
             "hex": "#00695c",
             "contrast": "white"
         }, {
             "strength": 900,
             "hex": "#004d40",
             "contrast": "white"
         }, {
             "strength": "A100",
             "hex": "#a7ffeb",
             "contrast": "black"
         }, {
             "strength": "A200",
             "hex": "#64ffda",
             "contrast": "black"
         }, {
             "strength": "A400",
             "hex": "#1de9b6",
             "contrast": "black"
         }, {
             "strength": "A700",
             "hex": "#00bfa5",
             "contrast": "black"
         }]
     }, {
         "name": "green",
         "key": "green",
         "android": "green",
         "default": {
             "strength": 500,
             "hex": "#4caf50",
             "contrast": "white"
         },
         "shades": [{
             "strength": 50,
             "hex": "#e8f5e9",
             "contrast": "black"
         }, {
             "strength": 100,
             "hex": "#c8e6c9",
             "contrast": "black"
         }, {
             "strength": 200,
             "hex": "#a5d6a7",
             "contrast": "black"
         }, {
             "strength": 300,
             "hex": "#81c784",
             "contrast": "black"
         }, {
             "strength": 400,
             "hex": "#66bb6a",
             "contrast": "black"
         }, {
             "strength": 500,
             "hex": "#4caf50",
             "contrast": "white"
         }, {
             "strength": 600,
             "hex": "#43a047",
             "contrast": "white"
         }, {
             "strength": 700,
             "hex": "#388e3c",
             "contrast": "white"
         }, {
             "strength": 800,
             "hex": "#2e7d32",
             "contrast": "white"
         }, {
             "strength": 900,
             "hex": "#1b5e20",
             "contrast": "white"
         }, {
             "strength": "A100",
             "hex": "#b9f6ca",
             "contrast": "black"
         }, {
             "strength": "A200",
             "hex": "#69f0ae",
             "contrast": "black"
         }, {
             "strength": "A400",
             "hex": "#00e676",
             "contrast": "black"
         }, {
             "strength": "A700",
             "hex": "#00c853",
             "contrast": "black"
         }]
     }, {
         "name": "light green",
         "key": "light-green",
         "android": "light_green",
         "default": {
             "strength": 500,
             "hex": "#8bc34a",
             "contrast": "black"
         },
         "shades": [{
             "strength": 50,
             "hex": "#f1f8e9",
             "contrast": "black"
         }, {
             "strength": 100,
             "hex": "#dcedc8",
             "contrast": "black"
         }, {
             "strength": 200,
             "hex": "#c5e1a5",
             "contrast": "black"
         }, {
             "strength": 300,
             "hex": "#aed581",
             "contrast": "black"
         }, {
             "strength": 400,
             "hex": "#9ccc65",
             "contrast": "black"
         }, {
             "strength": 500,
             "hex": "#8bc34a",
             "contrast": "black"
         }, {
             "strength": 600,
             "hex": "#7cb342",
             "contrast": "black"
         }, {
             "strength": 700,
             "hex": "#689f38",
             "contrast": "black"
         }, {
             "strength": 800,
             "hex": "#558b2f",
             "contrast": "white"
         }, {
             "strength": 900,
             "hex": "#33691e",
             "contrast": "white"
         }, {
             "strength": "A100",
             "hex": "#ccff90",
             "contrast": "black"
         }, {
             "strength": "A200",
             "hex": "#b2ff59",
             "contrast": "black"
         }, {
             "strength": "A400",
             "hex": "#76ff03",
             "contrast": "black"
         }, {
             "strength": "A700",
             "hex": "#64dd17",
             "contrast": "black"
         }]
     }, {
         "name": "lime",
         "key": "lime",
         "android": "lime",
         "default": {
             "strength": 500,
             "hex": "#cddc39",
             "contrast": "black"
         },
         "shades": [{
             "strength": 50,
             "hex": "#f9fbe7",
             "contrast": "black"
         }, {
             "strength": 100,
             "hex": "#f0f4c3",
             "contrast": "black"
         }, {
             "strength": 200,
             "hex": "#e6ee9c",
             "contrast": "black"
         }, {
             "strength": 300,
             "hex": "#dce775",
             "contrast": "black"
         }, {
             "strength": 400,
             "hex": "#d4e157",
             "contrast": "black"
         }, {
             "strength": 500,
             "hex": "#cddc39",
             "contrast": "black"
         }, {
             "strength": 600,
             "hex": "#c0ca33",
             "contrast": "black"
         }, {
             "strength": 700,
             "hex": "#afb42b",
             "contrast": "black"
         }, {
             "strength": 800,
             "hex": "#9e9d24",
             "contrast": "black"
         }, {
             "strength": 900,
             "hex": "#827717",
             "contrast": "white"
         }, {
             "strength": "A100",
             "hex": "#f4ff81",
             "contrast": "black"
         }, {
             "strength": "A200",
             "hex": "#eeff41",
             "contrast": "black"
         }, {
             "strength": "A400",
             "hex": "#c6ff00",
             "contrast": "black"
         }, {
             "strength": "A700",
             "hex": "#aeea00",
             "contrast": "black"
         }]
     }, {
         "name": "yellow",
         "key": "yellow",
         "android": "yellow",
         "default": {
             "strength": 500,
             "hex": "#ffeb3b",
             "contrast": "black"
         },
         "shades": [{
             "strength": 50,
             "hex": "#fffde7",
             "contrast": "black"
         }, {
             "strength": 100,
             "hex": "#fff9c4",
             "contrast": "black"
         }, {
             "strength": 200,
             "hex": "#fff59d",
             "contrast": "black"
         }, {
             "strength": 300,
             "hex": "#fff176",
             "contrast": "black"
         }, {
             "strength": 400,
             "hex": "#ffee58",
             "contrast": "black"
         }, {
             "strength": 500,
             "hex": "#ffeb3b",
             "contrast": "black"
         }, {
             "strength": 600,
             "hex": "#fdd835",
             "contrast": "black"
         }, {
             "strength": 700,
             "hex": "#fbc02d",
             "contrast": "black"
         }, {
             "strength": 800,
             "hex": "#f9a825",
             "contrast": "black"
         }, {
             "strength": 900,
             "hex": "#f57f17",
             "contrast": "black"
         }, {
             "strength": "A100",
             "hex": "#ffff8d",
             "contrast": "black"
         }, {
             "strength": "A200",
             "hex": "#ffff00",
             "contrast": "black"
         }, {
             "strength": "A400",
             "hex": "#ffea00",
             "contrast": "black"
         }, {
             "strength": "A700",
             "hex": "#ffd600",
             "contrast": "black"
         }]
     }, {
         "name": "amber",
         "key": "amber",
         "android": "amber",
         "default": {
             "strength": 500,
             "hex": "#ffc107",
             "contrast": "black"
         },
         "shades": [{
             "strength": 50,
             "hex": "#fff8e1",
             "contrast": "black"
         }, {
             "strength": 100,
             "hex": "#ffecb3",
             "contrast": "black"
         }, {
             "strength": 200,
             "hex": "#ffe082",
             "contrast": "black"
         }, {
             "strength": 300,
             "hex": "#ffd54f",
             "contrast": "black"
         }, {
             "strength": 400,
             "hex": "#ffca28",
             "contrast": "black"
         }, {
             "strength": 500,
             "hex": "#ffc107",
             "contrast": "black"
         }, {
             "strength": 600,
             "hex": "#ffb300",
             "contrast": "black"
         }, {
             "strength": 700,
             "hex": "#ffa000",
             "contrast": "black"
         }, {
             "strength": 800,
             "hex": "#ff8f00",
             "contrast": "black"
         }, {
             "strength": 900,
             "hex": "#ff6f00",
             "contrast": "black"
         }, {
             "strength": "A100",
             "hex": "#ffe57f",
             "contrast": "black"
         }, {
             "strength": "A200",
             "hex": "#ffd740",
             "contrast": "black"
         }, {
             "strength": "A400",
             "hex": "#ffc400",
             "contrast": "black"
         }, {
             "strength": "A700",
             "hex": "#ffab00",
             "contrast": "black"
         }]
     }, {
         "name": "orange",
         "key": "orange",
         "android": "orange",
         "default": {
             "strength": 500,
             "hex": "#ff9800",
             "contrast": "black"
         },
         "shades": [{
             "strength": 50,
             "hex": "#fff3e0",
             "contrast": "black"
         }, {
             "strength": 100,
             "hex": "#ffe0b2",
             "contrast": "black"
         }, {
             "strength": 200,
             "hex": "#ffcc80",
             "contrast": "black"
         }, {
             "strength": 300,
             "hex": "#ffb74d",
             "contrast": "black"
         }, {
             "strength": 400,
             "hex": "#ffa726",
             "contrast": "black"
         }, {
             "strength": 500,
             "hex": "#ff9800",
             "contrast": "black"
         }, {
             "strength": 600,
             "hex": "#fb8c00",
             "contrast": "black"
         }, {
             "strength": 700,
             "hex": "#f57c00",
             "contrast": "black"
         }, {
             "strength": 800,
             "hex": "#ef6c00",
             "contrast": "white"
         }, {
             "strength": 900,
             "hex": "#e65100",
             "contrast": "white"
         }, {
             "strength": "A100",
             "hex": "#ffd180",
             "contrast": "black"
         }, {
             "strength": "A200",
             "hex": "#ffab40",
             "contrast": "black"
         }, {
             "strength": "A400",
             "hex": "#ff9100",
             "contrast": "black"
         }, {
             "strength": "A700",
             "hex": "#ff6d00",
             "contrast": "black"
         }]
     }, {
         "name": "deep orange",
         "key": "deep-orange",
         "android": "deep_orange",
         "default": {
             "strength": 500,
             "hex": "#ff5722",
             "contrast": "white"
         },
         "shades": [{
             "strength": 50,
             "hex": "#fbe9e7",
             "contrast": "black"
         }, {
             "strength": 100,
             "hex": "#ffccbc",
             "contrast": "black"
         }, {
             "strength": 200,
             "hex": "#ffab91",
             "contrast": "black"
         }, {
             "strength": 300,
             "hex": "#ff8a65",
             "contrast": "black"
         }, {
             "strength": 400,
             "hex": "#ff7043",
             "contrast": "black"
         }, {
             "strength": 500,
             "hex": "#ff5722",
             "contrast": "white"
         }, {
             "strength": 600,
             "hex": "#f4511e",
             "contrast": "white"
         }, {
             "strength": 700,
             "hex": "#e64a19",
             "contrast": "white"
         }, {
             "strength": 800,
             "hex": "#d84315",
             "contrast": "white"
         }, {
             "strength": 900,
             "hex": "#bf360c",
             "contrast": "white"
         }, {
             "strength": "A100",
             "hex": "#ff9e80",
             "contrast": "black"
         }, {
             "strength": "A200",
             "hex": "#ff6e40",
             "contrast": "black"
         }, {
             "strength": "A400",
             "hex": "#ff3d00",
             "contrast": "white"
         }, {
             "strength": "A700",
             "hex": "#dd2c00",
             "contrast": "white"
         }]
     }, {
         "name": "brown",
         "key": "brown",
         "android": "brown",
         "default": {
             "strength": 500,
             "hex": "#795548",
             "contrast": "white"
         },
         "shades": [{
             "strength": 50,
             "hex": "#efebe9",
             "contrast": "black"
         }, {
             "strength": 100,
             "hex": "#d7ccc8",
             "contrast": "black"
         }, {
             "strength": 200,
             "hex": "#bcaaa4",
             "contrast": "black"
         }, {
             "strength": 300,
             "hex": "#a1887f",
             "contrast": "white"
         }, {
             "strength": 400,
             "hex": "#8d6e63",
             "contrast": "white"
         }, {
             "strength": 500,
             "hex": "#795548",
             "contrast": "white"
         }, {
             "strength": 600,
             "hex": "#6d4c41",
             "contrast": "white"
         }, {
             "strength": 700,
             "hex": "#5d4037",
             "contrast": "white"
         }, {
             "strength": 800,
             "hex": "#4e342e",
             "contrast": "white"
         }, {
             "strength": 900,
             "hex": "#3e2723",
             "contrast": "white"
         }]
     }, {
         "name": "grey",
         "key": "grey",
         "android": "grey",
         "default": {
             "strength": 500,
             "hex": "#9e9e9e",
             "contrast": "black"
         },
         "shades": [{
             "strength": 50,
             "hex": "#fafafa",
             "contrast": "black"
         }, {
             "strength": 100,
             "hex": "#f5f5f5",
             "contrast": "black"
         }, {
             "strength": 200,
             "hex": "#eeeeee",
             "contrast": "black"
         }, {
             "strength": 300,
             "hex": "#e0e0e0",
             "contrast": "black"
         }, {
             "strength": 400,
             "hex": "#bdbdbd",
             "contrast": "black"
         }, {
             "strength": 500,
             "hex": "#9e9e9e",
             "contrast": "black"
         }, {
             "strength": 600,
             "hex": "#757575",
             "contrast": "white"
         }, {
             "strength": 700,
             "hex": "#616161",
             "contrast": "white"
         }, {
             "strength": 800,
             "hex": "#424242",
             "contrast": "white"
         }, {
             "strength": 900,
             "hex": "#212121",
             "contrast": "white"
         }]
     }, {
         "name": "blue grey",
         "key": "blue-grey",
         "android": "blue_grey",
         "default": {
             "strength": 500,
             "hex": "#607d8b",
             "contrast": "white"
         },
         "shades": [{
             "strength": 50,
             "hex": "#eceff1",
             "contrast": "black"
         }, {
             "strength": 100,
             "hex": "#cfd8dc",
             "contrast": "black"
         }, {
             "strength": 200,
             "hex": "#b0bec5",
             "contrast": "black"
         }, {
             "strength": 300,
             "hex": "#90a4ae",
             "contrast": "black"
         }, {
             "strength": 400,
             "hex": "#78909c",
             "contrast": "white"
         }, {
             "strength": 500,
             "hex": "#607d8b",
             "contrast": "white"
         }, {
             "strength": 600,
             "hex": "#546e7a",
             "contrast": "white"
         }, {
             "strength": 700,
             "hex": "#455a64",
             "contrast": "white"
         }, {
             "strength": 800,
             "hex": "#37474f",
             "contrast": "white"
         }, {
             "strength": 900,
             "hex": "#263238",
             "contrast": "white"
         }]
     }]
 }
 */

// const ex = {
//     colors: {
//         transparent: "transparent",    
//     },
//     fonts: {
//         body: "Segoe UI",
//         heading: "Montserrat"
//     },
//     fontSizes: {
//         xs: "12px",
//         sm: "14px",
//         md: "16px",
//         lg: "18px",
//         xl: "20px",
//         "2xl": "24px",
//         "3xl": "28px",
//         "4xl": "36px",
//         "5xl": "48px",
//         "6xl": "64px"
//     },
//     fontWeights: {
//         normal: 400,
//         medium: 500,
//         bold: 700
//     },
//     lineHeights: {
//         normal: "normal",
//         shorter: "1.25",
//         short: "1.375",
//         base: "1.5",
//         tall: "1.625",
//         taller: "2",
//     },
//     letterSpacings: {
//         tighter: "-0.05em",
//         tight: "-0.025em",
//         normal: "0",
//         wide: "0.025em",
//         wider: "0.05em",
//         widest: "0.1em",
//     },
//     breakpoints: ["30em", "48em", "62em", "80em"],
//     sizes: {
//         full: "100%",
//         "3xs": "14rem",
//         "2xs": "16rem",
//         xs: "20rem",
//         sm: "24rem",
//         md: "28rem",
//         lg: "32rem",
//         xl: "36rem",
//         "2xl": "42rem",
//         "3xl": "48rem",
//         "4xl": "56rem",
//         "5xl": "64rem",
//         "6xl": "72rem",
//       },
//     space: {
//         px: "1px",
//         "0": "0",
//         "1": "0.25rem",
//         "2": "0.5rem",
//         "3": "0.75rem",
//         "4": "1rem",
//         "5": "1.25rem",
//         "6": "1.5rem",
//         "8": "2rem",
//         "10": "2.5rem",
//         "12": "3rem",
//         "16": "4rem",
//         "20": "5rem",
//         "24": "6rem",
//         "32": "8rem",
//         "40": "10rem",
//         "48": "12rem",
//         "56": "14rem",
//         "64": "16rem",
//     },
//     zIndices: {
//         hide: -1,
//         auto: "auto",
//         base: 0,
//         docked: 10,
//         dropdown: 1000,
//         sticky: 1100,
//         banner: 1200,
//         overlay: 1300,
//         modal: 1400,
//         popover: 1500,
//         skipLink: 1600,
//         toast: 1700,
//         tooltip: 1800,
//     },
// }