import styled from "styled-components/native";

export const Container = styled.View`
    margin: 5%;
`
export const Usr = styled.View`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 90px;
    background-color: #7ad3af;
    padding-left: 7%;
    padding-right: 7%;
    align-items: center;
    justify-content: space-between;
`

export const Avatar = styled.Image`
    width: 50px;
    height: 50px;
    margin: 0 20px 0 0;
    border: solid 3px #fff;
    border-radius: 100px;
`

export const PacientItem = styled.View`
    background-color: #fff;
    box-shadow: 0 0 10px #000;
    margin: 10px;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Btn = styled.TouchableOpacity`
    background-color: #7ad3af;
    padding: 10px 20px;
    border-radius: 20px;
`
