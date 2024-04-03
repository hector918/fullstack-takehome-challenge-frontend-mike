import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import srv from '../fetch_.js';
import Raffle from './raffle.js';
///////////////////////////////////////////////
export default function AllRafflesComponent({ updateCompoent }) {
  const [isError, setIsError] = useState("");
  const [isLoading, setIsloading] = useState(true);
  const [allRaffles, setAllRaffles] = useState([]);
  const navigate = useNavigate();
  ///////////////////////////////////
  useEffect(() => {
    setIsloading(true);
    srv.getAllRaffles(resp => {
      console.log(resp)
      if (resp.error) {
        setIsError(resp.error);
      } else {
        setAllRaffles(resp.data);
      }
      setIsloading(false);
    })
  }, [updateCompoent]);
  ///////////////////////////////////
  function raffleOnClick(raffle) {
    navigate("/raffles/" + raffle.id);
  }
  ///////////////////////////////////
  function render() {
    if (isError !== "") {
      return <div></div>
    } else {
      if (isLoading) {
        return <div style={{ textAlign: "center" }}>
          <i className="fa fa-spinner fa-spin fa-3x fa-fw"></i>
          <span className="sr-only">Loading...</span>
        </div>
      } else {
        if (allRaffles.length === 0) {
          return <div>
            <div>No raffle found, let's create one.</div>
          </div>;
        } else {
          return <div>
            <div>All Raffles ({allRaffles.length}): </div>
            <div>{allRaffles.map(el => <Raffle clickHandler={raffleOnClick} raffle={el} key={el.id} />)}</div>
          </div>;
        }
      }
    }
  }
  ///////////////////////////////////
  return <div>
    {render()}
  </div>
}