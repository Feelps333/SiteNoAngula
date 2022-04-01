$(document).ready(function () {});

$("#carrosel img:eq(0)").addClass("banner-ativo").show();

setInterval(slide, 1000);

function slide() {
  if ($(".banner-ativo").next().length) {
    $(".banner-ativo")
      .removeClass("banner-ativo")
      .hide() /*  */
      .next()
      .addClass("banner-ativo")
      .show();
  } else {
    $(".banner-ativo").removeClass().hide();
    $("#carrosel img:eq(0)").addClass("banner-ativo").show();
  }
}

let email = document.getElementById("campo-email");

function enviarEmail() {
  let emailDigitado = email.value;
  console.log(emailDigitado);
}

$("#barras").click(function () {
  $("#menu").toggleClass("menu-ativo");
});

let listaNoticias = [
  {
    titulo: 'WWE "The Rock de Voltar"',
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Exercitationem commodi nemo beatae est ratione cupiditate assumenda nobis modi voluptatibus cumque Culpa repellat saepe omnis hic doloremque vel pariatur sequi ullam",
  },
  {
    titulo: 'Fifa "Real madrid 2022"',
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Exercitationem commodi nemo beatae est ratione cupiditate assumenda nobis modi voluptatibus cumque Culpa repellat saepe omnis hic doloremque vel pariatur sequi ullam",
  },
  {
    titulo: 'fifa "Man.City"',
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Exercitationem commodi nemo beatae est ratione cupiditate assumenda nobis modi voluptatibus cumque Culpa repellat saepe omnis hic doloremque vel pariatur sequi ullam",
  },
  {
    titulo: 'F1 "Novo regulamento para 22"',
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Exercitationem commodi nemo beatae est ratione cupiditate assumenda nobis modi voluptatibus cumque Culpa repellat saepe omnis hic doloremque vel pariatur sequi ullam",
  },
  {
    titulo: 'Nba "lakers esports"',
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Exercitationem commodi nemo beatae est ratione cupiditate assumenda nobis modi voluptatibus cumque Culpa repellat saepe omnis hic doloremque vel pariatur sequi ullam",
  },
  {
    titulo: "nova temporada de nfa",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Exercitationem commodi nemo beatae est ratione cupiditate assumenda nobis modi voluptatibus cumque Culpa repellat saepe omnis hic doloremque vel pariatur sequi ullam",
  },
];

function renderizarNoticias() {
  let espaco = document.getElementById("espaco-noticias");

  let template = "";

  for (let index = 0; index < listaNoticias.length; index++) {
    const noticia = listaNoticias[index];

    template += `   <div class="noticias">
      <h2>${noticia.titulo}</h2>
      <p>${noticia.descricao}</p>
    </div>`;
  }

  espaco.innerHTML = template;
}
