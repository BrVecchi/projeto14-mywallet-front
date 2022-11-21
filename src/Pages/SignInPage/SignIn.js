import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState([]);
  console.log(user);

  const navigate = useNavigate();

  function signIn(e) {
    e.preventDefault();
    const request = axios.post("http://localhost:5000/sign-in", {
      email,
      password,
    });
    request
      .then((res) => {
        setUser(res.data);
        alert("Usuário logado!");
        navigate("/records");
        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        alert("Essas informações de login não batem, tente novamente.");
        setEmail("");
        setPassword("");
        console.error(err);
      });
  }
  return (
    <Container>
      <Header>My Wallet</Header>
      <Form onSubmit={signIn}>
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
        <Button>Entrar</Button>
      </Form>
      <Link sans-serif color="white" to="/sign-up">
        Não tem uma conta? Cadastre-se aqui!
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
