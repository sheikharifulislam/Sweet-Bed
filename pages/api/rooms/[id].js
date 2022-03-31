import nc from 'next-connect';
import {
    getSingleRoom,
    updateRoomDetails,
    deleteRoom
} from '../../../controllers/roomControllers.js';
import dbConnect from '../../../config/dbConnect';
import onError from '../../../middlewares/errors';

const handler = nc({onError})

dbConnect();

handler.get(getSingleRoom);
handler.patch(updateRoomDetails);
handler.delete(deleteRoom);


export default handler;