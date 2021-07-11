import React, { FC } from 'react'
import shoppingcar from "../../assets/images/shoppingcar.svg"

// Components
import Image from "../Image"
import Tabs from '../Tabs'

// Types
import { itemType } from "../../types/itemsMenu.type"

// style
import {
    NavStyled,
    LogoContainerStyled,
    ItemsContainerStyled,
    UlContainerStyled
} from "./Header.styled"
import Button from '../Button'

type HeaderProps = {
    logo: string;
    itemsMenu: itemType[];
}

const Header: FC<HeaderProps> = ({
    logo,
    itemsMenu
}) => {
    return (
        <NavStyled>
            <LogoContainerStyled>
                {logo && <Image className="" imgSrc={logo} imgAlt="logo" />}
            </LogoContainerStyled>
            <ItemsContainerStyled>
                {itemsMenu &&
                    <UlContainerStyled>
                        {
                            itemsMenu.map((item, key) => (
                                <Tabs key={key} item={item} />
                            ))
                        }
                        <Button size={"sm"} onClick={() => {}} variant="secondary" startIcon={shoppingcar} />
                    </UlContainerStyled>
                }
            </ItemsContainerStyled>
        </NavStyled>
    )
}

export default Header
