const { query } = require('express');
const express = require('express');
const members = require('./members.js');
const router = express.Router();
// 首頁
router.get('/', (req, res) => {
    members.find((err, members) => {
        if (err) {
            return res.status(500).end('Server error');
        };
        res.render('./index.html', {
            member: members
        });
    });
});

// 新增成員
router.get('/new', (req, res) => {
    members.find((err) => {
        if (err) {
            return res.status(500).end('Server error');
        };
        res.render('./new.html');
    });
});
router.post('/new', (req, res) => {
    new members(req.body).save(req.body, (err) => {
        if (err) {
            return res.status(500).end('Server error');
        };
        res.redirect('/');
    });
});

// 修改成員
router.get('/edit', (req, res) => {
    members.findOne(({ _id: req.query.id }), (err, members) => {
        if (err) {
            return res.status(500).end('Server error');
        };
        console.log(members);
        res.render('./edit.html', {
            member: members
        });
    });
});
router.post('/edit', (req, res) => {
    const Id = req.body.id.replace(/"/g, '');
    members.findByIdAndUpdate(({ _id: Id }), (req.body), (err, ret) => {
        if (err) {
            return res.status(500).end('Server error');
        };
        res.redirect('/');
    });
});

// 刪除
router.get('/delete', (req, res) => {
    const Id = req.query.id.replace(/"/g, '');
    members.findByIdAndRemove(({ _id: Id }), (err, ret) => {
        if (err) {
            return res.status(500).end('Server error');
        };
        res.redirect('/');
    });
});
module.exports = router;