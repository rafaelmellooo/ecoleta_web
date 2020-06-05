import React from 'react';

import { FiCheckCircle } from 'react-icons/fi';

import './styles.css';

const Success: React.FC = () => (
  <div id="success">
    <h1>
      <FiCheckCircle />
      <strong>Cadastro concluído!</strong>
    </h1>
  </div>
);

export default Success;
