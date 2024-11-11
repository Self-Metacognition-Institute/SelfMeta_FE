import React from 'react'
import { Button } from 'antd'
import { BaseButtonProps } from 'antd/es/button/button'

interface ButtonProps extends BaseButtonProps {
  onClick?: () => void;
  text: string;
  loading: boolean
}

const SmButton: React.FC<ButtonProps> = ({
  onClick,
  text,
  type = 'default',
  loading,
  disabled = false
}) => {
  return (
    <Button 
      size='large' 
      type={type} 
      onClick={onClick} 
      block={true} 
      loading={loading}
      disabled={disabled}
    >
      {text}
    </Button>
  )
}

export default SmButton