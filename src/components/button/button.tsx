import { ComponentPropsWithoutRef, PropsWithChildren } from 'react'
import React from 'react'

export function Button({ ...rest }: ComponentPropsWithoutRef<'button'>) {
  return <button {...rest} />
}
