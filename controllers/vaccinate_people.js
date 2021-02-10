const sql = require('../datebase');

exports.createVaccinate_people = (req, res) => {
    sql.query('INSERT INTO vaccinate_people( Id, id_person, Date, id_careCenter, id_vaccines, Quantity) VALUE', (err, res)=>{
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
exports.updateVaccinate_people = (req, res) => {
    sql.query("update vaccinate_people SET Quantity=10 where id='0'", (err, res)=>{
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


exports.readVaccinate_people = (req, res) => {
    sql.query('select * vaccinate_people', (err, res)=>{
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
exports.deleteVaccinate_people = (req, res) => {
    sql.query('delete from vaccinate_people where Id =0', (err, res)=>{
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