import cx from 'classnames'

const Contact = () => {
  return (
    <>
      <div className={cx('mx-auto max-w-screen-md px-4 py-8 lg:py-16')}>
        <h2 className={cx('mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900 ')}>
          Contact Us
        </h2>
        <p className={cx('mb-8 text-center font-light text-gray-500 sm:text-xl lg:mb-16')}>
          Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let
          us know.
        </p>
        <form action='#' className={cx('space-y-8')}>
          <div>
            <label htmlFor='email' className={cx('mb-2 block text-sm font-medium text-gray-900')}>
              Your email
            </label>
            <input
              type='email'
              id='email'
              className={cx(
                'focus:ring-1 ring-primary/50 outline-none block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm 
              )}
              placeholder='name@email.com'
              required
            />
          </div>
          <div>
            <label htmlFor='subject' className={cx('mb-2 block text-sm font-medium text-gray-900')}>
              Subject
            </label>
            <input
              type='text'
              id='subject'
              className={cx(
                'focus:ring-1 ring-primary/50 outline-none block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm 
              )}
              placeholder='Let us know how we can help you'
              required
            />
          </div>
          <div className={cx('sm:col-span-2')}>
            <label htmlFor='message' className={cx('mb-2 block text-sm font-medium text-gray-900')}>
              Your message
            </label>
            <textarea
              id='message'
              rows='6'
              className={cx(
                'focus:ring-1 ring-primary/50 outline-none block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm 
              )}
              placeholder='Leave a comment...'
            ></textarea>
          </div>
          <button
            type='submit'
            className={cx(
              'bg-primary-700 hover:bg-primary-800 focus:ring-primary-300  rounded-lg px-5 py-3 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 sm:w-fit'
            )}
          >
            Send message
          </button>
        </form>
      </div>
    </>
  )
}

export default Contact
