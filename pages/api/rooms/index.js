import nc from 'next-connect';
import {
    allRooms
} from '../../../controllers/roomControllers.js';
import dbConnect from '../../../config/dbConnect';

const handler = nc();
dbConnect();

handler.get(allRooms);

export default handler;