import React from 'react';
import ReactDOM from 'react-dom';
import MenuItem from './MenuItem';

it('Verifica se renderiza sem erros!', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MenuItem index="test"/>, div);
});
