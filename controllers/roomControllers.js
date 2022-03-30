import Room from '../models/roomModel';

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

export {
    allRooms,
    newRoom,
}