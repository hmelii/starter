import {FC} from "react";
import {ListItem,  ListItemText} from "@mui/material";
import {Link} from "../Link";


type ItemPropTypes = {
    title: string;
    href: string;
}

export const Item: FC<ItemPropTypes> = ({title, href}) => {
    return (
        <ListItem disablePadding>
            <Link
                styles={{
                    textDecoration: 'none',
                    marginBottom: '2.7rem',
                }}
                href={href}>
                <ListItemText
                    disableTypography
                    sx={{
                        fontSize: '1.6rem',
                        margin: 0,
                        lineHeight: 1.3
                    }}>{title}</ListItemText>

            </Link>
        </ListItem>
    )
}