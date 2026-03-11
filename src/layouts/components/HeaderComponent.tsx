
import { ProfileDropdown } from '@/components/profile-dropdown';
import { Search } from "@/components/search";
import { ThemeSwitch } from '@/components/theme-switch';
import React from "react";
import { Header } from "./header";
import { TopNav } from "./top-nav";



const HeaderComponent: React.FC<{}> = () => {
    return (
        <Header>
            <TopNav links={topNav} />
            <div className='ml-auto flex items-center space-x-4'>
                <Search />
                <ThemeSwitch />
                <ProfileDropdown />
            </div>
        </Header>
    )
}

export default HeaderComponent

const topNav = [
    {
        title: 'Overview',
        href: 'dashboard/overview',
        isActive: true,
        disabled: false,
        visible: false
    },
    {
        title: 'Help-Center',
        href: '/dashboard/help-center',
        isActive: true,
        disabled: true,
        visible: true
    },
    {
        title: 'Customers',
        href: '/dashboard/customers',
        isActive: false,
        disabled: true,
        visible: false
    },
    {
        title: 'Products',
        href: '/dashboard/products',
        isActive: false,
        disabled: true,
        visible: false
    },
    {
        title: 'Settings',
        href: '/dashboard/settings',
        isActive: false,
        disabled: true,
        visible: false
    },
]