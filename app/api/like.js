import { firestore } from "../services/firebase";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";

export const getLike = async(slug, callBackFunction) => {
    const likesDocRef = doc(firestore, 'likes', slug);

    try {
        const docSnapshot = await getDoc(likesDocRef);

        if (docSnapshot.exists()) {
            callBackFunction(Object.keys(docSnapshot.data()).length);
        }
    } catch (error) {
        console.error('Error getting document:', error);
    }
};
export const postLike = async(slug, callBackFunction) => {
    try {
        // Fetch the user's IP address
        const response = await fetch('https://api.ipify.org/?format=json');
        const data = await response.json();
        const userIP = data.ip;

        // Set the like with user's IP address
        const likesDocRef = doc(firestore, 'likes', slug);
        await setDoc(likesDocRef, {
            [userIP]: null
        }, { merge: true });

        // Execute the callback function
        callBackFunction();
    } catch (error) {
        console.error('Error posting like:', error);
    }
};