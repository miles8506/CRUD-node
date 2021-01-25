const fs = require('fs');
// 首頁
exports.find = (callback) => {
    fs.readFile('./source.json', (err, data) => {
        if (err) {
            return callback(err);
        };
        data = JSON.parse(data).members;
        callback(null, data);
    });
};

// 新增成員
exports.increase = (callback) => {
    fs.readFile('./views/new.html', (err, data) => {
        if (err) {
            return callback(err);
        }
        callback(null);
    });
};
exports.increaseGet = (member, callback) => {
    fs.readFile('./source.json', (err, data) => {
        if (err) {
            return callback(err);
        };
        let members = JSON.parse(data).members;
        member.id = members[members.length - 1].id + 1;
        member.id = parseInt(member.id);
        members.push(member);
        members = JSON.stringify({ members });
        fs.writeFile('./source.json', members, (err) => {
            if (err) {
                return callback(err);
            };
            callback(null);
        });
    });
};

// 修改成員
exports.edit = (getId, callback) => {
    fs.readFile('./source.json', (err, data) => {
        if (err) {
            return callback(err);
        };
        let members = JSON.parse(data).members;
        let member = members.find((value) => {
            return value.id === parseInt(getId);
        });
        callback(null, member);
    });
};
exports.editGet = (member, callback) => {
    fs.readFile('./source.json', (err, data) => {
        if (err) {
            return callback(err)
        };
        member.id = parseInt(member.id);
        let members = JSON.parse(data).members;
        var getId = members.findIndex((value) => {
            return value.id === parseInt(member.id)
        });
        for (let k in member) {
            members[getId][k] = member[k];
        };
        members = JSON.stringify({ members });
        fs.writeFile('./source.json', members, (err) => {
            if (err) {
                return callback(err);
            };
            callback(null);
        });
    });
};

// 刪除
exports.del = (getId, callback) => {
    fs.readFile('./source.json', (err, data) => {
        if (err) {
            return callback(err);
        };
        let members = JSON.parse(data).members;
        var Id = members.findIndex((value) => {
            return value.id === parseInt(getId);
        })
        members.splice(Id, 1);
        members = JSON.stringify({ members });
        fs.writeFile('./source.json', members, (err) => {
            if (err) {
                return callback(err);
            };
            callback(null);
        });
    });
};