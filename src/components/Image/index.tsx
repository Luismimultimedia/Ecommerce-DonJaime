import React, { FC } from 'react'

type ImageProps = {
    imgSrc: string;
    imgAlt: string;
}

export const Image: FC<ImageProps> = ({
    imgSrc,
    imgAlt,
}) => {
    return (
        <img src={imgSrc} alt={imgAlt}/>
    )
}

export default Image
