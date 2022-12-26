import PropTypes from 'prop-types'
import Heading from './heading/index.jsx'
import Paragraph from './paragraph/index.jsx'

const Typography = ({ label, type, weight, size, color }) => {
  if (type === 'p') {
    return <Paragraph label={label} weight={weight} size={size} color={color} />
  }
  return <Heading label={label} type={type} weight={weight} size={size} color={color} />
}

Typography.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  weight: PropTypes.oneOf([
    'thin',
    'extraLight',
    'light',
    'normal',
    'medium',
    'semiBold',
    'bold',
    'extraBold',
    'black'
  ]),
  size: PropTypes.oneOf(['x3sm', 'x2sm', 'xsm', 'sm', 'base', 'lg', 'xlg', 'x2lg', 'x3lg', 'x4lg']),
  color: PropTypes.string
}

export default Typography
