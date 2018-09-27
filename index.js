// contenido de Favoritos
const favs_config = {
  general: [
    "http://www.gita.cl:8080/lams/index.do",
    "https://www.fayerwayer.com/",
    "https://best.aliexpress.com/?lan=es",
    "http://choromota.elbruto.es/cellule"
  ],
  social: [
    "https://www.facebook.com/",
    "https://web.whatsapp.com/",
    "https://twitter.com/"
  ],
  oficina: [
    "https://mail.protonmail.com/login",
    "https://mail.google.com/mail/u/0/#inbox",
    "http://www.bancoestado.cl/imagenes/_personas/home/default.asp",
    "https://secure02.uach.cl/infoalumnos/CheqLogin.aspx?pagina=principal.aspx"
  ],
  ocio: [
    "https://www.youtube.com/",
    "https://animeflv.net/",
    "https://myanimelist.net/animelist/juanlatorre",
    "https://myanimelist.net/mangalist/juanlatorre",
    "https://tumangaonline.me/",
    "https://www.netflix.com/browse"
  ]
};

// Handle de botones y tabs
var favsBtn = document.getElementById("favs-btn");
var notasBtn = document.getElementById("notas-btn");

var favsTab = document.getElementById("favs");
var notasTab = document.getElementById("notas");

favsBtn.onclick = function() {
  this.classList.add("active");
  notasBtn.classList.remove("active");
  checkCurrentTab("favs-btn");
};

notasBtn.onclick = function() {
  this.classList.add("active");
  favsBtn.classList.remove("active");
  checkCurrentTab("notas-btn");
};

function checkCurrentTab(button) {
  if (button == "favs-btn") {
    favsTab.classList.remove("hidden");
    notasTab.classList.add("hidden");
  } else {
    notasTab.classList.remove("hidden");
    favsTab.classList.add("hidden");
  }
}

// Generar categorias
for (var categoria in favs_config) {
  if (favs_config.hasOwnProperty(categoria)) {
    favsTab.innerHTML += "<h4>" + categoria + "</h4>";
    favsTab.innerHTML += "<ul id='" + categoria + "'></u>";
    for (uri in favs_config[categoria]) {
      var x = document.getElementById(categoria);
      x.innerHTML +=
        "<li class='tooltip'> <a href='" +
        favs_config[categoria][uri] +
        "'><img class='favicon' title='" +
        favs_config[categoria][uri] +
        "' src='https://www.google.com/s2/favicons?domain=" +
        favs_config[categoria][uri] +
        "' height='20px;' width='auto'></a></li>";
    }
  }
}

// Notas

var notasTextArea = document.getElementById("notas-textarea");

window.addEventListener("load", function load(event) {
  notasTextArea.value = localStorage.getItem("nota");

  notasTextArea.addEventListener("keyup", function() {
    localStorage.setItem("nota", notasTextArea.value);
  });
});
