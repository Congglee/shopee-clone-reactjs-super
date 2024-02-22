import type { Meta, StoryObj } from '@storybook/react'
import CartHeader from './CartHeader'

const meta = {
  title: 'Components/CartHeader',
  component: CartHeader,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs']
} satisfies Meta<typeof CartHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    primary: true,
    label: 'CartHeader'
  }
}
