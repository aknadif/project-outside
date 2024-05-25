import cx from 'classnames'
import Link from 'next/link'

import {Button} from '@/app/components/commons'

const About = () => {
  return (
    <div className={cx('flex h-[50vh] flex-col items-center justify-center gap-5 py-8 text-black')}>
      <span className={cx('text-4xl font-extrabold leading-none tracking-tight')}>
        Rooted in Nature, Nurturing Communities
      </span>
      <span className={cx('w-3/4 text-center text-base leading-tight tracking-tight')}>
        At Name Project, we're dedicated to sustainable agriculture and providing high-quality produce to our community.
        With a focus on organic farming practices, we strive to promote environmental stewardship while delivering
        delicious, nutritious food straight from our fields to your table.
      </span>
      <Link href='/about-us'>
        <Button type='button' variant='medium' classType='outline-primary'>
          Read More ...
        </Button>
      </Link>
    </div>
  )
}

export default About
