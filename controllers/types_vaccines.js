const sql = require('../datebase');

exports.createType_vaccinate = (req, res) => {
    sql.query('INSERT INTO Type_vaccinate( Id, Name, Quantity, Expiration) VALUE', (err, res)=>{
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
exports.updateType_vaccinate = (req, res) => {
    sql.query("update Type_vaccinate SET Name='luis' where id='0'", (err, res)=>{
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
exports.readType_vaccinate = (req, res) => {
    sql.query('select * from types_vaccines WHERE Id=' + req.params.id, (err, res)=>{
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
exports.deleteType_vaccinate = (req, res) => {
    sql.query('delete from Type_vaccinate where Id =0', (err, res)=>{
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