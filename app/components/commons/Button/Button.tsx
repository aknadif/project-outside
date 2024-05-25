import React from 'react'
import classNames from 'classnames/bind'
import styles from './Button.module.css'
import Spinner from '../Spinner'

const cx = classNames.bind(styles)

type IButton = {
  type?: any
  isDisabled?: boolean
  children: React.ReactNode
  classType?: 'primary' | 'outline' | 'outline-primary' | 'none'
  variant: 'small' | 'medium' | 'large'
  onClick: React.MouseEventHandler<HTMLButtonElement>
  customClassName?: string
  isLoading: boolean
  rounded: boolean
}

const Button = ({
  onClick,
  children,
  classType,
  customClassName,
  type = 'button',
  variant = 'medium',
  isDisabled = false,
  isLoading = false,
  isRounded = true
}: IButton) => {
  const buttonClassType = isDisabled ? 'disabled' : classType

  return (
    <button
      disabled={isDisabled}
      type={type}
      className={cx(
        isRounded ? 'rounded-full' : 'rounded-none',
        `variant__${variant}`,
        `button__${buttonClassType}`,
        customClassName
      )}
      onClick={onClick}
    >
      {isLoading && (
        <div className={cx('flex justify-center')}>
          <Spinner />
        </div>
      )}
      {!isLoading && children}
    </button>
  )
}

export default Button
