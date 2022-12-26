import { Title, Subtitle, Description, Stories } from '@storybook/addon-docs'
import styles from './spacing.stories.module.scss'

const spacings = ['w-x3sm', 'w-x2sm', 'w-xsm', 'w-sm', 'w-base', 'w-lg', 'w-xlg', 'w-x2lg', 'w-x3lg']

export default {
  title: 'Foundation/Spacing',
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

export const Spacing = () => {
  return (
    <div className={styles.rootContainer}>
      {spacings.map(spacing => (
        <div className={styles.spacingText} key={spacing}>
          {spacing}
          <div className={`${styles.spacingBox} ${styles[spacing]}`} />
        </div>
      ))}
    </div>
  )
}
