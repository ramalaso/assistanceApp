const Member = require('../models/Member');

var createMember = (req, res) => {
    const body = req.body;
    console.log(body);
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a member',
        });
    }

    const member = new Member(body);

    if (!member) {
        return res.status(400).json({ success: false });
    }

    member.save().then(() => {
        return res.status(200).json({
            success: true,
            id: member._id,
            message: 'Member item created',
        });
    })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'member item not created',
            });
        });
};

var getMembers = async (req, res) => {
    await Member.find({}, (err, member) => {
        if (err) {
            return res.status(400).json({ success: false, error: err });
        }
        if (!member.length) {
            return res
                .status(404)
                .json({ success: false, error: `Item not found` });
        }
        return res.status(200).json({ success: true, data: member });
    }).catch(err => console.log(err));
};

var updateMember = async (req, res) => {
    var actualMember = await Member.findById(req.params.id);
    console.log(req.params);
    console.log(actualMember);
    await Member.findByIdAndUpdate(req.params.id, { assistance: !actualMember.assistance }, (err, member) => {
        if (err) {
            return res.status(400).json({ success: false, error: err });
        }
        return res.status(200).json({ success: true, data: member });
    }).catch(err => console.log(err));
};

module.exports = { createMember, getMembers, updateMember };