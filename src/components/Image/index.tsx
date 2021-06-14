import React, { FC } from 'react'

type ImageProps = {
    imgSrc: string;
    imgAlt: string;
    className: string;
}

export const Image: FC<ImageProps> = ({
    imgSrc,
    imgAlt,
    className
}) => {
    return (
        <img className={className} src={imgSrc} alt={imgAlt}/>
    )
}

export default Image
