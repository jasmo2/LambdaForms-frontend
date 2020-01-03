import React, { useState, forwardRef } from 'react'
import { Button, Avatar } from '@material-ui/core'

import GatsbyLink from 'gatsby-link'

const CustomRouterLink = forwardRef<any, BaseLinkProps>((props, ref) => {
  console.log('TCL: CustomRouterLink -> props', props)
  return (
    <div ref={ref} style={{ flexGrow: 1 }}>
      <GatsbyLink {...props} />
    </div>
  )
})

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  activeClassName,
  children,
  className,
  to
}) => {
  const [btnRef, setBtnRef] = useState(null) as any
  return (
    <Button ref={ref => setBtnRef(ref)} className={className}>
      <CustomRouterLink
        activeClassName={activeClassName}
        ref={btnRef}
        to={to}
      />
      {children}
    </Button>
  )
}

export const AvatarLink: React.FC<AvatarLinkProps> = ({
  children,
  className,
  src,
  to
}) => {
  const [cRef, setCRef] = useState(null) as any
  return (
    <Avatar
      alt="Person"
      className={className}
      ref={ref => setCRef(ref)}
      src={src}>
      <CustomRouterLink ref={cRef} to={to} />
      {children}
    </Avatar>
  )
}

interface BaseLinkProps {
  activeClassName?: string
  to: string
}

interface CustomRouterLinkProps {
  children?: any
  className: string
}

interface ButtonLinkProps extends CustomRouterLinkProps, BaseLinkProps {}

interface AvatarLinkProps extends CustomRouterLinkProps, BaseLinkProps {
  alt: string
  src: string
}
