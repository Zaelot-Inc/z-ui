import { Title, Subtitle, Description, Stories } from '@storybook/addon-docs'
import styles from './font.stories.module.scss'

const sizes = ['x3sm', 'x2sm', 'xsm', 'sm', 'base', 'lg', 'xlg', 'x2lg', 'x3lg']
const weights = ['thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black']

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
          <span key={size} className={`${styles.fontExample} ${styles[size]}`}>{`${size} text`}</span>
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
          <span key={weight} className={`${styles.fontExample} ${styles[weight]}`}>{`${weight} text`}</span>
        ))}
      </div>
    </div>
  )
}
