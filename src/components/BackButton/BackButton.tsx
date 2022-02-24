import {FC} from "react";

import ButtonUnstyled, {
    buttonUnstyledClasses,
    ButtonUnstyledProps,
} from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';
import {blue} from "../../constants/colors";
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import {Link} from "../Link";

const CustomButtonRoot = `
  background-color: ${blue[500]};
  width: 6.4rem;
  height: 6.4rem;
  padding: 0;
  border-radius: 0;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${blue[600]};
  }

  &.${buttonUnstyledClasses.active} {
    background-color: ${blue[700]};
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const BackButton: FC = (props: ButtonUnstyledProps) => {
    return (
        <Link href="/" styles={CustomButtonRoot}>
            <ArrowBackIosNewRoundedIcon
                sx={{
                    display: 'block',
                    color: '#fff',
                    width: '3rem',
                    height: '3rem',
                }} />
        </Link>
    )
}