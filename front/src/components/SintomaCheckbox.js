import React from 'react'
import { useColorMode, Checkbox, Tooltip } from '@chakra-ui/core'

export default ({ name, key, description }) => {
    const { colorMode } = useColorMode()
    const bgColor = { light: "grey.50", dark: "blue grey.900" }
    const color = { light: "#000", dark: "grey.50" }

    let propsTooltip = { 
        placement: "left-end",
        label: description
    }

    if (description)
        return (
            <Tooltip hasArrow { ...propsTooltip }>
                <Checkbox value={ name } key={ key } bg={ bgColor[colorMode] } color={ color[colorMode] } />
            </Tooltip>
        )

    return <Checkbox value={ name } key={ key } bg={ bgColor[colorMode] } color={ color[colorMode] } />
}