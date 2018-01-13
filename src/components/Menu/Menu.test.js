import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';

it('Verifica se renderiza sem erros!', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Menu/>, div);
});
