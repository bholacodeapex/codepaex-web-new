
import { HeaderClient } from './Component.client'
import React from 'react'
// import "./Header.css";

// import { getCachedGlobal } from '@/utilities/getGlobals';

export async function Header() {
    // const header: any = await getCachedGlobal('header', 1)()

    return <HeaderClient header={[]} />
}
