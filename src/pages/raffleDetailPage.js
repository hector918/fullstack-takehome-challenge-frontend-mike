import { useParams, useNavigate } from "react-router-dom";
import { AppTitle } from "../compoents/appTitle";
import srv from '../fetch_.js';
import { useEffect, useState } from "react";
import RaffleRegisterParticipants from "../compoents/raffleRegisterParticipants.js";
import RaffleShowParticipants from "../compoents/raffleShowParticipants.js";
import RafflePickWinner from "../compoents/rafflePickWinner.js";
import RaffleDisplayWinner from "../compoents/raffleDisplayWinner.js";
///////////////////////////////////////////////
export default function RaffleDetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isError, setIsError] = useState("");
  const [isLoading, setIsloading] = useState(true);
  const [raffle, setRaffle] = useState({});
  const [tab, setTab] = useState(<div></div>);
  //////////////////////////////////////////////
  useEffect(() => {
    setIsloading(true);
    srv.getRaffleById(id, resp => {
      console.log(resp);
      if (resp.error) {
        setIsError(resp.error);
        setRaffle({});
      } else {
        setRaffle(resp.data);
        setTab(<RaffleRegisterParticipants raffle={resp.data} />);
      }
      setIsloading(false);
    })
  }, [id]);
  //////////////////////////////////////////////
  const tabsOnClick = evt => {
    const tabs = evt.currentTarget;
    tabs.childNodes.forEach(el => el.classList.remove("is-active"));
    const target = evt.target.getAttribute("targetname");
    evt.target.parentNode.classList.add("is-active");
    switch (target) {
      case "allRaffles":
        navigate("/");
        break;
      case "participants":
        setTab(<RaffleShowParticipants raffle={raffle} />);
        break;
      case "pickWinner":
        setTab(<RafflePickWinner raffle={raffle} />);
        break;
      case "displayWinner":
        setTab(<RaffleDisplayWinner raffle={raffle} />);
        break;
      default:
        setTab(<RaffleRegisterParticipants raffle={raffle} />);
    }
  }
  //////////////////////////////////////////////
  function render(raffle) {
    if (isError !== "") {
      return <div>Error: {isError}</div>
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
              <li><a href="#top" targetname="allRaffles">All Raffles</a></li>
              {raffle.id === undefined ? <div>Error not raffle found.</div> : <>
                <li className="is-active"><a href="#top" targetname="register">Register</a></li>
                <li><a href="#top" targetname="participants">Participants</a></li>
                {raffle.status === 0 ?
                  <li><a href="#top" targetname="pickWinner">Pick Winner</a></li>
                  :
                  <li><a href="#top" targetname="displayWinner">Winner</a></li>
                }
              </>
              }
            </ul>
          </div>

          <div>{tab}</div>
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