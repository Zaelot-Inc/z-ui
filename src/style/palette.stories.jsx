import { Title, Subtitle, Description, Stories } from '@storybook/addon-docs'
import PropTypes from 'prop-types'
import styles from './palette.stories.module.scss'
import paletteScss from './palette.scss'
import { parseScss } from '../utils/parse'

const paletteVariables = parseScss(paletteScss)

const LABELS = {
  primary: 'Primary',
  secondary: 'Secondary',
  tertiary: 'Tertiary',
  success: 'Success',
  danger: 'Danger',
  warning: 'Warning',
  'primary-hover': 'Primary Hover',
  'secondary-hover': 'Secondary Hover',
  'tertiary-hover': 'Tertiary Hover',
  'success-hover': 'Success Hover',
  'danger-hover': 'Danger Hover',
  'warning-hover': 'Warning Hover',
  'primary-active': 'Primary Active',
  'secondary-active': 'Secondary Active',
  'tertiary-active': 'Tertiary Active',
  'success-active': 'Success Active',
  'danger-active': 'Danger Active',
  'warning-active': 'Warning Active',
  darkindigo: 'DarkIndigo',
  blackish: 'Blackish',
  navy: 'Navy',
  'american-gray': 'AmericanGray',
  aquamarine: 'Aquamarine',
  explosive: 'Explosive',
  green: 'Green',
  winter: 'Winter',
  'grass-green': 'GrassGreen',
  river: 'River',
  'bright-green': 'BrightGreen',
  darkblue: 'Darkblue',
  saladish: 'Saladish',
  lightblue: 'Lightblue',
  'egg-yolk': 'EggYolk',
  chillblue: 'Chillblue',
  orange: 'Orange',
  indigo: 'Indigo',
  peach: 'Peach',
  darkpurple: 'Darkpurple',
  sunset: 'Sunset',
  berry: 'Berry',
  'dark-orange': 'DarkOrange',
  purple: 'Purple',
  red: 'Red',
  'sofia-pink': 'SofiaPink',
  'dark-red': 'DarkRed',
  lipstick: 'Lipstick',
  brown: 'Brown',
  bubble: 'Bubble',
  dark: 'Dark',
  'wolf-grey': 'WolfGrey',
  'ui-grey': 'UIGrey',
  riverstone: 'Riverstone',
  white: 'White'
}

const Color = ({ name, darkContrast, position }) => {
  return (
    <div className={`${styles.colorContainer} ${styles[name]} ${position ? styles[position] : ''}`}>
      <p className={`${styles.colorName} ${darkContrast ? styles.contrastText : ''}`}>{LABELS[name]}</p>
      <p className={`${styles.colorCode} ${darkContrast ? styles.contrastText : ''}`}>{paletteVariables[name]}</p>
    </div>
  )
}

Color.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string,
  darkContrast: PropTypes.bool
}

export default {
  title: 'Foundation/Palette',
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

export const MainColors = () => {
  return (
    <div className={styles.rootContainer}>
      <p className={styles.paletteTitle}>Main UI Colors</p>
      <div className={styles.mainPaletteContainer}>
        <div>
          <Color name='primary' position='first' />
          <Color name='primary-hover' />
          <Color name='primary-active' position='last' />
        </div>
        <div>
          <Color name='secondary' position='first' darkContrast />
          <Color name='secondary-hover' darkContrast />
          <Color name='secondary-active' position='last' darkContrast />
        </div>
        <div>
          <Color name='tertiary' position='first' />
          <Color name='tertiary-hover' />
          <Color name='tertiary-active' position='last' />
        </div>
        <div>
          <Color name='success' position='first' />
          <Color name='success-hover' />
          <Color name='success-active' position='last' />
        </div>
        <div>
          <Color name='danger' position='first' />
          <Color name='danger-hover' />
          <Color name='danger-active' position='last' />
        </div>
        <div>
          <Color name='warning' position='first' />
          <Color name='warning-hover' />
          <Color name='warning-active' position='last' />
        </div>
      </div>
    </div>
  )
}
export const ColorCoding = () => {
  return (
    <div className={styles.rootContainer}>
      <p className={styles.paletteTitle}>Color Coding</p>
      <div className={styles.colorPaletteContainer}>
        <div>
          <Color name='darkindigo' darkContrast position='main' />
          <Color name='blackish' darkContrast position='main' />
          <Color name='navy' position='main' />
          <Color name='american-gray' position='main' />
          <Color name='aquamarine' position='main' />
          <Color name='explosive' position='main' />
          <Color name='green' position='main' />
          <Color name='winter' position='main' />
          <Color name='grass-green' position='main' />
          <Color name='river' position='main' />
          <Color name='bright-green' position='main' />
          <Color name='darkblue' position='main' />
          <Color name='saladish' position='main' />
          <Color name='lightblue' position='main' />
          <Color name='egg-yolk' position='main' />
          <Color name='chillblue' position='main' />
          <Color name='orange' position='main' />
          <Color name='indigo' position='main' />
          <Color name='peach' position='main' />
          <Color name='darkpurple' position='main' />
          <Color name='sunset' position='main' />
          <Color name='berry' position='main' />
          <Color name='dark-orange' position='main' />
          <Color name='purple' position='main' />
          <Color name='red' position='main' />
          <Color name='sofia-pink' position='main' />
          <Color name='dark-red' position='main' />
          <Color name='lipstick' position='main' />
          <Color name='brown' position='main' />
          <Color name='bubble' position='main' />
        </div>
        <div>
          <Color name='dark' darkContrast position='main' />
          <Color name='wolf-grey' position='main' />
          <Color name='ui-grey' position='main' />
          <Color name='riverstone' position='main' />
          <Color name='white' position='main' />
        </div>
      </div>
    </div>
  )
}
