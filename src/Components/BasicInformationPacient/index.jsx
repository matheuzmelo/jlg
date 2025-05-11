import react from "react";
import {
    DataPacientText,
    DataPacientTextContent,
    DataPacientContainer,
    ContainerPacientData,
} from './style'

const BasicInformationPacient = () => {

    return (
        <ContainerPacientData>
        <DataPacientContainer>
          <DataPacientText>Sanguíneo: </DataPacientText>
          <DataPacientTextContent>A+</DataPacientTextContent>
        </DataPacientContainer>
        <DataPacientContainer>
          <DataPacientText>Altura: </DataPacientText>
          <DataPacientTextContent>180cm</DataPacientTextContent>
        </DataPacientContainer>
        <DataPacientContainer>
          <DataPacientText>Peso: </DataPacientText>
          <DataPacientTextContent>130Kg</DataPacientTextContent>
        </DataPacientContainer>
        <DataPacientContainer>
          <DataPacientText>Sexo: </DataPacientText>
          <DataPacientTextContent>F</DataPacientTextContent>
        </DataPacientContainer>
        <DataPacientContainer>
          <DataPacientText>Cidade: </DataPacientText>
          <DataPacientTextContent>Gravataí</DataPacientTextContent>
        </DataPacientContainer>
        <DataPacientContainer>
          <DataPacientText>E. Civil: </DataPacientText>
          <DataPacientTextContent>C</DataPacientTextContent>
        </DataPacientContainer>
      </ContainerPacientData>
    )

}

export default BasicInformationPacient
