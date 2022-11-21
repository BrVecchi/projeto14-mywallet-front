import axios from "axios";
import { useContext, useEffect, useState } from "react";
import {
  AddCircleOutline,
  ExitOutline,
  RemoveCircleOutline,
} from "react-ionicons";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MyContext from "../../Components/MyContext";
import Record from "../../Components/Record";

export default function Records() {
  const { token, user } = useContext(MyContext);
  const navigate = useNavigate();

  const [myRecords, setMyRecords] = useState([]);
  const [balance, setBalance] = useState(0)
  const [balanceColor, setBalanceColor] = useState("blue")

  useEffect(getRecords, []);

  function getRecords() {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const request = axios.get("http://localhost:5000/records", config);
    request.then((res) => {
      setMyRecords(res.data);
    });
    request.catch((err) => {
      alert("Algo deu errado e a culpa é nossa. =/");
      console.log(err);
    });
  calculatingBalance()
  }

  function calculatingBalance() {
    let newBalance = 0
    myRecords.forEach((record) => record.status === "input" ? newBalance = newBalance + Number(record.value) : newBalance = newBalance - Number(record.value))
    newBalance >= 0 ? setBalanceColor("green") : setBalanceColor("red")
    setBalance(newBalance.toFixed(2))
  }


  function goToNewInput() {
    navigate("/new-input");
  }

  function goToNewOutput() {
    navigate("/new-output");
  }

  return (
    <Container>
      <Header>
        <span>Olá, {user}</span>
        <ExitOutline color="white" />
      </Header>
      <RecordsSquare type="text">
        {myRecords.length === 0 ? (
          <p>Não há registros de entrada ou saída</p>
        ) : (
          <>
            <RecordsContainer>
              {myRecords.map((record) => (
                <Record record={record} />
              ))}
            </RecordsContainer>
            <Saldo>
              <span>Saldo</span>
              <Balance color={balanceColor}>{balance}</Balance>
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
    margin-top: 60%;
  }
`;

const RecordsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const Saldo = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    font-family: "Raleway", sans-serif;
    font-size: 20px;
    color: black;
  }
`;

const Balance = styled.div`
    color: ${(props) => props.color};
`

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
