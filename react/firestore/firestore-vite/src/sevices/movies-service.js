import { db } from "../../config/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

export const getAllMovies = async () => {
  const collectionRef = collection(db, "movies");
  const querySnapshot = await getDocs(collectionRef);
  // const data = querySnapshot.docs.map(doc => {
  //   const id = doc.id
  //   const data = doc.data()
  //   return {id, ...data}
  // })
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const createMovie = async (data) => {
  const collectionRef = collection(db, "movies");
  const newMovie = await addDoc(collectionRef, data);
  return newMovie;
};
