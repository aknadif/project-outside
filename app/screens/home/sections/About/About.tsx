import cx from 'classnames'
import {Button} from '@/app/components/commons'

const About = () => {
  return (
    <div className={cx('flex h-[50vh] flex-col items-center justify-center gap-5 py-8 text-black')}>
      <span className={cx('text-4xl font-extrabold leading-none tracking-tight')}>Lorem, ipsum dolor.</span>
      <span className={cx('w-3/4 text-center text-base leading-none tracking-tight')}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus ad quidem reprehenderit libero beatae
        incidunt ullam quasi adipisci, maxime doloremque. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Consequuntur nisi harum odit nobis maxime ea tenetur delectus nostrum eum iusto.
      </span>
      <Button type='button' variant='medium' classType='outline-primary'>
        Selengkapnya ...
      </Button>
    </div>
  )
}

export default About
