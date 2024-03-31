import React from 'react';
import LayoutLogin from '../components/layout_login';
import PrimaryInput from '../components/primaryInput';
import { InputType } from "../enum/types";
import EmailIcon from '../assets/email-icon.svg';
import PasswordIcon from '../assets/password-iconsvg.svg';

const Login: React.FC = () => {

      return (
            <>
                  <LayoutLogin
                        title={'Titulo'}
                        primaryButton='Login'
                        secondaryButton='Cadastrar-se'
                        formulario={
                              <form className='formulario'>
                                    <PrimaryInput inputType={InputType.EMAIL} nameForm='email' placeHolder='alex@email.com' textLabel='E-mail' icon={EmailIcon} />
                                    <PrimaryInput inputType={InputType.PASSWORD} nameForm='password' placeHolder='*****' icon={PasswordIcon} textLabel='Password' />
                                    <span>Forgot password?</span>
                              </form>
                        } />
            </>
      )
}
export default Login;