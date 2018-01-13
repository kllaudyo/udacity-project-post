import React from 'react';
import ReactDOM from 'react-dom';
import HomeView from './index.js';

it('Renderizar HomeView', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HomeView />, div);
});
