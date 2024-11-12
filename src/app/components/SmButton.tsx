'use client'
import React from 'react'
import { Button } from 'antd'
import { BaseButtonProps } from 'antd/es/button/button'

export interface ButtonProps extends BaseButtonProps {
  onClick?: () => void;
  text: string;
  loading?: boolean
}

const SmButton: React.FC<ButtonProps> = ({
  onClick,
  text,
  type = 'default',
  loading = false,
  disabled = false,
  className = "",
}) => {
  return (
    <Button
      size='large'
      type={type}
      onClick={onClick}
      block={true}
      loading={loading}
      disabled={disabled}
      className={className}
    >
      {text}
    </Button>
  )
}

export default SmButton
