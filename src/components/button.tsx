import Link from 'next/link'
import { Button as ButtonChakra, ButtonProps as ButtonChakraProps } from '@chakra-ui/react'
import { ReactElement } from 'react'

interface ButtonProps extends ButtonChakraProps {
  color: string
  to?: string
}

// const ButtonLink = ({ children, color, to, variant, ...props }: ButtonProps): ReactElement =>

const Button = ({ children, color, to, ...props }: ButtonProps): ReactElement =>
  to ? (
    <Link href={to} passHref>
      <ButtonChakra colorScheme={color} {...props}>
        {children}
      </ButtonChakra>
    </Link>
  ) : (
    <ButtonChakra colorScheme={color} {...props} />
  )

export default Button
