import React from 'react'
import cx from 'classnames'
import {Autoplay, Navigation} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
import {HiChevronRight, HiChevronLeft} from 'react-icons/hi2'

import {CustomImage} from '@/app/components/commons'
import styles from './HomeSlider.module.css'
import {ICHomeSlider1, ICHomeSlider2, ICHomeSlider3} from '@/app/assets/images'
import useWindowDimensions from '@/app/hooks/useWindowDimension'

const HomeSlider = () => {
  const [widthDimension, setWidthDimension] = React.useState(0)
  if (typeof window !== 'undefined') {
    const dimensions = useWindowDimensions()
    React.useEffect(() => {
      setWidthDimension(dimensions.width)
    }, [dimensions])
  }

  const listDataCourosal = [
    {
      id: 1,
      title: "Embrace nature's bounty at our farm",
      tagline: 'Fresh, Fun, Unforgettable!',
      src: ICHomeSlider1
    },
    {
      id: 2,
      title: 'Discover the essence of farm life',
      tagline: 'Genuine, Thrilling, Forever Memories!',
      src: ICHomeSlider2
    },
    {
      id: 3,
      title: 'Rooted in nature, blossoming with joy',
      tagline: 'Authentic, Exciting, Timeless!',
      src: ICHomeSlider3
    }
  ]

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      autoplay={{delay: 3000}}
      className={cx('mySwiper')}
      loop={true}
      speed={500}
      navigation={{
        nextEl: '.next-button',
        prevEl: '.previous-button'
      }}
    >
      {listDataCourosal.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <div className={cx('relative h-[570px] overflow-hidden', 'md:flex md:h-[510px]', 'xl:h-[80vh]')}>
              <div className={cx('brightness-50')}>
                <CustomImage src={item.src} alt={item.title} className={cx('!h-[500px] object-cover md:h-auto')} />
              </div>
              <h1 className={cx('absolute right-[15%] top-[25%] text-6xl font-bold text-white')}>{item.title}</h1>
              <h4 className={cx('absolute right-[15%] top-[36%] text-xl font-bold text-white')}>{item.tagline}</h4>
            </div>
          </SwiperSlide>
        )
      })}
      <div className={cx('previous-button backdrop-blur-sm', styles.previous)}>
        <HiChevronLeft />
      </div>

      <div className={cx('next-button backdrop-blur-sm', styles.next)}>
        <HiChevronRight />
      </div>
    </Swiper>
  )
}

export default HomeSlider
