var todosPaises = [];
var todosPaisesDiv = document.querySelector(".todosPaises");
var qtPaisesSpan = document.getElementById("qtPaises");

async function consultarPaises() {
  var resposta = await fetch("https://restcountries.com/v3.1/all");
  var dados = await resposta.json();

  todosPaises = dados;
  mostrarPaises(todosPaises);
}

function mostrarPaises(paises) {
  todosPaisesDiv.innerHTML = "";
  qtPaisesSpan.textContent = paises.length;
  for (let pais of paises) {
    console.log(pais.translations.por.common);

    var paisDiv = document.createElement("div");
    paisDiv.classList.add("pais");
    paisDiv.innerHTML = `
      <img
        width="150"
        src="${pais.flags.png}"
        alt="${pais.flags.alt}"
      />
      <p>${pais.translations.por.common}</p>
    `;

    paisDiv.id = pais.cca2;
    paisDiv.addEventListener("click", abrirPaginaDetalhes);
    
    todosPaisesDiv.appendChild(paisDiv);
  }
}

function buscarPaises(value) {
  var paisBuscados = [];

  for (let pais of todosPaises) {
    var nome = pais.name.common.toLowerCase();
    if (nome.startsWith(value.toLowerCase())) {
      paisBuscados.push(pais);
    }
  }
  mostrarPaises(paisBuscados);
}

function abrirPaginaDetalhes(event){
  var paisId;
  
  if (event.target.className != "pais") {
    paisId = event.target.parentElement.id;
  } else {
    paisId = event.target.id;
  }
  
  window.location.href = `./details.html?id=${paisId}`;
}

document.addEventListener("DOMContentLoaded", function() {
  const parametrosUrl = new URLSearchParams(window.location.search);
  const idPais = parametrosUrl.get('id');
  if (idPais) {
      buscarDetalhesPaisPorId(idPais);
  }
});

async function buscarDetalhesPaisPorId(idPais) {
  try {
      const resposta = await fetch(`https://restcountries.com/v3.1/alpha/${idPais}`);
      const dados = await resposta.json();
      const pais = dados[0];

      const detalhes = `
          <h2>${pais.name.official}</h2>
          <img src="${pais.flags.svg}" alt="Bandeira de ${pais.name.official}" width="100">
          <p><strong>Capital:</strong> ${pais.capital[0]}</p>
          <p><strong>Língua:</strong> ${Object.values(pais.languages).join(', ')}</p>
          <p><strong>Moeda:</strong> ${Object.values(pais.currencies)[0].name} (${Object.values(pais.currencies)[0].symbol})</p>
          <p><strong>Continente:</strong> ${pais.continents[0]}</p>
          <p><strong>População:</strong> ${pais.population.toLocaleString()}</p>
          <p><strong>Área Geográfica:</strong> ${pais.area.toLocaleString()} km²</p>
          <p><strong>Link para o Maps:</strong> <a href="${pais.maps.googleMaps}" target="_blank">Google Maps</a></p>
      `;

      document.getElementById('country-details').innerHTML = detalhes;
  } catch (erro) {
      console.error('Erro ao buscar detalhes do país:', erro);
  }
}
const filtroMap = {
  "Todos": "all", 
  "Africa": "Africa",
  "Americas": "Americas",
  "Asia": "Asia",
  "Europe": "Europe",
  "Oceania": "Oceania"
};

function filtrarPorContinente(continente) {
  if (continente === "all") {
    mostrarPaises(todosPaises);
  } else {
    var paisesFiltrados = todosPaises.filter(pais => pais.region === continente);
    mostrarPaises(paisesFiltrados);
  }
}

document.querySelectorAll('input[name="filtros"]').forEach(input => {
  input.addEventListener('change', (event) => {
    const filtro = event.target.value;

    console.log("Filtro selecionado:", filtro);
    filtrarPorContinente(filtroMap[filtro]);
  });
});

consultarPaises();