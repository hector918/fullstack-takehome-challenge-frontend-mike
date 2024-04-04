export default function Winner({ raffle, winner }) {
  return <div className="card" style={{ maxWidth: "480px" }}>
    <div className="card-image">
      <figure className="image is-4by3">
        <img
          src="https://bulma.io/assets/images/placeholders/480x320.png"
          alt="Placeholder "
          width={"480px"}
        />
      </figure>
    </div>
    <div className="card-content">
      <div className="media">
        <div className="media-left">
          <figure className="image is-48x48">
            <img
              src="https://bulma.io/assets/images/placeholders/96x96.png"
              alt="Placeholder "
            />
          </figure>
        </div>
        <div className="media-content">
          <p className="title is-4">John Smith</p>
          <p className="subtitle is-6">@johnsmith</p>
        </div>
      </div>

      <div className="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
        iaculis mauris. <a href="#top">@bulmaio</a>. <a href="#top">#css</a>
        <a href="#top">#responsive</a>
        <br />
        <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </div>
    </div>
  </div>
}