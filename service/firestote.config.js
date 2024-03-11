import { collection } from "firebase/firestore";
import { db } from "./firebase";

export const channelCollectionRef = collection(db,'channel')
const messageCollectionRef = collection(db,'chat');

export {messageCollectionRef};
