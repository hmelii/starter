import { FC } from 'react'

import ButtonUnstyled, { ButtonUnstyledProps } from '@mui/base/ButtonUnstyled'
import { styled } from '@mui/system'
import { blue } from '@mui/material/colors'

const CustomButtonRoot = styled('button')`
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 1;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  background-color: #004cbd;
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
`

export const ShopAll: FC = (props: ButtonUnstyledProps) => {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} />
}
