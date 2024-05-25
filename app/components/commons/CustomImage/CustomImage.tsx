import React from 'react'
import Image from 'next/image'

type Props = {
  src: string
  alt: string
  width: number
  height: number
  className: string
}

const CustomImage = ({width, height, src = '', alt = 'image', className}: Props) => {
  return <Image src={src} alt={alt} width={width} height={height} loading={'lazy'} className={className} />
}

export default CustomImage
