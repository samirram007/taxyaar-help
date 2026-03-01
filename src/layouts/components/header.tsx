import React from 'react'
import HeaderComponent from './HeaderComponent'

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  fixed?: boolean
  ref?: React.Ref<HTMLElement>
}

export const Header = ({
  className,
  fixed,
  children,
  ...props
}: HeaderProps) => {
  React.useEffect(() => {
    const onScroll = () => {
      // Handle scroll event
    }

    // Add scroll listener to the body
    document.addEventListener('scroll', onScroll, { passive: true })

    // Clean up the event listener on unmount
    return () => document.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <HeaderComponent {...props} />
   
  )
}

Header.displayName = 'Header'
