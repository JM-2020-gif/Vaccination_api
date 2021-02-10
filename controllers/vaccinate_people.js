exports.createVaccinate_people = (req, res) => {
    console.log('request',req);
    let response = 'create mundo';
    res.json({
        data: response
    })
}
exports.updateVaccinate_people = (req, res) => {
    console.log('request',req);
    let response = 'update mundo';
    res.json({
        data: response
    })
}

exports.readVaccinate_people = (req, res) => {
    console.log('request',req);
    let response = 'read mundo';
    res.json({
        data: response
    })
}

exports.deleteVaccinate_people = (req, res) => {
    console.log('request',req);
    let response = 'delete mundo';
    res.json({
        data: response
    })
}