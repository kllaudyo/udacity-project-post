import React from 'react';
import ReactDOM from 'react-dom';
import Card from './index.js';

it('Verifica se renderiza sem erros!', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card title="Titulo" desc="descrição" />, div);
});
