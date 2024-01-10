import './global.css';

import { RouterProvider } from 'react-router-dom';

import { router } from './routes';

function App() {
  return <h1>app</h1>;
  return <RouterProvider router={router} />;
}

export default App;
