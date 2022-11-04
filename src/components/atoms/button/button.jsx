import PropTypes from 'prop-types'

import styles from './button.module.scss'

const Button = ({ label, ...props }) => {
  const Tag = props.href ? 'a' : 'button'

  return (
    <Tag type='button' className={`${styles.button} ${styles.another}`} {...props}>
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
