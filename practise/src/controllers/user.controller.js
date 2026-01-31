import bcrypt from 'bcrypt';
import * as service from '../services/users.service.js';

export const createUser = async (req, res, next) => {
  try {
    const hashed = await bcrypt.hash(req.body.password, 10);
    const { data, error } = await service.createUser({
      ...req.body,
      password: hashed
    });

    if (error) throw error;
    res.status(201).json(data);
  } catch (err) {
    next(err);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const { data, error } = await service.getUsers();
    if (error) throw error;
    res.json(data);
  } catch (err) {
    next(err);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const { data, error } = await service.getUserById(req.params.id);
    if (error) return res.status(404).json({ error: 'User not found' });
    res.json(data);
  } catch (err) {
    next(err);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const { data, error } = await service.updateUser(req.params.id, req.body);
    if (error) throw error;
    res.json(data);
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const { error } = await service.deleteUser(req.params.id);
    if (error) throw error;
    res.json({ message: 'User deleted' });
  } catch (err) {
    next(err);
  }
};
