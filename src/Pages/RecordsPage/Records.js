import { useState } from "react";
import {
  AddCircleOutline,
  ExitOutline,
  RemoveCircleOutline,
} from "react-ionicons";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Record from "../../Components/Record";

export default function Records() {
  const [myRecords, setMyRecords] = useState([
    {
      date: "30/11",
      description: "Almoço mãe",
      value: 39.9,
      status: "output",
    },
    {
      date: "13/03",
      description: "Presente aniversário",
      value: 289.50,
      status: "input",
    },
  ]);
  const valor = 1000.0;

  const navigate = useNavigate();

  function goToNewInput() {
    navigate("/new-input");
  }

  function goToNewOutput() {
    navigate("/new-output");
  }

  return (
    <Container>
      <Header>
        <span>Olá, Fulano</span>
        <ExitOutline color="white" />
      </Header>
      <RecordsSquare type="text">
        {myRecords.length === 0 ? (
          <p>Não há registros de entrada ou saída</p>
        ) : (
          <>
          <RecordsContainer>
          {myRecords.map((record) => <Record record = {record}/>)}
          </RecordsContainer>
          <Saldo>
            <span>Saldo</span>
            <span>{valor}</span>
          </Saldo>
          </>
        )}
      </RecordsSquare>
      <Buttons>
        <NewInput onClick={goToNewInput}>
          <AddCircleOutline color="white" />
          <span>Nova entrada</span>
        </NewInput>
        <NewOutput onClick={goToNewOutput}>
          <RemoveCircleOutline color="white" />
          <span>Nova saída</span>
        </NewOutput>
      </Buttons>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: #8c11be;
  padding: 25px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 22px;
  span {
    color: #ffffff;
    font-family: "Raleway", sans-serif;
    font-size: 26px;
    font-weight: 700;
  }
`;

const RecordsSquare = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff;
  height: 65vh;
  border-radius: 5px;
  padding: 10px;
  font-family: "Raleway", sans-serif;
  margin-bottom: 20px;
  p {
    font-family: "Raleway", sans-serif;
    font-size: 20px;
    color: #868686;
    padding: 0 20% 0 20%;
    text-align: center;
  }
`;

const RecordsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
const Saldo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NewInput = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 156px;
  height: 114px;
  background-color: #a328d6;
  border-radius: 5px;
  border: none;
  padding: 10px;
  span {
    color: white;
    font-family: "Raleway", sans-serif;
    font-size: 17px;
    font-weight: 700;
  }
`;

const NewOutput = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 156px;
  height: 114px;
  background-color: #a328d6;
  border-radius: 5px;
  border: none;
  padding: 10px;
  span {
    color: white;
    font-family: "Raleway", sans-serif;
    font-size: 17px;
    font-weight: 700;
  }
`;
