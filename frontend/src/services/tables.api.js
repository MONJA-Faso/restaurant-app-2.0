// src/services/tables.api.js
import api from './api';

export const fetchTables = () => api.get('/tables');
export const createTable = (data) => api.post('/tables', data);
export const updateTable = (idtable, data) => api.put(`/tables/${idtable}`, data);
export const deleteTable = (idtable) => api.delete(`/tables/${idtable}`);
export const libererTable = (idtable) => api.put(`/tables/liberer/${idtable}`);
