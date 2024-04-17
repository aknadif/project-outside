import React from 'react'
import Image from 'next/image'

type Props = {
  src: string
  alt: string
  width: number
  height: number
}

const CustomImage = (props: Props) => {
  return <Image src={props.src} alt={props.alt} width={props.width} height={props.height} loading={'lazy'} />
}

CustomImage.defaultProps = {
  src: '',
  alt: 'image'
}

export default CustomImage
