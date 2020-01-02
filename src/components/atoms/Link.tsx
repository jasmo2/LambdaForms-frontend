import React, { useState, forwardRef } from 'react'
import { Button } from '@material-ui/core'

import GatsbyLink from 'gatsby-link'

interface CustomRouterLinkProps {
  activeClassName: string
  to: string
}

interface LinkProps extends CustomRouterLinkProps {
  children: any
  className: string
}
const CustomRouterLink = forwardRef<any, CustomRouterLinkProps>(
  (props, ref) => {
    console.log('TCL: CustomRouterLink -> props', props)
    return (
      <div ref={ref} style={{ flexGrow: 1 }}>
        {/* <RouterLink {...props} /> */}
        <GatsbyLink {...props} />
      </div>
    )
  }
)

const Link: React.FC<LinkProps> = ({
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

export default Link
