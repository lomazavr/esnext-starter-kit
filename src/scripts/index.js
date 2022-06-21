import "../styles/index.scss";
import svgLogo from "../images/logo.svg";

document.addEventListener("DOMContentLoaded", init);

function init() {
  const root = document.getElementById("root");
  const logo = document.createElement("img");
  logo.src = svgLogo;
  logo.alt = "logo";
  root.appendChild(logo);
}
