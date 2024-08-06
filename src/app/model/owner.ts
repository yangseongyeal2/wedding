import {Timestamp, FirestoreDataConverter, QueryDocumentSnapshot, DocumentData} from 'firebase/firestore';

export interface Owner {
    id: string;
    name: string;
    phoneNumber: string;
    adminId:string;
    createdAt: Timestamp;
}

class OwnerModel implements Owner {
    id: string;
    name: string;
    phoneNumber: string;
    adminId:string;
    createdAt: Timestamp;

    constructor(data: Owner) {
        this.id = data.id;
        this.name = data.name;
        this.phoneNumber = data.phoneNumber;
        this.adminId = data.adminId;
        this.createdAt = data.createdAt;
    }

    // Static method to construct GuestModel from JSON
    static fromJson(json: any): OwnerModel {
        return new OwnerModel({
            id: json.id,
            name: json.name,
            phoneNumber: json.phoneNumber,
            adminId:json.adminId,
            createdAt: json.createdAt,
        });
    }
}

const ownerModelConverter: FirestoreDataConverter<OwnerModel> = {
    toFirestore: (guestModel: OwnerModel): DocumentData => {
        return {
            id: guestModel.id,
            name: guestModel.name,
            phoneNumber: guestModel.phoneNumber,
            adminId:guestModel.adminId,
            createdAt: guestModel.createdAt,
        };
    },
    fromFirestore: (snapshot: QueryDocumentSnapshot): OwnerModel => {
        const data = snapshot.data();
        return new OwnerModel({
            id: snapshot.id,
            name: data.name,
            phoneNumber: data.phoneNumber,
            adminId:data.adminId,
            createdAt: data.createdAt,
        });
    },
};

export {OwnerModel, ownerModelConverter};