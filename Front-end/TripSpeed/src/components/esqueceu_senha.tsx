import React from "react";
import { Link } from "react-router-dom";

const Esqueceu_senha: React.FC = () => {
    return (
        <>
            <section>
                <div className="fixed inset-0 flex items-center justify-center">
                    <div className="p-6 mx-auto bg-white rounded-xl shadow-lg flex flex-col items-center modal">
                        <div className="columns-1 pb-3 title">
                            <h1 className="text-lg font-bold">Insira o e-mail cadastrado, para receber código de recuperação</h1>
                        </div>
                        <div className="style-input flex ">
                            <p className="text-slate-950 font-semibold mr-3">E-mail:</p>
                            <input type="email" name="email-esqueceu" id="emailEsqueceu" className="border rounded-md" />
                        </div>
                        <div className="mt-1">
                            <Link to={'/login'}>
                                <button className=" outline-dashed bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-3 border border-blue-500 hover:border-transparent rounded">
                                    Voltar
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Esqueceu_senha;