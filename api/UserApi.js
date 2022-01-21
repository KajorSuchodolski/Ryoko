import { db, storage } from "../config/firebase";

export const getUserData = async (username) => {

    const userData = await db.collection('stats').doc(username).get();
    return userData;

};
