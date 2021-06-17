import { render } from 'preact';
import { App } from './app';
import './styles/main.scss';

const app = document.getElementById('app');

if (app) render(<App />, app);
