const express = require('express');
const router = express.Router();
const { getUserByEmail, addUser } = require('../models/userModels.js');
const bcrypt = require('bcryptjs');

const register = async (req, res) => {
  const { email, password, role } = req.body;

  if (!email || !password || !role) {
    return res.status(400).json({ error: "Пожалуйста, заполните все поля." });
  }

  try {
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ error: 'Этот пользователь уже существует. Пожалуйста, войдите.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await addUser({ email, password: hashedPassword, role });
    res.status(201).json({ message: 'Пользователь успешно зарегистрирован', user: newUser });
  } catch (err) {
    console.error('Error during registration:', err);  // Логируем ошибку
    res.status(500).json({ error: err.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Пожалуйста, заполните все поля." });
  }

  try {
    const user = await getUserByEmail(email);
    if (!user) {
      return res.status(404).json({ error: 'Этот пользователь не найден. Пожалуйста, зарегистрируйтесь.' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Неправильный пароль.' });
    }

    res.status(200).json({ message: 'Вход выполнен успешно.' });
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  register,
  login
};
