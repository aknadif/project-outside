import cx from 'classnames'
import {Button, CardItem} from '@/app/components/commons'
import {ICHomeSlider1} from '@/app/assets/images'

const Product = () => {
  return (
    <div className={cx('h-[100vh] py-8')}>
      <span className={cx('text-4xl font-extrabold leading-none tracking-tight')}>Product</span>
      <div className={cx('flex flex-col items-center justify-center gap-2 py-4 text-black')}>
        <span className={cx('text-4xl font-extrabold leading-none tracking-tight')}>
          Lorem ipsum dolor, sit amet consectetur
        </span>
        <span className={cx('w-3/4 text-center text-base leading-tight tracking-tight text-black/70')}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus ad quidem reprehenderit
        </span>
        <div className={cx('flex items-center justify-center gap-4 py-8')}>
          {[...Array(4)].map((_, index) => (
            <CardItem key={index} src={ICHomeSlider1} />
          ))}
        </div>
        <Button type='button' variant='medium' classType='outline-primary'>
          Selengkapnya ...
        </Button>
      </div>
    </div>
  )
}

export default Product
