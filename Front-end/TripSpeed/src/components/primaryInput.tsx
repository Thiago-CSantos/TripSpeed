import React from 'react';
import '../styles/primaryInput.css';

enum InputType {
      TEXT = "text",
      EMAIL = "email",
      PASSWORD = "password"
}

interface Types {
      inputType: InputType;
      placeHolder: string;
      nameForm: string;
      textLabel: string;
      icon: string;
}

const PrimaryInput: React.FC<Types> = ({ inputType, placeHolder, nameForm, textLabel, icon }) => {
      return (
            <div className="input-wrapper">
                  <label htmlFor={nameForm}>{textLabel}</label>
                  <div className="input-content">
                        <input className='style-input' type={inputType} name={nameForm} placeholder={placeHolder} required/>
                        <div className="icon">
                              <img src={icon} alt="email-icon" width={20} />
                        </div>
                  </div>
            </div>
      )
}

export default PrimaryInput;