import React, { FC } from 'react'
import Link from 'next/link'

// Type
import { itemType } from '../../types/itemsMenu.type'

// styled
import { TabStyled } from "./Tabs.styled"

type TabsProps = {
    key: number;
    item: itemType;
}

const Tabs: FC<TabsProps> = ({key, item}) => {
    return (
        <li key={key}>
            <TabStyled href={item.to}>{item.label}</TabStyled>
        </li>
    )
}

export default Tabs
