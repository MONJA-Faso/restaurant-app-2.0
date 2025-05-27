// src/features/tables/TableRow.jsx
import { deleteTable, libererTable, updateTable } from '@/services/tables.api';
import { Trash2, Edit2, DoorOpen } from 'lucide-react';

export default function TableRow({ table, onRefresh }) {
  const handleDelete = async () => {
    if (!confirm("Supprimer cette table ?")) return;
    await deleteTable(table.idtable);
    onRefresh();
  };

  const handleToggle = async () => {
    await updateTable(table.idtable, {
      designation: table.designation,
      occupation: !table.occupation
    });
    onRefresh();
  };

  return (
    <tr>
      <td>{table.idtable}</td>
      <td>{table.designation}</td>
      <td>
        <span className={`px-3 py-1 rounded-full text-white text-sm ${table.occupation ? 'bg-red-500' : 'bg-green-500'}`}>
          {table.occupation ? 'Occupée' : 'Libre'}
        </span>
      </td>
      <td className="flex gap-2">
        <button onClick={handleToggle} className="btn"><DoorOpen size={16} /></button>
        <button onClick={handleDelete} className="btn btn-danger"><Trash2 size={16} /></button>
      </td>
    </tr>
  );
}
