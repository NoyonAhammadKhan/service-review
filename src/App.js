import logo from './logo.svg';
import './App.css';
import Header from './pages/Shared/Header/Header';
import Login from './pages/Login/Login';
import { RouterProvider } from 'react-router-dom';
// import routes from './Router/Routes/Routes';
import router from './Router/Routes/Routes';

function App() {
  return (
  <div>
    <RouterProvider router={router}>
        
    </RouterProvider>
  </div>
  );
}

export default App;
