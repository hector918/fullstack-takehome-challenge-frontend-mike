import { useEffect, useState } from 'react';
import srv from '../fetch_.js';
import Participant from './participant.js';
/////////////////////////////////////////////

export default function RaffleShowParticipants({ raffle }) {
  const [isError, setIsError] = useState("");
  const [isLoading, setIsloading] = useState(true);
  const [participants, setParticipants] = useState([]);
  const [filterInputValue, setFilterInputValue] = useState("");
  /////////////////////////////////////////////
  useEffect(() => {
    setIsloading(true);
    srv.getRaffleParticipants(raffle.id, resp => {
      if (resp.error) {
        setIsError(resp.error);
      } else {
        setParticipants(resp.data);
      }
      setIsloading(false);
    });
  }, [raffle]);
  /////////////////////////////////////////////
  const filterParticipant = (keyword, participants) => {
    if (keyword !== "") {
      let fitleredParticipants = [];
      for (let itm of participants) {
        const searchStr = `${itm.firstname} ${itm.lastname} ${itm.email} ${itm.phone}`;
        if (searchStr.includes(keyword)) fitleredParticipants.push(itm);
      }
      return fitleredParticipants;
    } else return participants;
  }
  const render = () => {
    if (isError !== "") {
      return <div>Error: {isError}</div>
    } else {
      if (isLoading) {
        return <div style={{ textAlign: "center" }}>
          <i className="fa fa-spinner fa-spin fa-3x fa-fw"></i>
          <span className="sr-only">Loading...</span>
        </div>
      } else {
        return filterParticipant(filterInputValue, participants).map(el => <Participant participant={el} />);
      }
    }
  }
  /////////////////////////////////////////////
  return <div>
    <p className='title is-3'>Participants: {"0"} total</p>
    <div className='section'>
      <div><div className="field has-addons">
        <div className="control  is-expanded">
          <input className="input" type="text" placeholder="filter participants" value={filterInputValue} onChange={evt => setFilterInputValue(evt.target.value)} />
        </div>
        <div className="control">
          <button className="button is-info">
            Search
          </button>
        </div>
      </div></div>
      <div className='mt-5'></div>
      <div>
        {render()}
      </div>
    </div>
  </div>
}