import { useState } from 'react';
import srv from '../fetch_.js';
///////////////////////////////////////////////
export default function RafflePickWinner({ raffle, setTriggerUpdate }) {
  const [isError, setIsError] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const [secretToken, setSecretToken] = useState("");
  //event////////////////////////////////////
  const onPickAWinnerClick = evt => {
    setIsloading(true);
    srv.pickAWinner(raffle.id, secretToken, resp => {

      if (resp.error) {
        setIsError(resp.error);
      } else {
        setTriggerUpdate(pv => !pv);
      }
      setIsloading(false);
    })
  }
  ///////////////////////////////////////////////
  const helperRender = () => {
    if (isError !== "") {
      return <p className='help is-danger'>Error: {isError}</p>
    } else {
      if (isLoading) {
        return <div><i className="fa fa-spinner fa-spin fa-3x fa-fw"></i><span className="sr-only">Loading...</span></div>
      } else {
        return <p>The secret token used when creating the raffle must be provided.</p>
      }
    }
  }
  ///////////////////////////////////////////////
  return <div>
    <p className="title is-3">Pick a winner</p>
    <div className="section">
      <div><div className="field has-addons">
        <div className="control has-icons-left is-expanded">
          <input
            className="input"
            type="text"
            placeholder="secret token"
            value={secretToken}
            onChange={e => setSecretToken(e.target.value)}
          />
          <span className="icon is-small is-left">
            <i className="fa fa-key" aria-hidden="true"></i>
          </span>
        </div>
        <div className="control">
          <button className="button is-info" onClick={onPickAWinnerClick}>
            Pick a winner
          </button>
        </div>
      </div></div>
      <div className="content">
        {helperRender()}
      </div>
    </div>
  </div>
}