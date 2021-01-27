window.addEventListener('load', () => {
    const alertbar = document.querySelectorAll('.alertbar');
    for (let i = 0; i < alertbar.length; i++) {
        alertbar[i].style.display = "none";
    };
    // 姓名
    const regName = /^[a-zA-Z0-9]{4,8}$/;
    const nameipt = document.querySelector('#nameipt');
    let nameflag = false;
    nameipt.addEventListener('blur', function () {
        alertfn.call(nameipt, regName, 0, '英文4-8字', function () {
            nameflag = true;
        }, function () {
            namefalg = false;
        });
    });
    // 性別
    const sex = document.querySelectorAll('#sexId');
    let sexflag = false;
    for (let i = 0; i < sex.length; i++) {
        if (!sex[i].checked) {
            alertbar[1].style.display = "block";
            alertbar[1].style.color = "red";
            alertbar[1].innerHTML = '＊請勾選性別';
        };
        sex[i].addEventListener('click', function () {
            alertbar[1].style.display = "block";
            alertbar[1].style.color = "green";
            alertbar[1].innerHTML = '格式正確';
            sexflag = true;
        });
    };
    // 年齡
    const age = document.querySelector('#ageId');
    const regAge = /^[0-9]{1,3}$/
    let ageflag = false;
    age.addEventListener('blur', function () {
        alertfn.call(age, regAge, 2, '1-3位數字', function () {
            ageflag = true;
        }, function () {
            ageflag = false;
        });
    });
    // 封裝alert
    let alertfn = function (reg, k, content, tflag, fflag) {
        if (reg.test(this.value)) {
            alertbar[k].style.display = "block";
            alertbar[k].style.color = "green";
            alertbar[k].innerHTML = '格式正確';
            tflag();
        } else {
            alertbar[k].style.display = "block";
            alertbar[k].style.color = "red";
            alertbar[k].innerHTML = '＊請輸入' + content;
            fflag();
        };
    };
    // 提交按鈕
    const btn = document.querySelector('#btnId');
    document.addEventListener('mouseover', function () {
        if (sexflag === true && nameflag === true && ageflag === true) {
            btn.disabled = false;
        } else {
            btn.disabled = true;
        };
    });
});

