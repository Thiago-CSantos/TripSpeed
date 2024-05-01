import React from 'react';
import LayoutLogin from '../components/layout_login';
import PrimaryInput from '../components/primaryInput';
import { InputType } from "../enum/types";
import EmailIcon from '../assets/email-icon.svg';
import PasswordIcon from '../assets/password-iconsvg.svg';
import { Form, Link } from 'react-router-dom';

const Login: React.FC = () => {

      return (
            <>
                  <LayoutLogin
                        title={'Login'}
                        primaryButton='Login'
                        secondaryButton='Cadastrar-se'
                        rotaVoltar='/cadastrar'
                        formulario={
                              <Form className='formulario' method='post' action=''>
                                    <PrimaryInput inputType={InputType.EMAIL} nameForm='email' placeHolder='alex@email.com' textLabel='E-mail' icon={EmailIcon} />
                                    <PrimaryInput inputType={InputType.PASSWORD} nameForm='password' placeHolder='*****' icon={PasswordIcon} textLabel='Password' />
                                    <Link to={"/esqueceu-senha"}><span>Forgot password?</span></Link>
                              </Form>
                        } />
            </>
      )
}
export default Login;