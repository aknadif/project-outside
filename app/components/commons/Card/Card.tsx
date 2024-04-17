import React from 'react'
import cx from 'classnames'

type Props = {
  children: React.ReactNode
}

const Card = (props: Props) => {
  return <div class='max-w-sm rounded-lg border border-gray-200 bg-white shadow'>{props.children}</div>
}

Card.defaultProps = {
  children: ''
}

export default Card
