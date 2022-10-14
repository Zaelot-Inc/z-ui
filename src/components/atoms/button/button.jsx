import PropTypes from 'prop-types'

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

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  href: PropTypes.string
}

export default Button
