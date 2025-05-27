// src/features/tables/TableForm.jsx
import { useState } from 'react';
import { createTable } from '@/services/tables.api';

export default function TableForm({ onSuccess }) {
  const [form, setForm] = useState({ idtable: '', designation: '', occupation: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: name === 'occupation' ? value === 'true' : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.idtable || !form.designation) return alert("Champs requis !");
    try {
      await createTable(form);
      onSuccess();
      setForm({ idtable: '', designation: '', occupation: false });
    } catch (err) {
      alert("Erreur lors de la création");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <input name="idtable" type="text" placeholder="Numéro" className="form-input" value={form.idtable} onChange={handleChange} />
      <input name="designation" type="text" placeholder="Désignation" className="form-input" value={form.designation} onChange={handleChange} />
      <select name="occupation" className="form-select" value={form.occupation} onChange={handleChange}>
        <option value="false">Libre</option>
        <option value="true">Occupée</option>
      </select>
      <button className="btn btn-success" type="submit">Ajouter Table</button>
    </form>
  );
}
