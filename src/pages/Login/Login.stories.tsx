import type { Meta, StoryObj } from '@storybook/react'
import Login from './Login'
import { reactRouterParameters } from 'storybook-addon-react-router-v6'
import path from 'src/constants/path'
import RegisterLayout from 'src/layouts/RegisterLayout'

const meta = {
  title: 'Pages/Login',
  component: Login,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs']
} satisfies Meta<typeof Login>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  parameters: {
    reactRouter: reactRouterParameters({
      location: {},
      routing: {
        path: path.login
      }
    })
  }
}

export const LoginPage: Story = {
  render: () => (
    <RegisterLayout>
      <Login />
    </RegisterLayout>
  ),
  args: {},
  parameters: {
    reactRouter: reactRouterParameters({
      location: {},
      routing: {
        path: path.login
      }
    })
  }
}
