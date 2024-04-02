export default function Raffle({ raffle, clickHandler }) {
  return <div className="content box is-clickable" onClick={clickHandler}>
    <h3>{raffle.name}</h3>
    <p><span>Created on: </span>{(new Date(raffle.create_at)).toUTCString()}</p>
    <p><span>Winner Id: </span>{raffle.winner_id}</p>
    <p><span>Raffled on: </span>{raffle.update_at ? (new Date(raffle.update_at)).toUTCString() : "Not Raffled yet."}</p>
  </div>
}