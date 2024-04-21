import cx from 'classnames'
import {Portofolio, HomeSlider} from '@/app/screens/home/sections'

const PortofolioPage = () => {
  return (
    <div className={cx('bg-secondary/20 pt-20 3xl:flex 3xl:justify-center')}>
      <div
        className={cx(
          'flex min-h-[90vh] max-w-screen-3xl flex-col items-center justify-center gap-2 overflow-x-hidden bg-secondary/40 py-4 text-black'
        )}
      >
        <span className={cx('text-4xl font-extrabold leading-none tracking-tight')}>
          Jackfruit propagation using the grafting method in Banyuwangi
        </span>
        <div className={cx('flex items-center justify-center ')}>
          <div className={cx('w-[60vw] scale-90 overflow-hidden rounded-xl border-4 border-white')}>
            <HomeSlider />
          </div>
          <div className={cx('w-[30vw] rounded-xl bg-white p-6 text-sm')}>
            <span className={cx('text-2xl font-extrabold leading-none tracking-tight')}>About</span>
            <p className={cx('pt-2 indent-8')}>
              In Banyuwangi, the propagation of jackfruit trees employs the grafting method, a technique cherished for
              its efficiency and reliability. This method involves the union of two different plant tissues to create a
              new organism with desirable traits. Expert grafters carefully select a healthy rootstock, often from a
              robust jackfruit tree with desirable characteristics such as disease resistance or high fruit yield.
            </p>
            <br />
            <p className={cx('indent-8')}>
              The grafting method's popularity in Banyuwangi stems from its ability to accelerate the growth of
              jackfruit trees and maintain the desired qualities of the selected varieties. By leveraging this
              technique, farmers in Banyuwangi can efficiently propagate superior jackfruit cultivars, contributing to
              the region's agricultural prosperity.
            </p>
            <div className={cx('justify-censtter flex flex-col items-start gap-2 pt-4')}>
              <div>
                <span className={cx('text-lg font-extrabold leading-none tracking-tight')}>Place</span>
                <br />
                <p className={cx('indent-8')}>PT Budi Berjasa</p>
              </div>
              <div>
                <span className={cx('text-lg font-extrabold leading-none tracking-tight')}>Address</span>
                <br />
                <p className={cx('indent-8')}>
                  Jl. Panglima Sudirman No. 45, Kecamatan Genteng, Banyuwangi, Jawa Timur, Indonesia
                </p>
              </div>
              <div>
                <span className={cx('text-lg font-extrabold leading-none tracking-tight')}>Farm</span>
                <br />
                <p className={cx('indent-8')}>jackfruit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('px-[10vw] pt-16')}>
        <Portofolio />
      </div>
    </div>
  )
}

export default PortofolioPage
