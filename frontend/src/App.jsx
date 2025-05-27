// src/App.jsx
import { Outlet, NavLink } from 'react-router-dom';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-400 to-purple-600 text-white">
      <header className="p-4 backdrop-blur-sm bg-white/10 border-b border-white/20">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold">🍽️ RestauManager Pro</h1>
          <nav className="flex gap-4">
            <NavLink to="/dashboard" className={({ isActive }) => `tab-btn ${isActive ? 'active' : ''}`}>Dashboard</NavLink>
            <NavLink to="/tables" className={({ isActive }) => `tab-btn ${isActive ? 'active' : ''}`}>Tables</NavLink>
            <NavLink to="/menu" className={({ isActive }) => `tab-btn ${isActive ? 'active' : ''}`}>Menu</NavLink>
            <NavLink to="/commandes" className={({ isActive }) => `tab-btn ${isActive ? 'active' : ''}`}>Commandes</NavLink>
            <NavLink to="/reservations" className={({ isActive }) => `tab-btn ${isActive ? 'active' : ''}`}>Réservations</NavLink>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-4 bg-white text-black rounded-md mt-6 shadow">
        <Outlet />
      </main>
    </div>
  );
}
