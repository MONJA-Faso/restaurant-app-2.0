// src/features/tables/TableList.jsx
import { useEffect, useState } from 'react';
import { fetchTables } from '@/services/tables.api';
import TableRow from './TableRow';
import TableForm from './TableForm';

export default function TableList() {
  const [tables, setTables] = useState([]);

  const loadTables = async () => {
    const res = await fetchTables();
    setTables(res.data);
  };

  useEffect(() => {
    loadTables();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Gestion des Tables</h2>
      <TableForm onSuccess={loadTables} />
      <table className="data-table mt-6">
        <thead>
          <tr>
            <th>Numéro</th>
            <th>Désignation</th>
            <th>Statut</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tables.map(table => (
            <TableRow key={table.idtable} table={table} onRefresh={loadTables} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
