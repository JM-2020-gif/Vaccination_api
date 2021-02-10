exports.createCare_centers = (req, res) => {
    console.log('request',req);
    let response = 'create mundo';
    res.json({
        data: response
    })
}
exports.updateCare_centers = (req, res) => {
    console.log('request',req);
    let response = 'update mundo';
    res.json({
        data: response
    })
}

exports.readCare_centers = (req, res) => {
    console.log('request',req);
    let response = 'read mundo';
    res.json({
        data: response
    })
}

exports.deleteCare_centers = (req, res) => {
    console.log('request',req);
    let response = 'delete mundo';
    res.json({
        data: response
    })
}