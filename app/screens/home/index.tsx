import {HomeSlider, About, Product, Portofolio} from './sections'

const Home = () => {
  return (
    <div className='bg-secondary/20 3xl:flex 3xl:justify-center' id='home-slider'>
      <div className='max-w-screen-3xl overflow-x-hidden pt-20'>
        <HomeSlider />
        <div className='px-[10vw]'>
          <About />
          <Product />
          <Portofolio />
        </div>
      </div>
    </div>
  )
}

export default Home
