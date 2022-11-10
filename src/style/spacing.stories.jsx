import styles from './spacing.stories.module.scss'

const spacings = ['x3sm', 'x2sm', 'xsm', 'sm', 'base', 'lg', 'xlg', 'x2lg', 'x3lg']

export default () => {
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
