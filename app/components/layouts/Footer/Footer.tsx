import cx from 'classnames'
import {HiEnvelope, HiPhone} from 'react-icons/hi2'

import {NavLink} from '@/app/components/commons'

const listNavbarMenu = [
  {id: 1, text: 'Home', href: '#home-slider'},
  {id: 3, text: 'About', href: '#about-us'},
  {id: 4, text: 'Product', href: '#our-product'},
  {id: 2, text: 'Portofolio', href: '#portofolio'}
]

const Footer = () => {
  return (
    <div className={cx('bg-secondary px-[10vw] pb-4 pt-10 text-black')}>
      <div className={cx('grid grid-cols-4 gap-4 pb-20')}>
        <div>
          <span className={cx('text-sm font-semibold')}>Name Project</span>
          <ul className={cx('list-none ps-2 pt-2')}>
            <li key='1' className={cx('pt-1')}>
              <span className={cx('text-xs')}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, nesciunt?
              </span>
            </li>
            <li key='2' className={cx('flex items-start justify-start gap-2 pt-3')}>
              <HiEnvelope className={cx('mt-[1px]')} />
              <span className={cx('text-xs')}>nameproject@email.com</span>
            </li>
            <li key='3' className={cx('flex items-start justify-start gap-2 pt-3')}>
              <HiPhone className={cx('mt-[1px]')} />
              <span className={cx('text-xs')}>+62 82352357217</span>
            </li>
          </ul>
        </div>
        <div>
          <span className={cx('text-sm font-semibold')}>Discover</span>
          <ul className={cx('list-none ps-2 pt-2')}>
            <li key='4' className={cx('pt-1')}>
              <span className={cx('text-xs')}>Where</span>
            </li>
            <li key='5' className={cx('pt-1')}>
              <span className={cx('text-xs')}>Out of Where</span>
            </li>
            <li key='6' className={cx('pt-1')}>
              <span className={cx('text-xs')}>Unknown Where</span>
            </li>
          </ul>
        </div>
        <div>
          <span className={cx('text-sm font-semibold')}>Quick Links</span>
          <ul className={cx('list-none ps-2 pt-2')}>
            {listNavbarMenu.map((item, index) => {
              return (
                <li key={index} className={cx('pt-1')}>
                  <NavLink key={index} href={item.href} customClassName={cx('text-xs decoration-0')}>
                    {item.text}
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </div>
        <div></div>
      </div>
      <div className={cx('flex items-center justify-between')}>
        <span className={cx('text-xs')}>Copyright © 2024 Name Project. All Right Reserved</span>
        <span className={cx('text-sm font-semibold')}>Name Project</span>
        <span className={cx('text-xs')}>Icon</span>
      </div>
    </div>
  )
}

export default Footer
