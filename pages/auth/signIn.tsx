import { NextPage } from "next";
import JSXStyle from "styled-jsx/style";

interface Props { }

const SignIn: NextPage = (props): JSX.Element => {
  return <form>
    <h1>Login</h1>
    <input type='email' placeholder="Enter Your Email" />
    <input type='password' placeholder="Enter Your Password" />
    <input type='submit' />
  </form>
}

export default SignIn