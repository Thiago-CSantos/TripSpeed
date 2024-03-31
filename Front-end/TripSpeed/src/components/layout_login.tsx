import React from "react";
import amico from "../assets/laoyout-ilustration.svg";
import delivre from "../assets/teste.svg";
import logo from "../assets/logo-editor.svg";

import '../styles/layout.css'
import { Link } from "react-router-dom";

interface LayoutPorps {
      title: string;
      primaryButton: string;
      secondaryButton: string;
      formulario: React.ReactNode;
}

const LayoutLogin: React.FC<LayoutPorps> = ({ title, primaryButton, secondaryButton, formulario }) => {


      return (
            <>
                  <main>
                        <section className="form-section">
                              <img src={logo} alt="Logo" />
                              <h2>{title}</h2>
                              {formulario}
                              <div className="btn-wrapper">
                                    <button className="btn-primary">{primaryButton}</button>
                                    <div className="divider">
                                          <div></div>
                                          <span>ou</span>
                                          <div></div>
                                    </div>
                                    <Link to={'/cadastrar'} style={{width: '100%'}}><button className="btn-secondary">{secondaryButton}</button></Link>
                              </div>
                        </section>
                        <section className="main-section">
                              <h2>You Should, moveIt</h2>
                              <img src={delivre} alt="ilustrations" width={597} height={534}/>
                        </section>
                  </main>
            </>
      )
}

export default LayoutLogin;