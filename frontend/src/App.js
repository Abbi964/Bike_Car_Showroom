import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import './App.css';
import Homepage from './pages/Homepage';
import VehiclesPage from './pages/VehiclesPage';

const router = createBrowserRouter([
  {path : '/' , element : <Homepage/>},
  {path : '/vehicles' , element : <VehiclesPage/>},
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
