import React, { useState } from 'react'





interface HelpCenterContextType {
    currentModule: string
    setCurrentModule: (str: string) => void
    sideBarOpen?: boolean
    setSideBarOpen?: (open: boolean) => void
    keyName: string
    headerVisible: boolean
    setHeaderVisible: (visible: boolean) => void
}

const HelpCenterContext = React.createContext<HelpCenterContextType | null>(null)

interface Props {
    children: React.ReactNode
}

export default function HelpCenterProvider({ children }: Props) {

    const [currentModule, setCurrentModule] = useState<string>("HelpCenter")
    const [sideBarOpen, setSideBarOpen] = useState<boolean>(true) 
    const [headerVisible, setHeaderVisible] = useState<boolean>(true)

    return (
        <HelpCenterContext value={{
            currentModule,
            setCurrentModule,
            sideBarOpen,
            setSideBarOpen, keyName: "HelpCenter",
            headerVisible,
            setHeaderVisible
        }}>
            {children}
        </HelpCenterContext>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useHelpCenter = () => {
    const helpCenterContext = React.useContext(HelpCenterContext)

    if (!helpCenterContext) {
        throw new Error('useHelpCenter has to be used within <HelpCenterContext>')
    }

    return helpCenterContext
}
