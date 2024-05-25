import React from 'react'
import cx from 'classnames'

type Props = {
  children: React.ReactNode
}

const Card = ({children = ''}: Props) => {
  return <div className={cx('max-w-sm rounded-lg border border-gray-200 bg-white shadow')}>{children}</div>
}

export default Card
