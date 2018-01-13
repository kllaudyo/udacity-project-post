import React from 'react';
import ReactDOM from 'react-dom';
import Header from './index.js';

it('Verifica se renderiza sem erros!', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header brand="teste" />, div);
});
