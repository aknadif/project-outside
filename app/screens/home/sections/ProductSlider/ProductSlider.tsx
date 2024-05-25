import React from 'react'
import cx from 'classnames'
import {Autoplay, Navigation} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
import {HiChevronRight, HiChevronLeft} from 'react-icons/hi2'

import {CustomImage} from '@/app/components/commons'
import styles from './ProductSlider.module.css'
import {ICHomeSlider1, ICHomeSlider2, ICHomeSlider3} from '@/app/assets/images'
import useWindowDimensions from '@/app/hooks/useWindowDimension'

const ProductSlider = () => {
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
      title: 'Slide 1',
      src: ICHomeSlider1
    },
    {
      id: 2,
      title: 'Slide 2',
      src: ICHomeSlider2
    },
    {
      id: 3,
      title: 'Slide 3',
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
            <div className={cx('relative h-[570px] overflow-hidden', 'md:flex md:h-[510px]', 'xl:h-[89vh]')}>
              <CustomImage src={item.src} alt={item.title} />
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

export default ProductSlider
