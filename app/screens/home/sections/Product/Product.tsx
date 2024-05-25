import cx from 'classnames'
import Link from 'next/link'

import {Button, CardItem, CardCategory} from '@/app/components/commons'
import {ICHomeSlider1} from '@/app/assets/images'

const Product = () => {
  const dummyCategory = [
    {
      url: '/',
      tagLine: `Nature's Nourishing Bounty`,
      title: 'Vegetables'
    },
    {
      url: '/',
      tagLine: 'Freshness, Flavor, Fulfillment',
      title: 'Fruits'
    },
    {
      url: '/',
      tagLine: 'Delight in Diversity',
      title: 'All Foods'
    }
  ]
  return (
    <div className={cx('min-h-[100vh] py-8')}>
      <span className={cx('text-4xl font-extrabold leading-none tracking-tight')}>Product</span>
      <div className={cx('flex flex-wrap items-center justify-center gap-4 py-8')}>
        {dummyCategory.map((item, index) => (
          <Link key={index} href={`/our-product/${index}`}>
            <CardCategory key={index} isOdd={index % 2} {...item} />
          </Link>
        ))}
      </div>

      <div className={cx('flex flex-col items-center justify-center gap-2 py-4 text-black')}>
        <span className={cx('text-4xl font-extrabold leading-none tracking-tight')}>Our Products</span>
        <span className={cx('w-3/4 text-center text-base leading-tight tracking-tight text-black/70')}>
          We believe in responsible farming methods that prioritize soil health, biodiversity, and water conservation.
          Learn more about our sustainable practices and how we're working towards a more resilient and regenerative
          agricultural future.
        </span>
        <div className={cx('flex flex-wrap items-center justify-center gap-4 py-8')}>
          {[...Array(6)].map((_, index) => (
            <Link key={index} href={`/our-product/${index}`}>
              <CardItem src={ICHomeSlider1} />
            </Link>
          ))}
        </div>
        <Link href='/our-product'>
          <Button type='button' variant='medium' classType='rectangle'>
            Read More ...
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Product
