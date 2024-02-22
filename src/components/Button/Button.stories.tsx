import type { Meta, StoryObj } from '@storybook/react'
import Button from './Button'

const meta = {
  title: 'Components/Button',
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    isLoading: {
      description: 'Hiện thị icon loading'
    },
    children: {
      description: 'Nội dung button',
      table: {
        type: { summary: 'React.ReactNode' },
        defaultValue: { summary: '' }
      }
    },
    className: {
      description: 'class',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    }
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Đăng nhập',
    className:
      'w-full text-center py-4 px-2 uppercase bg-red-500 text-white text-sm hover:bg-red-600 flex justify-center items-center',
    isLoading: true
  }
}

export const Secondary: Story = {
  args: {
    children: 'Đăng ký',
    className:
      'text-center py-4 px-2 uppercase bg-red-500 text-white text-sm hover:bg-red-600 justify-center items-center inline-flex',
    isLoading: true,
    disabled: true
  }
}
