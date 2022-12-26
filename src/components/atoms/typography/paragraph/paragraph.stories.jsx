import Paragraph from './index.jsx'

export default {
  title: 'Atoms/Typography/Paragraph',
  component: Paragraph
}

const Template = args => <Paragraph {...args} />

export const P = Template.bind({})
P.args = { label: 'Paragraph' }
