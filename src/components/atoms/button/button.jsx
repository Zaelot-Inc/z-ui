import React from 'react'
import './button.css'

const Button = ({ label, ...props }) => {
  const Tag = props.href ? 'a' : 'button'

  return (
    <Tag
      type='button'
      className='storybook-button'
      {...props}
    >
      {label}
    </Tag>
  )
}

export default Button
