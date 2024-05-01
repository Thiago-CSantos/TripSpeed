import React from 'react';
import { InputType } from "../enum/types";
import LayoutLogin from '../components/layout_login';
import EmailIcon from '../assets/email-icon.svg';
import PasswordIcon from '../assets/icons8-fechadura-aberta.svg';
import PrimaryInput from '../components/primaryInput';

const Cadastrar: React.FC = () => {
      return (
            <>
                  <LayoutLogin
                        title='Cadastrar funcionário'
                        primaryButton='Cadastrar'
                        secondaryButton='Voltar'
                        rotaVoltar='/login'
                        formulario={
                              <form className='formulario'>
                                    <PrimaryInput
                                          textLabel='Nome'
                                          nameForm='nome'
                                          placeHolder='Nome do funcionário'
                                          inputType={InputType.EMAIL}
                                          icon={EmailIcon}
                                    />
                                    <PrimaryInput
                                          textLabel='E-mail'
                                          nameForm='email'
                                          placeHolder='E-mail'
                                          inputType={InputType.EMAIL}
                                          icon={EmailIcon}
                                    />
                                    <PrimaryInput
                                          textLabel='Senha'
                                          nameForm='senha'
                                          placeHolder='******'
                                          inputType={InputType.PASSWORD}
                                          icon={PasswordIcon}
                                    />
                                    <PrimaryInput
                                          textLabel='Repita senha'
                                          nameForm='senha'
                                          placeHolder='******'
                                          inputType={InputType.PASSWORD}
                                          icon={PasswordIcon}
                                    />
                              </form>
                        }
                  />
            </>
      );
};

export default Cadastrar;