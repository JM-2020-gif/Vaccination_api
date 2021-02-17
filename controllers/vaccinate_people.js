const sql = require('../datebase');
//POST insert
exports.createVacciPeople = (req, res) => {
    var vacciPeople = {
        "Id": req.body.Id,
        "Id_person": req.body.Id_person,
        "Date": req.body.Date,
        "Id_careCenter": req.body.Id_careCenter,
        "Id_vaccines": req.body.Id_vaccines,
        "Quantity": req.body.Quantity
    }
    sql.query('INSERT INTO vaccinate_people SET ?', vacciPeople, (err, data)=>{
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

exports.updateVaccinate_people = (req, res) => {
    sql.query("update vaccinate_people SET ? WHERE ?",[req.body, condition],(err, res)=>{
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
        data: 'update ok'
    })
}


exports.readVaccinate_peopleUnique = (req, res) => {
    console.log(req.params.id);
    sql.query('select * vaccinate_people WHERE Id=' + req.params.idVaccinePeople,  (err, data)=>{
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


exports.deleteVaccinate_people = (req, res) => {
    sql.query('delete from Vaccinate_people where Id =' + req.params.idVaccinePeople, (err, data)=>{
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