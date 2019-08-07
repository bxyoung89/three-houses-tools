import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/global.scss';
import App from './App';
import TranslationService from './services/translationService';
document.getElementsByTagName('html')[0].setAttribute('lang', TranslationService.currentLanguage);
ReactDOM.render(<App />, document.getElementById('root'));