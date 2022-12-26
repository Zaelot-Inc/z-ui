import PropTypes from 'prop-types'
// todo: fix import order without breaking styles hierarchy
// eslint-disable-next-line import/order
import styles from './heading.module.scss'
import font from '@style/font.module.scss'
import palette from '@style/palette.module.scss'

const Heading = ({ label = 'Heading 1', type = 'h1', weight, size, color }) => {
  let styleOverwrite = ''
  if (weight) {
    styleOverwrite += ` ${font[weight]}`
  }
  if (size) {
    styleOverwrite += ` ${font[size]}`
  }
  if (color) {
    styleOverwrite += ` ${palette[color]}`
  }
  const styleClasses = `${styles[type]} ${styleOverwrite}`
  const Tag = type

  return <Tag className={styleClasses}>{label}</Tag>
}

Heading.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  weight: PropTypes.oneOf([
    'font-thin',
    'font-extraLight',
    'font-light',
    'font-normal',
    'font-medium',
    'font-semiBold',
    'font-bold',
    'font-extraBold',
    'font-black'
  ]),
  size: PropTypes.oneOf([
    'text-x3sm',
    'text-x2sm',
    'text-xsm',
    'text-sm',
    'text-base',
    'text-lg',
    'text-xlg',
    'text-x2lg',
    'text-x3lg',
    'text-x4lg'
  ]),
  color: PropTypes.string
}

export default Heading
