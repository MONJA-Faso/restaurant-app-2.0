// === router/index.jsx ===
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Dashboard from '../features/dashboard/Dashboard';
import TableList from '../features/tables/TableList';
import Menu from '../features/menu/Menu';
import Commandes from '../features/commandes/Commandes';
import Reservations from '../features/reservations/Reservations';
import Stats from '../features/stats/Stats';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
    
      { path: 'tables', element: <TableList /> },
      { path: 'menu', element: <Menu /> },
      { path: 'commandes', element: <Commandes /> },
      { path: 'reservations', element: <Reservations /> },
      { path: 'stats', element: <Stats /> }
    ]
  }
]);

export default router;
