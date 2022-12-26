import Heading from './index.jsx'

export default {
  title: 'Atoms/Typography/Heading',
  component: Heading
}

const Template = args => <Heading {...args} />

export const H1 = Template.bind({})
H1.args = { label: 'Heading 1', type: 'h1' }

export const H2 = Template.bind({})
H2.args = { label: 'Heading 2', type: 'h2' }

export const H3 = Template.bind({})
H3.args = { label: 'Heading 3', type: 'h3' }

export const H4 = Template.bind({})
H4.args = { label: 'Heading 4', type: 'h4' }

export const H5 = Template.bind({})
H5.args = { label: 'Heading 5', type: 'h5' }

export const H6 = Template.bind({})
H6.args = { label: 'Heading 6', type: 'h6' }
