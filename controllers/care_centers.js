const sql = require('../datebase');

exports.createCare_centers = (req, res) => {
    var centers = {
        "Id": req.body.Id,
        "Name": req.body.Name,
        "Direction": req.body.Direction,
        "Schedule": req.body.Schedule,
        "TypeOfVaccines": req.body.TypeOfVaccines
    }
    sql.query('INSERT INTO Care_centers SET ?', centers, (err, data)=>{
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

exports.updateCare_centers = (req, res) => {
    var condition = {"Id": req.body.Id}
    sql.query("update Care_centers SET ? WHERE ?", [req.body, condition],(err, data)=>{
        if (err) {
            console.log('error:', err);
            return
        }
        if (res.length) {
            console.log('result', data[0]);
            return            
        }
    })
    res.json({
        data: 'ok'
    })
}
exports.readCare_centersUnique = (req, res) => {
    console.log(req.params.id);
    sql.query('select * from Care_centers WHERE Id=' + req.params.idper, (err, data)=>{
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

exports.readCare_center = (req, res) => {
    sql.query('select * from Care_centers', (err, data)=>{
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

exports.deleteCare_centers = (req, res) => {
    sql.query('delete from Care_centers where Id'+ req.params.idcare, (err, data)=>{
        if (err) {
            console.log('error:', err);
            return
        }
        if (dta.length) {
            console.log('result', data[0]);
            return            
        }
    })
    res.json({
        data: 'deleted Care Center'
    })
}