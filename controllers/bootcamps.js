const Bootcamp = require("../models/Bootcamp");

// @desc       Get all bootcamps
// @rout       Get /api/v1/bootcamps
// @access     Public
exports.getBootcamps = async(req, res, next) => {
    try {
        const bootcamps = await Bootcamp.find();
        res.status(200).json({
            success: true,
            data: {
                bootcamps: bootcamps
            }
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            data: { message: err.message }
        })
    }
};

// @desc       Create new bootcamps
// @rout       Post /api/v1/bootcamps
// @access     Private
exports.createBootcamps = async(req, res, next) => {
    try {
        const bootcamp = await Bootcamp.create(req.body);
        res.status(201).json({
            success: true,
            data: bootcamp
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            data: {
                message: error.message
            }
        });
    }
};

// @desc       update  bootcamps
// @rout       Put /api/v1/bootcamps/:id
// @access     Private
exports.updateBootcamps = async(req, res, next) => {
    const bootcamp = await Bootcamp.findByIdAndUprdate(req.params.id, req.body);
    res.status(201).json({ success: true, data: { bootcamp: bootcamp } })

};

// @desc       update  bootcamps
// @rout       Delete /api/v1/bootcamps/:id
// @access     Private
exports.deleteBootcamps = (req, res, next) => {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

    if (!bootcamp) {
        return res.status(404).json({ success: false, message: "not found." })
    }
    res.status(201).json({
        success: true,
        data: {
            message: 'deleted'
        }
    })

};

// @desc       Get by Id  bootcamps
// @rout       Get /api/v1/bootcamps/:id
// @access     Public
exports.getBootcampsById = async(req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id);
        if (!bootcamp) {
            return res.status(404).json({
                success: false,
                data: 'Not found'
            });
        }
        res.status(201).json({
            success: true,
            data: bootcamp
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            data: 'Error Occured'
        });
    }
};