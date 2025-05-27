// === components/Navbar.jsx ===
import { NavLink } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'Dashboard' },
  { path: '/tables', label: 'Tables' },
  { path: '/menu', label: 'Menu' },
  { path: '/commandes', label: 'Commandes' },
  { path: '/reservations', label: 'Réservations' },
  { path: '/stats', label: 'Statistiques' }
];

export default function Navbar() {
  return (
    <header className="backdrop-blur bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
      <nav className="flex flex-wrap gap-3 justify-center">
        {navItems.map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            end
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg font-semibold transition hover:bg-white/20 ${
                isActive ? 'bg-white/30 shadow-md' : ''
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}