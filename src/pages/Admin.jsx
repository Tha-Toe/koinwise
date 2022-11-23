import React from "react";
import { useEffect, useState } from "react";
import LoadingSpinner from "../components/popup/LoadingSpinner";
import "./admin.css";
import { doc, setDoc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
export default function Admin() {
  const [loading, setLoading] = useState(false);
  const [dataList, setDataList] = useState([]);
  useEffect(() => {
    const getFireBaseData = async () => {
      setLoading(true);
      const docRef = doc(db, "koinwise", "data");
      const docSnap = await getDoc(docRef);
      const docData = docSnap.data();
      if (docData) {
        setDataList(docData.list);
      }
      console.log(docData);
      setLoading(false);
    };
    getFireBaseData();
  }, []);

  return (
    <div className="admin_container">
      {loading && <LoadingSpinner />}
      {dataList.length > 0 ? (
        <table className="list_container">
          <tr className="table_row">
            <th className="table_d">Match Date</th>
            <th className="table_d">Match Name</th>
            <th className="table_d"> Selected Team</th>
            <th className="table_d">Name</th>
            <th className="table_d">Email</th>
            <th className="table_d">Wallet Address</th>
            <th className="table_d">Facebook</th>
            <th className="table_d">Twitter</th>
            <th className="table_d">Referal Email</th>
            <th className="table_d">Phone Number</th>
            <th className="table_d">WonStatusOfTokens</th>
            <th className="table_d">ReferalStatusOfTokens</th>
            <th className="table_d"> Status</th>
          </tr>
          {dataList.map((each, index) => (
            <tr key={index} className="table_row">
              <td className="table_d">{each.matchdate}</td>
              <td className="table_d">{each.matchname}</td>
              <td className="table_d">{each.selectedteam}</td>
              <td className="table_d">{each.name}</td>
              <td className="table_d">{each.email}</td>
              <td className="table_d">{each.walletaddress}</td>
              <td className="table_d">{each.fbpostlink}</td>
              <td className="table_d">{each.twitterlink}</td>
              <td className="table_d">
                {each.referalemail && each.referalemail}
              </td>
              <td className="table_d">{each.phonenumber}</td>
              <td className="table_d">{each.wonstatusoftokens}</td>
              <td className="table_d">{each.referalstatusoftokens}</td>
              <td className="table_d">{each.status}</td>
            </tr>
          ))}
        </table>
      ) : (
        <div className="no_data_to_show">No Data To Show.</div>
      )}
    </div>
  );
}
