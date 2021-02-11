const sql = require('../datebase');

exports.createPerson = (req, res) => {
    var person = {
        "Id": req.body.Id,
        "Name": req.body.Name,
        "Age": req.body.Age,
        "profession": req.body.profession,
        "Email": req.body.Email,
        "phone": req.body.phone
    }
    sql.query('INSERT INTO person SET ?', person, (err, res)=>{
        if (err) {
            console.log('error:', err);
            return
        }
        if (res.length) {
            console.log('result', res[0])
            return            
        }
    })
    res.send({
        "code":200,
        "success":"user registered sucessfully"
    });
}
exports.updatePerson = (req, res) => {
    var condition = {"Id": req.body.Id}
    sql.query("update person SET ? WHERE ?",[req.body, condition],(err, res)=>{
        if (err) {
            console.log('error:', err);
            return
        }
        if (res.length) {
            console.log('result', res[0]);
            return            
        }
    })
    res.json({
        data: 'ok'
    })
}

exports.readPersonUnique = (req, res) => {
    console.log(req.params.id);
    sql.query('select * from person WHERE Id' + req.params.idper, (err, res)=>{
        if (err) {
            console.log('error:', err);
            return
        }
        if (res.length) {
            console.log('result', res[0]);
            return            
        }
    })
    res.json({
        data: 'ok'
    })
}

exports.readPerson = (req, res) => {
    sql.query('select * from person', (err, res)=>{
        if (err) {
            console.log('error:', err);
            return
        }
        if (res.length) {
            console.log('result', res[0]);
            return            
        }
    })
    res.json({
        data: 'ok'
    })
}

exports.deletePerson = (req, res) => {
    sql.query('delete from person where Id'+ req.params.idper, (err, res)=>{
        if (err) {
            console.log('error:', err);
            return
        }
        if (res.length) {
            console.log('result', res[0]);
            return            
        }
    })
    res.json({
        data: 'ok'
    })
}