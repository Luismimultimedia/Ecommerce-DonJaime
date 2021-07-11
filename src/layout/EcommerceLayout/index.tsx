import React, { FC, ReactNode, useState } from 'react'

// Components
import { Header } from "../../components"

// Types
import { itemType } from '../../types/itemsMenu.type'

// Styles
import logo from "../../assets/images/logo.svg"
import shoppingcar from "../../assets/images/shoppingcar.svg"

type EcommerceLayoutProps = {
    children: ReactNode
}

const EcommerceLayout: FC<EcommerceLayoutProps> = () => {

    const [items] = useState<Array<itemType>>([
        {
            label: "Inicio",
            to: "/"
        },
        {
            label: "Sobre Nosotros",
            to: "/"
        }
        ,
        {
            label: "Contactanos",
            to: "/"
        }
    ])

    return (
        <section className="w-full h-full pb-8">
            <Header
                logo={logo}
                itemsMenu={items}
                iconCarShop={shoppingcar}
                itemCar="0"
            />
        </section>
    )
}

export default EcommerceLayout
