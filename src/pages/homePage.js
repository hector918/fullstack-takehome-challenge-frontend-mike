import { useState } from "react";
import AllRafflesComponent from "../compoents/allRaffles";
import NewRaffleForm from "../compoents/newRaffleForm";

export default function HomePage() {
  const [updateCompoent, setUpdateCompoent] = useState(false);
  //////////////////////////////////////////////
  return <div className="container">
    <div className="is-flex"><h1 className="is-size-3">Home page</h1></div>
    <div className="section"><NewRaffleForm updateAllRaffles={setUpdateCompoent} /></div>
    <div className="section"><AllRafflesComponent updateCompoent={updateCompoent} /></div>
  </div>
}