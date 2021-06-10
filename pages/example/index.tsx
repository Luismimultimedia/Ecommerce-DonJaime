import { getDomainLocale } from 'next/dist/next-server/lib/router/router'
import React from 'react'
import { Typography } from '../../components'

const Example = () => {
    return (
        <div className="flex flex-col">
            <Typography text={"example"} variant={"titleSection"} />
            <Typography text={"example"} variant={"descriptionSection"} />
            <Typography text={"example"} variant={"titleCard"} />
            <Typography text={"example"} variant={"descriptionCard"} />
            <Typography text={"example"} variant={"descriptionCardSm"} />
            <Typography text={"example"} variant={"priceCard"} />
            <Typography text={"example"} variant={"buttonCard"} />
        </div>
    )
}

export default Example
