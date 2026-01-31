import { supabase } from '../config/supabase.js';

export const createUser = async (data) =>
  supabase.from('users').insert([data]).select();

export const getUsers = async () =>
  supabase.from('users').select('*');

export const getUserById = async (id) =>
  supabase.from('users').select('*').eq('id', id).single();

export const updateUser = async (id, data) =>
  supabase.from('users').update(data).eq('id', id).select();

export const deleteUser = async (id) =>
  supabase.from('users').delete().eq('id', id);
