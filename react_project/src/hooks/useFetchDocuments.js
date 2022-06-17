import { useState, useEffect } from "react";
import {db} from "../firebase/config";
import { 
    doc,getDoc
} from "firebase/firestore";

export const useFetchDocument = (docCollection, id) => {

    const [document, setDocuments] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

        useEffect(() => {
            const loadDocument = async () =>{

                setLoading(true)

                try {
                    const docRef = await doc(db, docCollection,id)
                    const docSnap = await getDoc(docRef)

                    setDocuments(docSnap.data())

                } catch (error) {
                    console.log(error);
                    setError(error.message);
                }
                setLoading(false)
            }
            loadDocument();

        },[docCollection, id])

        return {document, loading, error};
};