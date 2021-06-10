import { getDomainLocale } from 'next/dist/next-server/lib/router/router'
import React, { useState } from 'react'
import { Typography, ProductCard } from '../../components'

const Example = () => {

    const [value, setValue] = useState(0);
    const [measure, setMeasure] = useState("Lb");

    const onAdd = () => {
        setValue(value + 1);
    }

    const onSubstract = () => {
        if (value > 0) {
            setValue(value - 1);
        }
    }

    return (
        <div className="flex flex-col">
            <ProductCard
                variant="sm"
                img={"/muslo@2x.png"}
                title={"Muslo"}
                description={"1 Libra"}
                price={"$8.000"}
                quantity={value}
                measure={measure}
                onAdd={onAdd}
                onSubstract={onSubstract}
            />
        </div>
    )
}

export default Example
