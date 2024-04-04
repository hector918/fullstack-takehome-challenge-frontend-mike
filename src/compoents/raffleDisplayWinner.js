import { useEffect, useState } from 'react';
import srv from '../fetch_.js';
import Winner from './winner.js';
/////////////////////////////////////////////////////////
export default function RaffleDisplayWinner({ raffle }) {
  const [isError, setIsError] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const [winner, setWinner] = useState([]);
  ///////////////////////////////////////////////
  useEffect(() => {
    setIsloading(true);
    srv.getRaffleWinner(raffle.id, resp => {
      console.log(resp);
      if (resp.error) {
        setIsError(resp.error);
      }
      if (resp.data) {
        setWinner(resp.data);
      }
      setIsloading(false);
    })
  }, [raffle]);
  console.log(raffle)
  ///////////////////////////////////////////////
  const render = () => {
    if (isError !== "") {
      return <p className='help is-danger'>Error: {isError}</p>
    } else {
      if (isLoading) {
        return <div><i className="fa fa-spinner fa-spin fa-3x fa-fw"></i><span className="sr-only">Loading...</span></div>
      } else {
        return winner.map(el => <Winner raffle={raffle} winner={el} />)
      }
    }
  }
  ///////////////////////////////////////////////
  return <div>
    <p className="title is-3">Winner</p>
    <div className="section is-flex is-justify-content-center" >
      {render()}
    </div>
  </div>
}