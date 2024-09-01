import {doc, setDoc} from "@firebase/firestore";
import {db} from "@/app/lib/firebaseConfig";
import {GuestModel, guestModelConverter} from "@/app/model/guest";

class GuestRepository {
    async uploadGuest(guest: GuestModel):Promise<GuestModel | Error> {
        try{
            const guestRef = doc(db, 'guests', guest.id).withConverter(guestModelConverter);
            await setDoc(guestRef, guest)
            return guest;
        }catch (err){
            console.error(`error:${err}`)
            throw err;
        }

    }
    async uploadGuestSample(guest: GuestModel):Promise<GuestModel | Error> {
        try{
            const guestRef = doc(db, 'guestsSample', guest.id).withConverter(guestModelConverter);
            await setDoc(guestRef, guest)
            return guest;
        }catch (err){
            console.error(`error:${err}`)
            throw err;
        }

    }
}

export const guestRepository = new GuestRepository()