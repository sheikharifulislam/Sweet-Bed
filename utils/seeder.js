const Room = require('../models/roomModel');
const rooms = require('../data/rooms.json');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Ariful:JEQOqikmllHK0EYf@cluster0.jrudo.mongodb.net/Bookit?retryWrites=true&w=majority'); 

const seedRooms = async () => {
    try{
        await Room.deleteMany();
        console.log('Rooms are deleted successfully');
        await Room.insertMany(rooms);
        console.log('All Rooms are Added');
        process.exit();
    }
    catch(err) {
        console.log(err.message);
        process.exit();
    }
}

seedRooms();