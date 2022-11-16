import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./Assets/styles/GlobalStyle";
import ResetCSS from "./Assets/styles/ResetCSS";
import NewInput from "./Pages/NewInputPage/NewInput";
import NewOutput from "./Pages/NewOutputPage/NewOutput";
import Records from "./Pages/RecordsPage/Records";
import SignIn from "./Pages/SignInPage/SignIn";
import SignUp from "./Pages/SignUpPage/SignUp";

function App() {
  return (
    <BrowserRouter>
    <ResetCSS />
    <GlobalStyle />
    <Routes>
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/records" element={<Records />} />
      <Route path="/new-input" element={<NewInput />} />
      <Route path="/new-output" element={<NewOutput />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
