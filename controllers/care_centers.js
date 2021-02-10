const sql = require('../datebase');

exports.createCare_centers = (req, res) => {
    sql.query('INSERT INTO Care_centers( Id, Name, Direction, Schedule, TypesOfVaccines) VALUE', (err, res)=>{
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
exports.updateCare_centers = (req, res) => {
    sql.query("update Care_centers SET Name='Reykjavik' where id='0'", (err, res)=>{
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
    sql.query('delete from Care_centers where Id =0', (err, res)=>{
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