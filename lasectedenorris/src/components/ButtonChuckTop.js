import React from "react"


import "./ButtonChuckTop.css"



const ButtonChuckTop = () => {
  return <div>

    <div><a id="cRetour" className="cInvisible" href="#haut"> .  </a></div>

    <script>
      document.addEventListener('DOMContentLoaded', function() {
        window.onscroll = function (ev) {
          document.getElementById("cRetour").className = (window.pageYOffset > 100) ? "cVisible" : "cInvisible";
        }
      });
</script>
  </div>
}


export default ButtonChuckTop