export const validateUser = (req, res, next) => {
  const { name, email, password, age } = req.body;

  if (!name) return res.status(400).json({ error: 'Name required' });
  if (!email || !email.includes('@'))
    return res.status(400).json({ error: 'Invalid email' });
  if (!password || password.length < 8)
    return res.status(400).json({ error: 'Password min 8 chars' });
  if (age && age < 18)
    return res.status(400).json({ error: 'Age must be >= 18' });

  next();
};
