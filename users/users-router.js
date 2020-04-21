const router = require('express').Router();

const Users = require('./users-model');

router.get('/', async (req, res) => {
  try {
    const user = await Users.find();
    res.status(200).json(user);
  } catch(error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
