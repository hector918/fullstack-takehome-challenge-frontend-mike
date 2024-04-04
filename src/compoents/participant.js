export default function Participant({ participant }) {
  return <div className="content box is-clickable" >
    <h3>{participant.firstname} {participant.lastname}</h3>
    <p><i className="fa fa-envelope-o" aria-hidden="true"></i> : {participant.email}</p>
    {participant.phone && <p><i className="fa fa-mobile" aria-hidden="true"></i>: {participant.phone}</p>}
  </div>
}