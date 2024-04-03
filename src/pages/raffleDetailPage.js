import { useParams } from "react-router-dom";
import { AppTitle } from "../compoents/appTitle";
import srv from '../fetch_.js';
import { useEffect, useState } from "react";
import RaffleRegisterParticipants from "../compoents/raffleRegisterParticipants.js";
import RaffleShowParticipants from "../compoents/raffleShowParticipants.js";
import RafflePickWinner from "../compoents/rafflePickWinner.js";

///////////////////////////////////////////////
export default function RaffleDetailPage() {
  const { id } = useParams();
  const [isError, setIsError] = useState("");
  const [isLoading, setIsloading] = useState(true);
  const [raffle, setRaffle] = useState({});
  const [tab, setTab] = useState(<div></div>);
  //////////////////////////////////////////////
  useEffect(() => {
    setIsloading(true);
    srv.getRaffleById(id, resp => {
      console.log(resp)
      if (resp.error) {
        setIsError(resp.error);
      } else {
        setRaffle(resp.data);
      }
      setIsloading(false);
    })
  }, [id]);
  //////////////////////////////////////////////
  const tabsOnClick = evt => {
    const target = evt.target.getAttribute("targetname");
    switch (target) {

      case "participants":
        setTab(<RaffleShowParticipants />);
        break;
      case "pickWinner":
        setTab(<RafflePickWinner />);
        break;
      default:
        setTab(<RaffleRegisterParticipants />);
    }
  }
  //////////////////////////////////////////////
  function render(raffle) {
    if (isError !== "") {
      return <div></div>
    } else {
      if (isLoading) {
        return <div style={{ textAlign: "center" }}>
          <i className="fa fa-spinner fa-spin fa-3x fa-fw"></i>
          <span className="sr-only">Loading...</span>
        </div>
      } else {
        return <div>
          <nav className="level">
            <div className="level-item has-text-centered">
              <div>
                <p className="title">{raffle.name}</p>
              </div>
            </div>
          </nav>

          <div id="top" className="tabs is-centered is-fullwidth">
            <ul onClick={tabsOnClick}>
              <li className="is-active"><a href="#top" targetname="allRaffles">All Raffles</a></li>
              <li><a href="#top" targetname="register">Register</a></li>
              <li><a href="#top" targetname="participants">Participants</a></li>
              <li><a href="#top" targetname="pickWinner">Pick Winner</a></li>
            </ul>
          </div>

          <div>
            {tab}

          </div>
        </div>
      }
    }
  }
  //////////////////////////////////////////////
  return <div className="container">
    <div className="is-flex"><h1 className="is-size-3">raffle detail</h1></div>
    <AppTitle />
    {render(raffle)}
  </div>
}