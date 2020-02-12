import React from "react"
import styled from "styled-components"

interface ImageProps {
    source?: any
    width?: number | string
    height?: number | string
    borderRadius?: number
}

const Image: React.SFC<ImageProps> = ({
    source,
    width = "100%",
    height = 80,
    borderRadius = 0
}) => {
    return (
        <ImageStyled
            source={source}
            width={width}
            height={height}
            borderRadius={borderRadius}
        />
    )
}

export default Image

const ImageStyled = styled.Image`
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: ${props => props.borderRadius};
`