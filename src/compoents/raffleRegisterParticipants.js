import { useRef } from "react"

export default function RaffleRegisterParticipants() {
  const formHandle = useRef(null);
  ///////////////////////////////////////////
  const onSubmitClick = evt => {
    const inputs = formHandle.current.querySelectorAll("input");
    console.log(inputs);
  }
  const onResetClick = evt => {

  }
  ///////////////////////////////////////////
  return <div>
    <p className="title is-3">Register to participants in the raffle:</p>
    <div className="section">
      <form ref={formHandle} onSubmit={e => e.preventDefault()}>
        <div className="field">
          <label className="label">First Name *</label>
          <div className="control">
            <input className="input" name="name" type="text" placeholder="first name" />
          </div>
        </div>
        <div className="field">
          <label className="label">Last Name *</label>
          <div className="control">
            <input className="input" name="name" type="text" placeholder="last name" />
          </div>
        </div>
        <div className="field">
          <label className="label">Email *</label>
          <div className="control">
            <input className="input" name="name" type="text" placeholder="email" />
          </div>
        </div>
        <div className="field">
          <label className="label">Phone</label>
          <div className="control">
            <input className="input" name="name" type="text" placeholder="phone" />
          </div>
        </div>
        <div className="is-flex is-justify-content-center">
          <div className="field has-addons">
            <p className="control">
              <button className="button" onClick={onSubmitClick}>
                <span>Submit</span>
              </button>
            </p>
            <p className="control">
              <button className="button" onClick={onResetClick}>
                <span>Reset</span>
              </button>
            </p>
          </div>
        </div>
      </form>
    </div>
  </div>
}