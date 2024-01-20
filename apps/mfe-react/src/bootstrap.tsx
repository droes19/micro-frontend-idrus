// import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './app/app';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
// class Mfe4Element extends HTMLElement {
//   connectedCallback() {
//     root.render(
//       <StrictMode>
//         <App />
//       </StrictMode>
//     );
//   }
// }
class Mfe4Element extends HTMLElement {
  connectedCallback() {
    console.log('mfe-react-element connectedCallback from DOM');

    window.React = React;
    ReactDOM.render(<App />, this);
  }

  disconnectedCallback() {
    console.log('mfe-react-element disconnectedCallback from DOM');
  }
}

customElements.define('mfe-react-element', Mfe4Element);