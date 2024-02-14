export default function render(){
    $('#navbar').empty().append(
        `<div class="dropdown">
        <button id='navbar-button'  type="button" data-bs-toggle="dropdown" aria-expanded="false">
   
        </button>
        <ul id='dropdown-list' class="dropdown-menu" aria-labelledby="navbar-button">
          <li><a class="dropdown-item" href="#rankingsEN">Premier League</a></li>
          <li><a class="dropdown-item" href="#rankingsPT">Primeira Liga</a></li>
          <li><a class="dropdown-item" href="#rankingsSP">La Liga</a></li>
          <li><a class="dropdown-item" href="#rankingsFR">Ligue 1</a></li>
        </ul>
      </div>`
    )
    let navbarTitle = $('<img>').attr({
        "id": "navbar-background",
        "src": "app/assets/images/navbarTitle.png",
        "alt": "navbar background"
    })
   $('#navbar').append(navbarTitle)
}