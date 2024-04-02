import { useRef } from "react";
import srv from '../fetch_.js';

////////////////////////////////////////////////
export default function NewRaffleForm({ updateAllRaffles }) {
  const secretTokenInput = useRef(null);
  const formHandle = useRef(null);
  //event////////////////////////////////////////
  const onGenerateClick = () => {
    if (secretTokenInput.current) {
      secretTokenInput.current.value = create_secret_token();
    }
    //////////////////////////////////////
    function create_secret_token(length = 6) {
      var result = '';
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }
  }
  const onCreateNewRaffleClick = evt => {
    const allInputs = formHandle.current.querySelectorAll("input");
    const newRaffleData = {};
    const createFormHelper = formHandle.current.querySelector(".create_raffle_helper_p");
    for (let itm of allInputs) newRaffleData[itm.name] = itm.value;
    resetHelper();
    srv.createNewRaffle(newRaffleData, resp => {
      if (resp.error) {
        createFormHelper.classList.add("is-danger");
        createFormHelper.innerHTML = `Error: ${resp.error}`;

      } else {
        createFormHelper.classList.add("is-success");
        createFormHelper.innerHTML = `Success: Raffle created.`;
        updateAllRaffles(pv => !pv);
      }
    })
    function resetHelper() {
      createFormHelper.classList.remove("is-danger", "is-success");
      createFormHelper.innerHTML = "ready to go.";
    }
  }
  //////////////////////////////////////////
  return <div>
    <p className="subtitle">New Raffle</p>
    <form ref={formHandle} onSubmit={e => e.preventDefault()}>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input className="input" name="name" type="text" placeholder="e.g Lottery" />
        </div>
      </div>

      <div className="field">
        <label className="label">Secret token</label>
        <div className="field has-addons">
          <div className="control is-expanded">
            <input className="input" name="secret_token" ref={secretTokenInput} type="text" placeholder="J8mkXQ" />
          </div>
          <div className="control">
            <button className="button is-info" onClick={onGenerateClick}>
              Generate secret token
            </button>

          </div>
        </div>
        <p className="help">You must remember the Raffle secret token because it will be asked when picking a winner.</p>

      </div>
      <div className="field">
        <div className="control is-expanded">
          <button className="button" style={{ width: "100%" }} onClick={onCreateNewRaffleClick}> Create New Raffle</button>
        </div>
        <p className="help create_raffle_helper_p"></p>
      </div>
    </form >
  </div >
}