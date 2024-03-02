import React, {useState} from 'react'
import Image from 'next/image'
import cx from 'classnames'
import Link from 'next/link'
import {useRouter} from 'next/router'

import {Button, NavLink} from '@/app/components/commons'

import {ICClose, ICHamburgerMenu} from '@/app/assets/images'

const listNavbarMenu = [
  {id: 1, text: 'Home', href: '#home-slider'},
  {id: 3, text: 'Tentang', href: '#about-us'},
  {id: 4, text: 'Produk', href: '#our-product'},
  {id: 2, text: 'Portofolio', href: '#portofolio'}
]

const Navbar = () => {
  const {asPath} = useRouter()
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [showModal, setShowModal] = useState(false)

  return (
    <nav
      className={cx(
        'fixed w-full 4xl:flex 4xl:justify-center bg-white/1 backdrop-blur-sm xl:bg-white/20 px-5 py-6 z-50',
        'md:px-14',
        'xl:px-24'
      )}
    >
      <div className={cx('max-w-screen-3xl 4xl:gap-x-12 flex items-center justify-end')}>
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
            'absolute top-0 left-0 right-0 xl:hidden',
            'pt-20 px-5 md:px-14 pb-5 bg-[#F7F5FF]',
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
                customClassName='w-full border-b border-[#B7A4FF] py-4 first:-mt-4'
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
          <div className={cx('xl:hidden z-50')} onClick={() => setIsOpenMenu(!isOpenMenu)}>
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
