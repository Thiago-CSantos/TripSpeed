import React from 'react';
import Error404 from '../../assets/error.svg'

const Error: React.FC = () => {
      return (
            <>
                  <div style={{ textAlign: 'center', marginTop: '50px' }}>
                        <img src={Error404} alt="Error 404" width={500}/>
                        <h1>A página que você está procurando não foi encontrada.</h1>
                  </div>
            </>
      );
};

export default Error;