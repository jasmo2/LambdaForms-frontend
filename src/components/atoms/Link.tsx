import React, { useState, forwardRef } from 'react'
import { Button, Avatar } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import { Link } from 'gatsby-theme-material-ui'
import clsx from 'clsx'

const CustomLink = withStyles({
  root: {
    flex: 1
  }
})(Link)

const CustomRouterLink = forwardRef<any, ButtonLinkProps>((props, ref) => {
  const { children, ...rest } = props
  return <CustomLink {...rest}>{children}</CustomLink>
})

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  activeClassName,
  children,
  className,
  to
}) => {
  const btnRef = React.createRef()
  return (
    <Button
      component={CustomRouterLink}
      activeClassName={activeClassName}
      className={className}
      ref={btnRef}
      to={to}>
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
  className?: string
}

interface ButtonLinkProps extends CustomRouterLinkProps, BaseLinkProps {}

interface AvatarLinkProps extends CustomRouterLinkProps, BaseLinkProps {
  alt: string
  src: string
}
