import { useQuery } from "@tanstack/react-query";
import { collection, getDocs, query } from 'firebase/firestore';
import { GuestModel, guestModelConverter } from "@/app/model/guest";
import { db } from "@/app/lib/firebaseConfig";

export const useGuests = () => {
  const fetchGuests = async (): Promise<GuestModel[]> => {
    const guestsQuery = query(collection(db, 'guests').withConverter(guestModelConverter));
    const querySnapshot = await getDocs(guestsQuery);
    return querySnapshot.docs.map(doc => ({
      ...doc.data(),
      id: doc.id
    }));
  };

  return useQuery<GuestModel[], Error>({
    queryKey: ['guests'],
    queryFn: fetchGuests
  });
};
