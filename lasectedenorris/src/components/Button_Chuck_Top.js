import React from "react"
import sound from '../sound/Sound-P90.mp3'

import "./Button_Chuck_Top.css"



const Button_Chuck_Top = () => {
  return <div>

    <div><a id="cRetour" className="cInvisible" href="#haut"></a></div>

    <script>
      document.addEventListener('DOMContentLoaded', function() {
        window.onscroll = function (ev) {
          document.getElementById("cRetour").className = (window.pageYOffset > 100) ? "cVisible" : "cInvisible";
        }
      });
</script>


  </div>
}


export default Button_Chuck_Top