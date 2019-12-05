import React from "react"
import { Box, useToast, Button, useColorMode } from '@chakra-ui/core'

// https://codesandbox.io/s/priceless-goldstine-0pklw

export default ({ title, description, status, bg, color, isDisabled }) => {
    let toast = useToast()
    const { colorMode } = useColorMode()

    return (
    <Box p={ 4 }>
        <Button 
            onClick={() => {
                toast({
                    title,
                    description,
                    status,
                    duration: 4000
                })
            }}
            borderWidth={ colorMode === "light" ? "0px" : "2px" }
            borderColor={ color }
            borderStyle="solid"
            color={ color }
            backgroundColor={ bg }
            rounded="lg"
            overflow="hidden" 
            _hover={ colorMode === "light" ? { boxShadow: "0px 3px 10px #212121dd" } : { boxShadow: "" } } 
            boxShadow={ colorMode === "light" ? "0px 3px 20px #212121dd" : "0" }
            textDecoration="none"
            isDisabled={ isDisabled }
        >
            Evaluar
        </Button>
    </Box>)
}