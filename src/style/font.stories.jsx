import { Title, Subtitle, Description, Stories } from '@storybook/addon-docs'
import styles from './font.stories.module.scss'

const sizes = [
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
]
const weights = [
  'font-thin',
  'font-extraLight',
  'font-light',
  'font-normal',
  'font-medium',
  'font-semiBold',
  'font-bold',
  'font-extraBold',
  'font-black'
]

export default {
  title: 'Foundation/Font',
  component: () => {},
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Stories includePrimary />
        </>
      )
    }
  }
}

export const FontSizes = () => {
  return (
    <div className={styles.rootContainer}>
      <p className={styles.title}>Font Sizes</p>
      <div className={styles.bodyContainer}>
        {sizes.map(size => (
          <span key={size} className={`${styles.fontExample} ${styles[size]}`}>
            {size}
          </span>
        ))}
      </div>
    </div>
  )
}
export const FontWeights = () => {
  return (
    <div className={styles.rootContainer}>
      <p className={styles.title}>Font Weights</p>
      <div className={styles.bodyContainer}>
        {weights.map(weight => (
          <span key={weight} className={`${styles.fontExample} ${styles[weight]}`}>
            {weight}
          </span>
        ))}
      </div>
    </div>
  )
}
