const express = require('express');
const course = require('./course.js');
const router = express.Router();

// 首頁
router.get('/', (req, res) => {
    course.find((err, members) => {
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
    course.increase((err) => {
        if (err) {
            return res.status(500).end('Server error');
        };
        res.render('./new.html');
    });
});
router.post('/new', (req, res) => {
    course.increaseGet(req.body, (err) => {
        if (err) {
            return res.status(500).end('Server error');
        };
        res.redirect('/');
    });
});

// 修改成員
router.get('/edit', (req, res) => {
    course.edit(req.query.id, (err, member) => {
        if (err) {
            return res.status(500).end('Server error');
        };
        res.render('./edit.html', {
            member: member
        });
    });
});
router.post('/edit', (req, res) => {
    course.editGet(req.body, (err) => {
        if (err) {
            return res.status(500).end('Server error');
        };
        res.redirect('/');
    });
});

// 刪除
router.get('/delete', (req, res) => {
    course.del(req.query.id, (err) => {
        if (err) {
            return res.status(500).end('Server error');
        };
        res.redirect('/');
    });
});

module.exports = router;
