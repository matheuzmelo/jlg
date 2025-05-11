import react from "react";
import { ContentContainer, ListItem, ListItemTimes } from "./styles";

const CheckList = () => {
    return(
        <ContentContainer>
            <ListItem>
                Midazolam 6/6h
            </ListItem>
            <ListItemTimes>
                6h da manhã
            </ListItemTimes>
            <ListItemTimes>
                12h da tarde (meio dia)
            </ListItemTimes>
            <ListItemTimes>
                18h da tarde (final da tarde)
            </ListItemTimes>
        </ContentContainer>
    )
}

export default CheckList
