import { useRef } from "react";

////////////////////////////////////////////////
export default function NewRaffleForm() {
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

    console.log(evt.target, formHandle.current)
  }
  //////////////////////////////////////////
  return <div>
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
      </div>
    </form >
  </div >
}