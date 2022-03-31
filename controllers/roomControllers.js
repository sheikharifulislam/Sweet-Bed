import Room from '../models/roomModel';
import ErrorHandler from '../utils/errorHandler';
import catchAsyncErrors from '../middlewares/catchAsyncErrors';

const allRooms = catchAsyncErrors(async(req, res) => {
    const rooms = await Room.find({});
    res.status(200).json({
        success: true,
        rooms,
    });   
})

// create new room
const newRoom = catchAsyncErrors(async(req, res) => {
    const room = await Room.create(req.body);
    res.status(201).json({
        success: true,
        room,
    }) 
})


// get room details
const getSingleRoom = catchAsyncErrors(async(req, res, next) => {
    const room = await Room.findById(req.query.id);
    if(!room) { 
        return next(new ErrorHandler('Room Not Found With This Id', 404))
    }
    res.status(200).json({
        success: true,
        room,
    })
})

// update room details
const updateRoomDetails =catchAsyncErrors(async(req, res) => {
    const room = await Room.findById(req.query.id);
    if(!room) {      
        return next(new ErrorHandler('Room Not Found With This Id', 404))
    }
    await room.updateOne(req.body);
    res.status(200).json({
        success: true,
        room,
    })
    
})

// delete single room

const deleteRoom = catchAsyncErrors(async(req, res) => {
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
})

export {
    allRooms,
    newRoom,
    getSingleRoom,
    updateRoomDetails,
    deleteRoom,
}