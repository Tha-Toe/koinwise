import React from "react";
import { useEffect, useState } from "react";
import LoadingSpinner from "../components/popup/LoadingSpinner";
import "./admin.css";
import { doc, setDoc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
export default function Admin() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getFireBaseData = async () => {
      setLoading(true);
      const docRef = doc(db, "koinwise", "data");
      const docSnap = await getDoc(docRef);
      const docData = docSnap.data();
      console.log(docData);
      setLoading(false);
    };
    getFireBaseData();
  }, []);

  return <div className="admin_container">{loading && <LoadingSpinner />}</div>;
}
