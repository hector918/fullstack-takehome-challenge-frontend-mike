export default function RafflePickWinner() {
  return <div>

    <p className="title is-3">Pick a winner</p>
    <div className="section">
      <div><div className="field has-addons">
        <div className="control  is-expanded">
          <input className="input" type="text" placeholder="secret token" />
        </div>
        <div className="control">
          <button className="button is-info">
            Pick a winner
          </button>
        </div>
      </div></div>
    </div>
  </div>
}