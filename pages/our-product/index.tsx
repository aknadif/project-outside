import cx from 'classnames'
import type {NextPage} from 'next'

const Product: NextPage = () => {
  return (
    <div>
      <div className={cx('bg-secondary/20 pt-20 3xl:flex 3xl:justify-center')}>
        <div
          className={cx(
            'flex min-h-[90vh] max-w-screen-3xl flex-col items-center justify-center gap-2 overflow-x-hidden bg-secondary/40 py-4 text-black'
          )}
        >
          Product
        </div>
      </div>
    </div>
  )
}

export default Product
