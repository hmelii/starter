import {FC} from "react";
import {ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {Link} from "../Link";


type ItemPropTypes = {
    title: string;
    href: string;
}

export const Item: FC<ItemPropTypes> = ({title, href}) => {
    return (
        <ListItem disablePadding>
            <ListItemButton
                styles={{
                    textDecoration: 'none',
                    marginBottom: '2.7rem',
                }}
                component={Link}
                href={href}>
                <ListItemText
                    disableTypography
                    sx={{
                        fontSize: '1.6rem',
                        margin: 0,
                        lineHeight: 1.3
                    }}>{title}</ListItemText>

            </ListItemButton>
        </ListItem>
    )
}