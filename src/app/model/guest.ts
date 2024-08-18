import {Timestamp, FirestoreDataConverter, QueryDocumentSnapshot, DocumentData} from 'firebase/firestore';

export interface Guest {
    id: string;
    name: string;
    phoneNumber: string;
    side: string;
    attendance: boolean;
    companion: number;
    createdAt: Timestamp;
    children: number;
    childrenSeat: number;
    vegetarian: number;
}

class GuestModel implements Guest {
    id: string;
    name: string;
    phoneNumber: string;
    side: string;
    attendance: boolean;
    companion: number;
    createdAt: Timestamp;
    children:number;
    childrenSeat:number;
    vegetarian:number;

    constructor(data: Guest) {
        this.id = data.id;
        this.name = data.name;
        this.phoneNumber = data.phoneNumber;
        this.side = data.side;
        this.attendance = data.attendance;
        this.companion = data.companion;
        this.createdAt = data.createdAt;
        this.children = data.children;
        this.childrenSeat = data.childrenSeat;
        this.vegetarian = data.vegetarian;
    }

    // Static method to construct GuestModel from JSON
    static fromJson(json: any): GuestModel {
        return new GuestModel({
            id: json.id,
            name: json.name,
            phoneNumber: json.phoneNumber,
            side: json.side,
            attendance: json.attendance,
            companion: json.companion,
            createdAt: json.createdAt instanceof Timestamp ? json.createdAt : Timestamp.fromDate(new Date(json.createdAt)),
            children:json.children,
            childrenSeat:json.childrenSeat,
            vegetarian:json.vegetarian,
        });
    }
}

const guestModelConverter: FirestoreDataConverter<GuestModel> = {
    toFirestore: (guestModel: GuestModel): DocumentData => {
        return {
            name: guestModel.name,
            phoneNumber: guestModel.phoneNumber,
            side: guestModel.side,
            attendance: guestModel.attendance,
            companion: guestModel.companion,
            createdAt: guestModel.createdAt,
            children:guestModel.children,
            childrenSeat:guestModel.childrenSeat,
            vegetarian:guestModel.vegetarian,
        };
    },
    fromFirestore: (snapshot: QueryDocumentSnapshot): GuestModel => {
        const data = snapshot.data();
        return new GuestModel({
            id: snapshot.id,
            name: data.name,
            phoneNumber: data.phoneNumber,
            side: data.side,
            attendance: data.attendance,
            companion: data.companion,
            createdAt: data.createdAt,
            children:data.children,
            childrenSeat:data.childrenSeat,
            vegetarian:data.vegetarian,
        });
    },
};

export {GuestModel, guestModelConverter};