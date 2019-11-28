import React from 'react'
import { useToast, Button } from '@chakra-ui/core'

const toast = useToast()

export const ToastNotificacion = props => (
    <Button onClick={() => toast({ ...props })}>
        {props.texto}
    </Button>
)