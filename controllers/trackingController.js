const axios = require('axios')
const {StatusCodes} = require('http-status-codes')

const trackingPackage = async(req, res) => {
    const {resi, courier} = req.query

    if(!courier && !resi) {
        res.status(StatusCodes.BAD_REQUEST).json({success: false, msg: 'Please provide receipt number'})
    }
    try {
        const response = await axios.get(`https://api.binderbyte.com/v1/track?api_key=${process.env.API_KEY}&courier=${courier}&awb=${resi}`)
        res.status(StatusCodes.OK).json(response.data)
    } catch (error) {
        console.log(error);
    }

}

module.exports = {
    trackingPackage
}