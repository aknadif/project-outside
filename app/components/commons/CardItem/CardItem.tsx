import React from 'react'
import cx from 'classnames'
import {Card, CustomImage} from '@/app/components/commons'

type Props = {
  position: string
  src: string
  alt: string
}

const CardItem = ({position = 'vertical', src = '', alt = ''}: Props) => {
  return (
    <Card>
      {position === 'vertical' ? (
        <div className={cx('overflow-hidden rounded-t-lg')}>
          <CustomImage src={src} alt={alt} />
          <div className={cx('p-5')}>
            <h5 className={cx('mb-2 text-lg font-bold tracking-tight text-black')}>
              Noteworthy technology acquisitions 2021
            </h5>
            <p className={cx('mb-3 text-sm font-normal text-black/70')}>
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
          </div>
        </div>
      ) : (
        <div
          className={cx(
            'flex flex-col items-center rounded-lg border border-gray-200 bg-white shadow hover:bg-gray-100 md:max-w-xl md:flex-row'
          )}
        >
          <CustomImage
            className={cx('h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-s-lg')}
            src={src}
            alt={alt}
            width={50}
            height={200}
          />

          <div className={cx('flex flex-col justify-between p-4 leading-normal')}>
            <h5 className={cx('mb-2 text-lg font-bold tracking-tight text-black')}>
              Noteworthy technology acquisitions 2021
            </h5>
            <p className={cx('mb-3 text-sm font-normal text-black/70')}>
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
          </div>
        </div>
      )}
    </Card>
  )
}

export default CardItem
