import React, {useState} from 'react'
import Image from 'next/image'
import cx from 'classnames'
import Link from 'next/link'
import {useRouter} from 'next/router'

import {Button, NavLink} from '@/app/components/commons'

import {ICClose, ICHamburgerMenu} from '@/app/assets/images'

const listNavbarMenu = [
  {id: 1, text: 'Home', href: '#home-slider'},
  {id: 3, text: 'About', href: '#about-us'},
  {id: 4, text: 'Product', href: '#our-product'},
  {id: 2, text: 'Portofolio', href: '#portofolio'}
]

const Navbar = () => {
  const {asPath} = useRouter()
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [showModal, setShowModal] = useState(false)

  return (
    <nav
      className={cx(
        'bg-white/1 fixed z-50 w-full px-5 py-6 backdrop-blur-sm xl:bg-white/20 4xl:flex 4xl:justify-center',
        'md:px-14',
        'xl:px-24'
      )}
    >
      <div className={cx('flex max-w-screen-3xl items-center justify-end 4xl:gap-x-12')}>
        <div className={cx('z-50')}></div>

        {/* Show navlink in desktop version  */}
        {asPath !== '/privacy-policies' && (
          <div className={cx('hidden xl:flex xl:items-center xl:gap-12')}>
            {listNavbarMenu.map((menu) => {
              return (
                <NavLink key={menu.id} href={menu.href}>
                  {menu.text}
                </NavLink>
              )
            })}
          </div>
        )}

        <div className={cx('hidden xl:block')}>
          {/* <Button type='button' variant='medium' classType='primary' onClick={() => setShowModal(true)}>
            Gabung Mitra
          </Button> */}
        </div>

        {/* Show navlink in mobile and tablet version */}
        <div
          className={cx(
            'flex flex-col items-center rounded-b-3xl',
            'absolute left-0 right-0 top-0 xl:hidden',
            'bg-[#F7F5FF] px-5 pb-5 pt-20 md:px-14',
            'transition-all duration-500 ease-out',
            isOpenMenu ? 'translate-y-0' : '-translate-y-full'
          )}
        >
          {listNavbarMenu.map((menu) => {
            return (
              <NavLink
                key={menu.id}
                href={menu.href}
                onClick={() => setIsOpenMenu(false)}
                customClassName={cx('w-full border-b border-[#B7A4FF] py-4 first:-mt-4')}
              >
                {menu.text}
              </NavLink>
            )
          })}
          <div className={cx('mt-8 w-full')}>
            {/* <Button type='button' variant='medium' classType='primary' onClick={() => {}} customClassName={'w-full'}>
              Gabung Mitra
            </Button> */}
          </div>
        </div>

        {/* Show hamburger in mobile and tablet version */}
        {asPath !== '/privacy-policies' && (
          <div className={cx('z-50 xl:hidden')} onClick={() => setIsOpenMenu(!isOpenMenu)}>
            {!isOpenMenu && <Image src={ICHamburgerMenu} alt='ic-hamburger-menu' width='24' height='24' />}

            {isOpenMenu && <Image src={ICClose} alt='ic-close' width='20' height='20' />}
          </div>
        )}
      </div>
      {/* <ModalContactUs open={showModal} setModal={() => setShowModal(false)} /> */}
    </nav>
  )
}

export default Navbar
