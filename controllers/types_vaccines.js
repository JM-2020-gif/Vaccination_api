exports.createType_vaccinate = (req, res) => {
    console.log('request',req);
    let response = 'create mundo';
    res.json({
        data: response
    })
}
exports.updateType_vaccinate = (req, res) => {
    console.log('request',req);
    let response = 'update mundo';
    res.json({
        data: response
    })
}

exports.readType_vaccinate = (req, res) => {
    console.log('request',req);
    let response = 'read mundo';
    res.json({
        data: response
    })
}

exports.deleteType_vaccinate = (req, res) => {
    console.log('request',req);
    let response = 'delete mundo';
    res.json({
        data: response
    })
}