import Room from '../models/roomModel';
import ErrorHandler from '../utils/errorHandler';

const allRooms = async(req, res) => {
    try{
        const rooms = await Room.find({});
        res.status(200).json({
            success: true,
            rooms,
        });
    }
    catch(err){
        res.status(500).json({
            success: false,
            error: err.message,
        })
    }
}

// create new room
const newRoom = async(req, res) => {
   try{
        const room = await Room.create(req.body);
        res.status(201).json({
            success: true,
            room,
        })
   }
   catch(err){
       res.status(500).json({
           success: false,
           error: err.message,
       })
   }
}


// get room details
const getSingleRoom = async(req, res, next) => {
    try{
        const room = await Room.findById(req.query.id);
        if(!room) {
            // return res.status(404).json({
            //     success: false,
            //     error: 'Room not found this id',
            // })

            return next(new ErrorHandler('Room Not Found With This Id', 404))
        }
        res.status(200).json({
            success: true,
            room,
        })
    }
    catch(err) {
        res.status(500).json({
            success: false,
            error: err.message,
        })
    }
}

// update room details
const updateRoomDetails = async(req, res) => {
    try{
        const room = await Room.findById(req.query.id);
        if(!room) {
            // return res.status(404).json({
            //     success: false,
            //     error: 'Room not found this id',
            // })
            return next(new ErrorHandler('Room Not Found With This Id', 404))
        }
        await room.updateOne(req.body);
        res.status(200).json({
            success: true,
            room,
        })
    }
    catch(err) {
        res.status(500).json({
            success: false,
            error: err.message,
        })
    }
}

// delete single room

const deleteRoom = async(req, res) => {
    try{
        const room = await Room.findById(req.query.id);
        if(!room) {
            return res.status(404).json({
                success: false,
                error: 'Room not found this id',
            })
        }
        await room.remove();
        res.status(200).json({
            success: true,
            message: 'Successfully removed room',
        })
    }
    catch(err) {
        res.status(500).json({
            success: false,
            error: 'Internal Server Error',
        })
    }
}

export {
    allRooms,
    newRoom,
    getSingleRoom,
    updateRoomDetails,
    deleteRoom,
}