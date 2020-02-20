// @desc       Get all bootcamps
// @rout       Get /api/v1/bootcamps
// @access     Public
exports.getBootcamps = (req, res) => {
    res.send({
        success: true,
        data: {
            message: 'Working now'
        }
    });
}


// @desc       Create new bootcamps
// @rout       Post /api/v1/bootcamps
// @access     Private
exports.createBootcamps = (req, res) => {
    res.send({ success: true, data: { message: 'Saved successfuly' } })

}



// @desc       update  bootcamps
// @rout       Put /api/v1/bootcamps/:id
// @access     Private
exports.updateBootcamps = (req, res) => {
    res.send({ success: true, data: { message: 'Updateed successfuly' } })

}



// @desc       update  bootcamps
// @rout       Delete /api/v1/bootcamps/:id
// @access     Private
exports.deleteBootcamps = (req, res) => {
    res.status(404).send({
        success: false,
        data: {
            message: `Not deleted ${ req.params.id }`

        }
    })
}


// @desc       Get by Id  bootcamps
// @rout       Get /api/v1/bootcamps/:id
// @access     Public
exports.getBootcampsById = (req, res) => {
    res.status(404).send({
        success: false,
        data: {
            message: `Not found ${ req.params.id }`

        }
    })
}