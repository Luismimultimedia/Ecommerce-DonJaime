import { title } from 'process'
import React, { FC } from 'react'

// styled
import {
    StyledProductCard,
    StyledImageProductCard,
    StyledContainerInfo,
    StyledTitleProduct,
    StyledDescriptionProduct,
    StyledPriceProduct,
} from "./ProductCard.styled"

import ProductQuantity from '../ProductQuantity'

type ProductCardProps = {
    variant: string;
    img: string;
    title: string;
    description: string;
    price: string;
    quantity: number;
    measure: string;
    onAdd: () => void;
    onSubstract: () => void;
}

const ProductCard: FC<ProductCardProps> = ({
    variant,
    img,
    title,
    description,
    price,
    quantity,
    measure,
    onAdd,
    onSubstract,
}) => {
    return (
        <StyledProductCard variant="lg">
            <StyledImageProductCard
                imgSrc={img}
                imgAlt="Imagen del producto"
            />
            <StyledContainerInfo>
                <StyledTitleProduct
                    variant="titleCard"
                    text={title}
                />
                <StyledDescriptionProduct
                    variant="descriptionCard"
                    text={description}
                />
                <div className="flex flex-row space-x-10 items-center md:flex-col md:space-x-0 md:items-start">
                    <StyledPriceProduct
                        variant="priceCard"
                        text={price}
                    />
                    <ProductQuantity
                        value={quantity}
                        measure={measure}
                        onAdd={onAdd}
                        onSubstract={onSubstract}
                    />
                </div>
            </StyledContainerInfo>
        </StyledProductCard>
    )
}

export default ProductCard
