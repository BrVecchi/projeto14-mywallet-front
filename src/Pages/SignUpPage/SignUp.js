import { Link } from "react-router-dom";
import styled from "styled-components"

export default function SignUp() {
    return (
        <Container>
          <Header>My Wallet</Header>
          <Form>
            <Input placeholder="Nome" type="email" />
            <Input placeholder="E-mail" type="email" />
            <Input placeholder="Senha" type="email" />
            <Input placeholder="Confirme a senha" type="password" />
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