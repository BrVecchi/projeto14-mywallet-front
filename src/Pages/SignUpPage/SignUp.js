import axios from "axios";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MyContext from "../../components/MyContext";

export default function SignUp() {
  const {setToken} = useContext(MyContext)  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");

  function signUp(e) {
    e.preventDefault()

    if (confirmation !== password) {
      alert("A confirmação da senha não confere!")
      setPassword("");
      setConfirmation("");
      return
    }

    const requestObject = {name, email, password}

    const request = axios.post("http://localhost:5000/sign-up", {requestObject});
    request.then((res) => {
      alert("Usuário cadastrato com sucesso!");
      setConfirmation("");
      setEmail("");
      setName("");
      setPassword("");
      setToken(res.data.token)
    }).catch((err)=>{
      alert("Algo foi digitado incorretamente, tente novamente.")
      console.log(err)
      console.log(requestObject)
      setPassword("");
      setConfirmation("");
    })
  }

  return (
    <Container>
      <Header>My Wallet</Header>
      <Form onSubmit={signUp}>
        <Input
          name="nome"
          placeholder="Nome"
          type="text"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <Input
          name="email"
          placeholder="E-mail"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          name="password"
          placeholder="Senha"
          type="password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Input
          name="confirmation"
          placeholder="Confirme a senha"
          type="password"
          required
          value={confirmation}
          onChange={(event) => setConfirmation(event.target.value)}
        />
        <Button>Cadastrar</Button>
      </Form>
      <Link sans-serif color="white" to="/sign-in">
        Já tem uma conta? Faça login!
      </Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: #8c11be;
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
  font-family: "Saira Stencil One", cursive;
  margin-bottom: 30px;
  font-size: 32px;
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
  width: 85%;
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
  width: 85%;
  color: white;
  font-family: "Raleway", sans-serif;
  font-size: 20px;
  border: none;
  border-radius: 5px;
`;
