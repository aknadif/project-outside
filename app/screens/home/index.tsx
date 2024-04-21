import cx from 'classnames'
import {HomeSlider, About, Product, Portofolio, Contact} from './sections'

const Home = () => {
  return (
    <div className={cx('bg-secondary/20 3xl:flex 3xl:justify-center')} id='home-slider'>
      <div className={cx('max-w-screen-3xl overflow-x-hidden pt-20')}>
        <HomeSlider />
        <div className={cx('px-[10vw]')}>
          <About />
          <Product />
          <Portofolio />
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default Home
