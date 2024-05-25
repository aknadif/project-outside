import React from 'react'
import cx from 'classnames'
import {useRouter} from 'next/router'
import {HiMiniArrowLongRight} from 'react-icons/hi2'

import {Button} from '@/app/components/commons'

type Props = {
  url?: string
  title: string
  tagLine: string
  isOdd: boolean
}

const CardCategory = ({url, title, tagLine, isOdd = false}: Props) => {
  const router = useRouter()
  return (
    <div
      className={cx(
        'relative h-[14rem] w-[24rem] max-w-sm rounded-lg shadow',
        isOdd ? 'bg-primary/20' : 'bg-secondary/20'
      )}
    >
      <div className={cx('flex')}>
        <div className={cx('w-4/5')}></div>
        <div className={cx('h-[14rem] w-1/5 rounded-r-lg ', isOdd ? 'bg-primary' : 'bg-secondary')}></div>
      </div>
      {/* Content */}
      <div className={cx('absolute left-[10%] top-[20%]')}>
        <div className={cx('flex flex-col gap-4')}>
          <span className={cx('text-sm font-extrabold leading-none tracking-tight text-primary')}>{tagLine}</span>
          <span className={cx('text-3xl font-extrabold leading-none tracking-tight text-black')}>{title}</span>
        </div>
        <Button
          onClick={() => {
            router.push(url)
          }}
          customClassName={cx('mt-7')}
          type='button'
          variant='medium'
          classType='primary'
          isRounded={false}
        >
          <div className={cx('flex gap-2')}>
            Shop Now <HiMiniArrowLongRight className={cx('text-2xl')} />
          </div>
        </Button>
      </div>
    </div>
  )
}

export default CardCategory
