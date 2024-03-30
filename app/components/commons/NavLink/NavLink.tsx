import React from 'react'
import cx from 'classnames'
import Link from 'next/link'
import {useRouter} from 'next/router'

type INavLink = {
  href: string
  onClick?: () => void
  children: React.ReactNode
  customClassName?: string
}

const NavLink = ({href, children, onClick, customClassName}: INavLink) => {
  const {asPath} = useRouter()

  return (
    <Link
      href={href}
      scroll={false}
      onClick={onClick}
      className={cx(
        'text-black decoration-2 underline-offset-8 hover:text-primary hover:underline',
        asPath === href ? 'font-extrabold text-primary' : '',
        customClassName
      )}
    >
      {children}
    </Link>
  )
}

export default NavLink
