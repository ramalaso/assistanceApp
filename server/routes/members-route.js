const express = require('express');
const Member = require('../models/Member');
const memberCtrl = require('../controllers/members-controller');

const router = express.Router();

router.post('/', memberCtrl.createMember);
router.get('/', memberCtrl.getMembers);
router.put('/:id', memberCtrl.updateMember);

module.exports = router;