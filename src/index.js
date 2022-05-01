import React from 'react'
import App from './App'
import { createRoot } from 'react-dom/client';
import 'uimini'
import './assets/scss/main.scss'

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);