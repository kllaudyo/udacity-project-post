import React from 'react';
import ReactDOM from 'react-dom';
import PostView from './index.js';

it('Renderizar HomeView', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PostView id="teste id" />, div);
});
