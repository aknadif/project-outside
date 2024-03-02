import HomeSlider from './sections'

const Home = () => {
  return (
    <div className='3xl:flex 3xl:justify-center'>
      <div className='max-w-screen-3xl overflow-x-hidden flex justify-center items-center gap-10 pt-20'>
        <HomeSlider />
      </div>
    </div>
  )
}

export default Home
