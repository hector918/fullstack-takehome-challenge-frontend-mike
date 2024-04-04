import { useState } from "react";
import AllRafflesComponent from "../compoents/allRaffles";
import NewRaffleForm from "../compoents/newRaffleForm";
import { AppTitle } from "../compoents/appTitle";

export default function HomePage() {
  const [updateCompoent, setUpdateCompoent] = useState(false);
  //////////////////////////////////////////////
  return <div className="container">

    <AppTitle />
    <div className="is-flex"><h4 className="is-size-5">Home page</h4></div>
    <div className="section"><NewRaffleForm updateAllRaffles={setUpdateCompoent} /></div>
    <div className="section"><AllRafflesComponent updateCompoent={updateCompoent} /></div>
  </div>
}