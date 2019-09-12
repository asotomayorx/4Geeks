	
		function fondo() {
  			//document.body.style.backgroundColor = "green";
  			document.querySelector("body").style.backgroundColor = "green";
  			//document.getElementsByTagName("body")[0].style.backgroundColor = "green";
		}
	
      let carta = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
      let azarCarta = carta[Math.floor(Math.random()*carta.length)];
      document.getElementsByClassName("azarCarta")[0].innerHTML = azarCarta

      let pinta = ['spades','clubs','diamonds','hearts'];
      let azarPinta = pinta[Math.floor(Math.random()*pinta.length)];
      document.getElementsByClassName("azarCarta")[0].classList.add(azarPinta);
     