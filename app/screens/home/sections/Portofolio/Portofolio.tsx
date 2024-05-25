import React from 'react'
import cx from 'classnames'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {Virtual, Navigation, Autoplay} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
import {HiChevronRight, HiChevronLeft} from 'react-icons/hi2'

import {Button, CardItem, CustomImage} from '@/app/components/commons'
import {ICHomeSlider2} from '@/app/assets/images'
import styles from './PortofolioSlider.module.css'

const Product = () => {
  const router = useRouter()
  const [swiperRef, setSwiperRef] = React.useState(null)
  const [slides, setSlides] = React.useState(Array.from({length: 500}).map((_, index) => `Slide ${index + 1}`))

  return (
    <div className={cx('min-h-[100vh] py-8')}>
      <span className={cx('text-4xl font-extrabold leading-none tracking-tight')}>Portofolio</span>
      <div className={cx('flex flex-col items-center justify-center gap-2 py-4 text-black')}>
        <span className={cx('text-4xl font-extrabold leading-none tracking-tight')}>Our Farming Practices</span>
        <span className={cx('w-3/4 text-center text-base leading-tight tracking-tight text-black/70')}>
          Explore our portfolio to discover the wide variety of crops we cultivate. From vibrant heirloom tomatoes to
          crisp salad greens, each product reflects our commitment to freshness and flavor.
        </span>
        <div className={cx('relative w-[100%] py-4')}>
          <Swiper
            modules={[Virtual, Navigation, Autoplay]}
            onSwiper={setSwiperRef}
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={30}
            navigation={true}
            loop={true}
            speed={500}
            autoplay={{delay: 3000}}
            virtual
            navigation={{
              nextEl: '.next-button',
              prevEl: '.previous-button'
            }}
          >
            {slides.map((slideContent, index) => (
              <SwiperSlide key={slideContent} virtualIndex={index}>
                <div
                  className={cx(
                    'cursor-pointer overflow-hidden rounded-2xl brightness-50 transition hover:brightness-100'
                  )}
                >
                  <Link href={`/portofolio/${index}`}>
                    <div className='transition hover:scale-110'>
                      <CustomImage src={ICHomeSlider2} alt={'img'} />
                    </div>
                  </Link>
                </div>
                <div className={cx('pt-4 text-center text-xl font-semibold leading-none tracking-tight')}>
                  {slideContent}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={cx('previous-button backdrop-blur-sm', styles.previous)}>
            <HiChevronLeft />
          </div>

          <div className={cx('next-button backdrop-blur-sm', styles.next)}>
            <HiChevronRight />
          </div>
        </div>
        {router.pathname.split('/')[1] !== 'portofolio' && (
          <Link href={{pathname: '/portofolio'}}>
            <Button type='button' variant='medium' classType='outline-primary'>
              Read More ...
            </Button>
          </Link>
        )}
      </div>
    </div>
  )
}

export default Product
