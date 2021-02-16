const sql = require('../datebase');
//POST insert
exports.createPerson = (req, res) => {
    var person = {
        "Id": req.body.Id,
        "Name": req.body.Name,
        "Age": req.body.Age,
        "profession": req.body.profession,
        "Email": req.body.Email,
        "phone": req.body.phone
    }
    sql.query('INSERT INTO person SET ?', person, (err, data)=>{
        if (err) {
            console.log('error:', err);
            return
        }
        if (data.length) {
            console.log('result', data[0])
            return            
        }
    })
    res.send({
        "code":200,
        "success":"user registered sucessfully"
    });
}

//PUT- Modificar
exports.updatePerson = (req, res) => {
    var condition = {"Id": req.body.Id}
    sql.query("update person SET ? WHERE ?",[req.body, condition],(err, data)=>{
        if (err) {
            console.log('error:', err);
            return
        }
        if (data.length) {
            console.log('result', data[0]);
            return            
        }
    })
    res.json({
        data: 'updated ok'
    })
}

//GET Traer
exports.readPersonUnique = (req, res) => {
    console.log(req.params.id);
    sql.query('select * from person WHERE Id=' + req.params.idper, (err, data)=>{
        if (err) {
            console.log('error:', err);
            return
        }
        if (data.length) {
            console.log('result', data[0]);
            res.send(data[0])
            return            
        }
    })
}

exports.readPerson = (req, res) => {
    sql.query('select * from person', (err, data)=>{
        if (err) {
            console.log('error:', err);
            return
        }
        if (data.length) {
            console.log('result', data[0]);
            res.send(data)
            return            
        }
    })
}


exports.deletePerson = (req, res) => {
    sql.query('delete from person where Id ='+ req.params.idper, (err, data)=>{
        if (err) {
            console.log('error:', err);
            return
        }
        if (data.length) {
            console.log('result', data[0]);
            return            
        }
    })
    res.json({
        data: 'deleted'
    })
}