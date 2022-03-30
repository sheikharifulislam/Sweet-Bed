import {Schema, model, models} from 'mongoose';
import mongoose from 'mongoose';
console.log(mongoose);

const roomSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Please Enter Room Name'],
        maxLength: [150, 'Room Name Cannot Exceed 150 Characters']
    },
    pricePerNight: {
        type: Number,
        required: [true, 'Please Enter Room Price Per Night'],
        min: [1, 'Room Price Cannot less than 1'],
        default: 0.0,
    },
    description: {
        type: String,
        require: [true, 'Please Enter Room Description'],
        maxLength: [500, 'Room Description Cannot exceed 500']
    },
    address: {
        type: String,
        require: [true, 'Please Enter Your Hotle Address'],        
    },
    guestCapacity: {
        type: Number,
        require: [true, 'Please Enter Room Guest Capacity'],
    },
    numOfBed: {
        type: Number,
        require: [true, 'Please Enter Number Of Bea']
    },
    internet: {
        type: Boolean,
        default: false,
    },
    airConditioned: {
        type: Boolean,
        default: false,
    },
    petsAllowed: {
        type: Boolean,
        default: false,
    },
    roomCleaning: {
        type: Boolean,
        default: true,
    },  
    ratings: {
        type: Number,
        default: 0,
    },
    numOfReviews: {
        type: Number,
        default: 0,
    },
    images: {
        type: Array,
        default: [
            {
                public_id: {
                    type: String,
                    require: true,
                },
                url: {
                    type: String,
                    require: true,
                }
            }
        ],
    },
    category: {
        type: String,
        require: [true, 'Please Enter Room Category'],
        enum: {
            values: [
                'King',
                'Single',
                'Twins',
            ],
            message: 'Please Select Correct Category For Room'
        }
    },
    reviews: [
        {
            user: {
                type: Schema.ObjectId,
                ref: 'User',
                required: true,
            },
            name: {
                type: String,
                require: true,
            },
            rating: {
                type: Number,
                require: true,
            },
            comment: {
                type: String,
                require: true,
            }
        }
    ],
    user: {
        type: Schema.ObjectId,
        ref: 'User',
        require: false,
    },
    created: {
        type: Date,
        default: Date.now(),
    }
})


export default models.Rooms || model('Rooms', roomSchema);