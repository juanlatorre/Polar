// generar contenido de Favoritos
favs_config = {
  general: [
    {
      uri: "http://www.gita.cl:8080/lams/index.do",
      nombre: "Lams"
    },
    {
      uri: "https://www.fayerwayer.com/",
      nombre: "FayerWayer"
    },
    {
      uri: "https://best.aliexpress.com/?lan=es",
      nombre: "Aliexpress"
    },
    {
      uri: "http://choromota.elbruto.es/cellule",
      nombre: "El Bruto"
    }
  ],
  social: [
    {
      uri: "https://www.facebook.com/",
      nombre: "Facebook"
    },
    {
      uri: "https://web.whatsapp.com/",
      nombre: "Whatsapp"
    },
    {
      uri: "https://twitter.com/",
      nombre: "Twitter"
    }
  ],
  ofimática: [
    {
      uri: "https://mail.protonmail.com/login",
      nombre: "Protonmail"
    },
    {
      uri: "https://mail.google.com/mail/u/0/#inbox",
      nombre: "Gmail"
    },
    {
      uri: "http://www.bancoestado.cl/imagenes/_personas/home/default.asp",
      nombre: "Banco Estado"
    },
    {
      uri:
        "https://secure02.uach.cl/infoalumnos/CheqLogin.aspx?pagina=principal.aspx",
      nombre: "InfoAlumnos"
    }
  ]
};

console.log(favs_config);

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
