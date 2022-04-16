import * as React from 'react'
import {resetCss} from 'design-system/resetCss'
import {theme} from '../stitches.config'
import './layout.css'

interface LayoutProps {
  children?: React.ReactNode,
}

export const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  resetCss()
  return <div className={theme}>{props.children}</div>
}
