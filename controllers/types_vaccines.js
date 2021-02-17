const sql = require('../datebase');
//POST insert
exports.createTypes_vaccines = (req, res) => {
    var typesVacci = {
        "Id": req.body.Id,
        "Name": req.body.Name,
        "Quantity": req.body.Quantity,
        "Expiration": req.body.Expiration,
    }
    sql.query('INSERT INTO types_vaccines SET ?', typesVacci, (err, data)=>{
        if (err) {
            console.log('error:', err);
            return
        }
        if (data.length) {
            console.log('result', data[0]);
            return            
        }
    })
    res.send({
        "code":200,
        "success":"user registered sucessfully"
    });
}

exports.updateType_vaccinate = (req, res) => {
    var condition = {"Id": req.body.Id}
    sql.query("update Type_vaccinate SET ? WHERE ?",[req.body, condition], (err, data)=>{
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

exports.readType_vaccinateUnique = (req, res) => {
    console.log(req.params.id);
    sql.query('select * from types_vaccines WHERE Id=' + req.params.idvaccine, (err, data)=>{
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

exports.readType_vaccinate = (req, res) => {
    sql.query('select * from Type_vaccinate', (err, data)=>{
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

exports.deleteType_vaccinate = (req, res) => {
    sql.query('delete from Type_vaccinate where Id ='+ req.params.idper, (err, data)=>{
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