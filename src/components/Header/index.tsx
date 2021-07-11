import React, { FC } from 'react'

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
    iconCarShop: string;
    itemCar: string;
}

const Header: FC<HeaderProps> = ({
    logo,
    iconCarShop,
    itemsMenu,
    itemCar,
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
                        <Button
                            size={"sm"}
                            onClick={() => { }}
                            variant="secondary"
                            startIcon={iconCarShop}
                            badge={true}
                            badgeValue={itemCar}
                            badgeColor="var(--color-primary-500)"
                        />
                    </UlContainerStyled>
                }
            </ItemsContainerStyled>
        </NavStyled>
    )
}

export default Header
