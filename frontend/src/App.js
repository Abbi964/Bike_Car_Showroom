import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import './App.css';
import Homepage from './pages/Homepage';
import VehiclesPage from './pages/VehiclesPage';
import VehiclePage from './pages/VehiclePage';
import BookAppointment from './pages/BookAppointment';

const router = createBrowserRouter([
  {path : '/' , element : <Homepage/>},
  {path : '/vehicles' , element : <VehiclesPage/>},
  {path : '/vehicles/:vehicleId' , element : <VehiclePage/>},
  {path : '/appointment' , element : <BookAppointment/>},
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
