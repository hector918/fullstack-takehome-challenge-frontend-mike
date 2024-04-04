export function AppTitle() {
  const onThemeChangeClick = evt => {
    const html = document.querySelector("html");
    if (html.getAttribute("data-theme") === "light") {
      html.setAttribute("data-theme", "dark");
    } else
      html.setAttribute("data-theme", "light");
  }
  //////////////////////////////////////
  return <div className="is-flex is-justify-content-space-between">
    <div>
      <h2 className="is-size-3 has-text-weight-bold mx-1">Raffle App</h2>
    </div>
    <div><button className="mx-2" onClick={onThemeChangeClick}><i className="fa fa-lightbulb-o fa-3x" aria-hidden="true"></i></button></div>
  </div>
}