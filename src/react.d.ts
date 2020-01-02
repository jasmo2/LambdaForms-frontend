import { RefForwardingComponent, ComponentType, ClassAttributes } from 'react'

export function forwardRef<T, P = {}>(
  Component: RefForwardingComponent<T, P>
): ComponentType<P & ClassAttributes<T>>
