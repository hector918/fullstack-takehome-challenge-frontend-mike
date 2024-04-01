import { useRef } from "react";

////////////////////////////////////////////////
export default function NewRaffleForm() {
  const secretTokenInput = useRef(null);


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
  //////////////////////////////////////////
  return <div>
    <form onSubmit={e => e.preventDefault()}>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input className="input" type="text" placeholder="e.g Alex Smith" />
        </div>
      </div>

      <div className="field">
        <label className="label">Secret token</label>
        <div className="field has-addons">
          <div className="control is-expanded">
            <input className="input" ref={secretTokenInput} type="text" placeholder="Generate secret token" />
          </div>
          <div className="control">
            <button className="button is-info" onClick={onGenerateClick}>
              Search
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
}