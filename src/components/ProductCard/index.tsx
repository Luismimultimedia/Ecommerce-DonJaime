import { title } from 'process'
import React, { FC } from 'react'
import Image from '../Image'
import ProductQuantity from '../ProductQuantity'
import Typography from '../Typography'

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
        <div className="flex flex-col items-center justify-center w-60 p-4 shadow space-y-4 rounded-lg">
            <Image
                imgSrc={img}
                imgAlt="Imagen del producto"
            />
            <div className="flex flex-col">
                <Typography
                    variant="titleCard"
                    text={title}
                />
                <Typography
                    variant="descriptionCard"
                    text={description}
                />
                <Typography
                    variant="priceCard"
                    text={price}
                />
            </div>
            <ProductQuantity
                value={quantity}
                measure={measure}
                onAdd={onAdd}
                onSubstract={onSubstract}
            />
        </div>
    )
}

export default ProductCard
