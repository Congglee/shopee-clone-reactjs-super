import type { Meta, StoryObj } from '@storybook/react'
import MainLayout from './MainLayout'
import ProductDetail from 'src/pages/ProductDetail'
import { reactRouterParameters } from 'storybook-addon-react-router-v6'

const meta = {
  title: 'Layouts/MainLayout',
  component: MainLayout,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Body của layout',
      table: {
        type: { summary: 'React.ReactNode' },
        defaultValue: { summary: '' }
      }
    }
  }
} satisfies Meta<typeof MainLayout>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {}
}

export const PageProductDetail: Story = {
  args: {
    children: <ProductDetail />
  },
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        pathParams: { nameId: 'Điện-Thoại-Xiaomi-Redmi-9A-2GB32GB--Hàng-Chính-Hãng-i-60afb07e6ef5b902180aacb6' }
      },
      routing: {
        path: '/:nameId',
        handle: 'ProductDetail'
      }
    })
  }
}
