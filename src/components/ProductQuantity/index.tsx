import React, { FC } from 'react'

// components
import Button from '../Button'
import Typography from '../Typography'

// images
import iconPlus from '../../assets/images/icon-plus.svg'
import iconSubstract from '../../assets/images/icon-subsctract.svg'

type ProductQuantityProps = {
    value: number;
    measure: string;
    onAdd: () => void;
    onSubstract: () => void;
}

const ProductQuantity: FC<ProductQuantityProps> = ({
    value,
    measure,
    onAdd,
    onSubstract
}) => {
    return (
        <div className="flex items-center justify-between w-full">
            <Button
                variant={"iconButton"}
                endIcon={iconSubstract}
                onClick={onSubstract}
            />
            <div className="flex items-center space-x-2">
                <Typography
                    variant={"titleProductCard"}
                    text={value.toString()}
                />
                <Typography
                    variant={"titleProductCard"}
                    text={` ${measure}`}
                />
            </div>
            <Button
                variant={"iconButton"}
                startIcon={iconPlus}
                onClick={onAdd}
            />
        </div>
    )
}

export default ProductQuantity
