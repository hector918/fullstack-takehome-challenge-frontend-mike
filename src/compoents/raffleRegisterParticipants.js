import { useRef } from "react"
import srv from '../fetch_.js';
///////////////////////////////////////////
export default function RaffleRegisterParticipants({ raffle }) {
  const formHandle = useRef(null);
  const pHelper = useRef(null);
  ///////////////////////////////////////////
  const onSubmitClick = evt => {
    pHelper.current.innerHTML = '<div><i class="fa fa-spinner fa-spin fa-3x fa-fw"></i><span class="sr-only">Loading...</span></div>';
    pHelper.current.classList.remove("is-danger", "is-success");

    const inputs = formHandle.current.querySelectorAll("input");
    const participant = {};
    inputs.forEach(el => participant[el.getAttribute("name")] = el.value);
    srv.raffleRegisterParticipant(raffle.id, participant, resp => {
      if (resp.error) {
        pHelper.current.classList.add("is-danger");
        pHelper.current.innerHTML = `Error: ${resp.error}`;
      } else {
        pHelper.current.classList.add("is-success");
        pHelper.current.innerHTML = `Participant ${resp.data.email} added.`;
        inputs.forEach(el => el.value = "");
      }
    })
  }
  const onResetClick = evt => {
    if (window.confirm("click Yes to reset the form.")) {
      const inputs = formHandle.current.querySelectorAll("input");
      inputs.forEach(el => el.value = "");
    }
  }
  ///////////////////////////////////////////
  return <div>
    <p className="title is-3">Register to participants in the raffle:</p>
    <div className="section">
      <form ref={formHandle} onSubmit={e => e.preventDefault()}>
        <div className="field">
          <label className="label">First Name *</label>
          <div className="control">
            <input className="input" name="firstname" type="text" placeholder="first name" />
          </div>
        </div>
        <div className="field">
          <label className="label">Last Name *</label>
          <div className="control">
            <input className="input" name="lastname" type="text" placeholder="last name" />
          </div>
        </div>
        <div className="field">
          <label className="label">Email *</label>
          <div className="control">
            <input className="input" name="email" type="text" placeholder="email" />
          </div>
        </div>
        <div className="field">
          <label className="label">Phone</label>
          <div className="control">
            <input className="input" name="phone" type="text" placeholder="phone number" />
          </div>
        </div>

        <div><p ref={pHelper} className="help"></p></div>

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