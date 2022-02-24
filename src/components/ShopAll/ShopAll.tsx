import { FC, ReactNode } from 'react'

import ButtonUnstyled, {
  buttonUnstyledClasses,
  ButtonUnstyledProps
} from '@mui/base/ButtonUnstyled'
import { styled } from '@mui/system'

const blue = {
  500: '#004CBD',
  600: '#007FFF',
  700: '#0072E5'
}

const CustomButtonRoot = styled('button')`
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 1;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  background-color: ${blue[500]};
  padding: 1.5rem 2rem 1.6rem;
  border-radius: 0;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  display: block;
  width: 100%;

  &:hover {
    background-color: ${blue[600]};
  }

  &.${buttonUnstyledClasses.active} {
    background-color: ${blue[700]};
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1),
      0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const ShopAll: FC = (props: ButtonUnstyledProps) => {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} />
}
