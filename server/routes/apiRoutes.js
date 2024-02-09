const express = require('express');
const router = express.Router();

// Importez vos contrôleurs ici

// Exemple de route
router.get('/', (req, res) => {
    res.send('API is running');
});

module.exports = router;
