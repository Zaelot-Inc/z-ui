import Typography from '.'

export default {
  title: 'Atoms/Typography',
  component: Typography
}

const Template = args => <Typography {...args} />

export const Default = Template.bind({})
Default.args = { label: 'Typography' }
