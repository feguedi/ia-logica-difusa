import React from 'react'
import { Checkbox, Tooltip } from '@chakra-ui/core'

export default ({ nombre, key, descripcion }) => {
    let propsTooltip = { 
        placement: "right-end",
        label: descripcion
    }

    if (descripcion)
        return (
            <Checkbox value={ key } key={ key } rounded="xl">
                <Tooltip hasArrow { ...propsTooltip }>
                    { nombre }
                </Tooltip>
            </Checkbox>
        )

    return (
        <Checkbox value={ key } key={ key } rounded="xl">
            { nombre }
        </Checkbox>
    )
}