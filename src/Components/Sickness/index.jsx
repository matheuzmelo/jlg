import react from "react";
import {CodeSickness, ContainerSickness, ContentSickness, DescriptionSickness, TitleSickness} from './style';

const Sickness = () => {

    const sicks = [
        {
            code: 'K650',
            description: '(Peritonite) Peritonite aguda',
        },
        {
            code: 'A419',
            description: '(Outras septicemias) Septicemias não especificada',
        },
        {
            code: 'N19',
            description: 'Insufiencia renal nao especificada',
        },
        {
            code: 'K632',
            description: '(Outras doenças do intestino) Fistula do intestino',
        },
    ]

    return(
        <ContainerSickness>
            <TitleSickness>
                Doenças:
            </TitleSickness>
            {sicks.map((data, i) => (
            <ContentSickness key={i}>
                <CodeSickness>{data.code}</CodeSickness> - <DescriptionSickness>{data.description}</DescriptionSickness>
            </ContentSickness>
            ))}
        </ContainerSickness>
    )
}

export default Sickness;
