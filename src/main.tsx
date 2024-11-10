import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

function testOnly() {
  return (
    <div>
      <p> this is a test of the connection. </p>
    </div>
  );
};

createRoot(document.getElementById('root')!).render(
  testOnly()
  //<App />,
)
