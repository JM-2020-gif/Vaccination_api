const sql = require('../datebase');

exports.createPerson = (req, res) => {
    sql.query('INSERT INTO person( Id, Name, Age, Profession, Email, Phone) VALUE', (err, res)=>{
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
exports.updatePerson = (req, res) => {
    sql.query("update person SET Name='luis' where id='0'", (err, res)=>{
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
    sql.query('delete from person where Id =0', (err, res)=>{
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