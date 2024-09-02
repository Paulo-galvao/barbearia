const express = require('express');
const router = express.Router();
const cliente_controllers = require('../controllers/cliente.js');

router.post('/', (req, res) => {
    const code = cliente_controllers.store(req.body);
    res.status(code).json();
});

router.get('/', (req, res) => {
    res.json(cliente_controllers.showAll())
});

router.get('/:id', (req, res) => {
    res.json(cliente_controllers.showById(req.params.id));
});

router.put('/:id', (req, res) => {
    const code = cliente_controllers.update(req.body, req.params.id);
    res.status(code).json();
});

router.delete('/:id', (req,res) => {
    const code = cliente_controllers.destroy(req.params.id);
    res.status(code).json();
});

module.exports = router;