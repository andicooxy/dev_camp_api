const express = require('express');
const { getBootcamps, updateBootcamps, deleteBootcamps, getBootcampsById, createBootcamps } = require('../controllers/bootcamps');
const router = express.Router();

router.route('/')
    .post(createBootcamps)
    .get(getBootcamps);

router.route('/:id')
    .get(getBootcampsById)
    .delete(deleteBootcamps)
    .put(updateBootcamps);

module.exports = router