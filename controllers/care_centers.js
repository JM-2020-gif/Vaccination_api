const sql = require('../datebase');

exports.createCare_centers = (req, res) => {
    var centers = {
        "Id": req.body.Id,
        "Name": req.body.Name,
        "Direction": req.body.Direction,
        "Schedule": req.body.Schedule,
        "TypeOfVaccines": req.body.TypeOfVaccines
    }
    sql.query('INSERT INTO Care_centers SET ?', centers, (err, res)=>{
        if (err) {
            console.log('error:', err);
            return
        }
        if (res.length) {
            console.log('result', res[0]);
            return            
        }
    })
    res.send({
        "code":200,
        "success":"user registered sucessfully"
    });
}
exports.updateCare_centers = (req, res) => {
    sql.query("update Care_centers SET ? WHERE ?", [req.body, condition],(err, res)=>{
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
exports.readCare_centers = (req, res) => {
    sql.query('select * from Care_centers', (err, res)=>{
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

exports.deleteCare_centers = (req, res) => {
    sql.query('delete from Care_centers where Id'+ req.params.idper, (err, res)=>{
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