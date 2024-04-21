import cx from 'classnames'
import {Button, CardItem} from '@/app/components/commons'
import {ICHomeSlider1} from '@/app/assets/images'

const Product = () => {
  return (
    <div className={cx('min-h-[100vh] py-8')}>
      <span className={cx('text-4xl font-extrabold leading-none tracking-tight')}>Product</span>
      <div className={cx('flex flex-col items-center justify-center gap-2 py-4 text-black')}>
        <span className={cx('text-4xl font-extrabold leading-none tracking-tight')}>
        Our Products
        </span>
        <span className={cx('w-3/4 text-center text-base leading-tight tracking-tight text-black/70')}>
        We believe in responsible farming methods that prioritize soil health, biodiversity, and water conservation. Learn more about our sustainable practices and how we're working towards a more resilient and regenerative agricultural future.
        </span>
        <div className={cx('flex flex-wrap items-center justify-center gap-4 py-8')}>
          {[...Array(6)].map((_, index) => (
            <CardItem key={index} src={ICHomeSlider1}  />
          ))}
        </div>
        <Button type='button' variant='medium' classType='outline-primary'>
        Read More ...
        </Button>
      </div>
    </div>
  )
}

export default Product
