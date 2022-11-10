import { Title, Subtitle, Description, Stories } from '@storybook/addon-docs'
import spacing from './spacing.stories'

export default {
  title: 'Foundation',
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

export const Spacing = spacing
