import React from "react"
import { Box, useToast, Button } from '@chakra-ui/core'

// https://codesandbox.io/s/priceless-goldstine-0pklw

export default () => {
    let toast = useToast()

    return (
    <Box p={ 4 }>
        <Button 
            onClick={() => {
                toast({
                    title: "¿Cuenta creada?",
                    description: "Hemos creado tu cuenta",
                    status: "success",
                    duration: 4000,
                    isClosable: true
                })
            }}
        >
            Mostrar toast
        </Button>
    </Box>)
}