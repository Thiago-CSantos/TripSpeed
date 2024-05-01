import React from "react";
import delivre from "../assets/teste.svg";
import logo from "../assets/logo-editor.svg";

import '../styles/layout.css'
import { Link } from "react-router-dom";

interface LayoutPorps {
      title: string;
      primaryButton: string;
      secondaryButton: string;
      formulario: React.ReactNode;
      rotaVoltar: string;
}

const LayoutLogin: React.FC<LayoutPorps> = ({ title, primaryButton, secondaryButton, formulario, rotaVoltar }) => {


      return (
            <>
                  <main>
                        <section className="form-section">
                              <img src={logo} alt="Logo" />
                              <h2>{title}</h2>
                              {formulario}
                              <div className="btn-wrapper">
                                    <button className="btn-primary" type="submit">{primaryButton}</button>
                                    <div className="divider">
                                          <div></div>
                                          <span>ou</span>
                                          <div></div>
                                    </div>
                                    <Link to={rotaVoltar} style={{width: '100%'}}><button className="btn-secondary">{secondaryButton}</button></Link>
                              </div>
                        </section>
                        <section className="main-section">
                              <h2 style={{textAlign: 'center'}}>TripSpeed, <br />Gestão Inteligente de Despesas,<br />Viagens Corporativas</h2>
                              <img className="hidde-image" src={delivre} alt="ilustrations" width={597} height={534}/>
                        </section>
                  </main>
            </>
      )
}

export default LayoutLogin;