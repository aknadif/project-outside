import React, {useState} from 'react'
import cx from 'classnames'

import {Header, Footer} from '../../layouts'

type ILayout = {
  children: React.ReactNode
}

const Layout = ({children}: ILayout) => {
  return (
    <div className={cx('antialiased')}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
