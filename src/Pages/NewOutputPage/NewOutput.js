import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function NewOutput() {
  const [value, setValue] = useState();
  const [description, setDescription] = useState();

  const navigate = useNavigate();

  const dayjs = require("dayjs");
  const data = dayjs().format("DD/MM");

  function addOutput(e) {
    e.preventDafault()
    const request = axios.post("http://localhost:5000/new-output", {
      date: { data },
      description: { description },
      value: { value },
      status: "output",
    });
    request.then((res) => {
      setDescription();
      setValue();
      navigate("/records");
    });
    request.catch((err) => {
      alert("Algo inesperado aconteceu. Desculpe pelo transtorno. =/");
    });
  }

  return (
    <Container>
      <Header>Nova saída</Header>
      <Form onSubmit={addOutput}>
        <Input
          name="value"
          placeholder="Valor"
          type="number"
          required
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <Input
          name="description"
          placeholder="Descrição"
          type="text"
          required
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <Button>Salvar entrada</Button>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: #8c11be;
  padding: 8%;
  a {
    font-family: "Raleway", sans-serif;
    color: white;
    font-size: 15px;
    font-weight: 700;
    text-decoration: none;
  }
`;

const Header = styled.div`
  color: #ffffff;
  font-family: "Raleway", sans-serif;
  margin-bottom: 30px;
  font-size: 32px;
  font-weight: 700;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
`;

const Input = styled.input`
  height: 58px;
  width: 100%;
  font-size: 20px;
  margin-bottom: 10px;
  font-family: "Raleway", sans-serif;
  padding: 15px;
  border: none;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #a328d6;
  height: 46px;
  width: 100%;
  color: white;
  font-family: "Raleway", sans-serif;
  font-size: 20px;
  font-weight: 700;
  border: none;
  border-radius: 5px;
`;
