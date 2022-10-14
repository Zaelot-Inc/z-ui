import Button from '.'

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    label: {
      control: { type: 'text' },
      defaultValue: 'Button'
    }
  }
}

const Template = args => <Button {...args} />

export const Default = Template.bind({})
