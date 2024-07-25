import { type Meta } from '@storybook/react'

import { Button } from './button'

const meta = {
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta

export const Default = {
  args: {
    children: 'Default Button',
  },
}

export const AlertOnClick = {
  args: {
    children: 'Alert!',
    onClick: () => alert('Button clicked'),
  },
}
