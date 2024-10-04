<!-- markdownlint-disable MD041 -->
<!-- markdownlint-disable MD045 -->
<!-- markdownlint-disable MD033 -->
<p align="center">
  <img src="https://img.shields.io/badge/Buscador-Países-green" height="130">
</p>
<!-- markdownlint-enable MD033 -->

## Sobre o Projeto

Este projeto utiliza a API Restcountries para fornecer informações sobre países. A aplicação permite buscar dados como nome, capital, população, área, entre outros.

## Como Funciona a API RestCountries

A API RestCountries fornece informações sobre países, como nomes, bandeiras, códigos, regiões, idiomas e muito mais. Você pode acessar a documentação completa da API [aqui](https://restcountries.com/).

### Exemplo de Requisição para um País Específico

Você pode buscar informações de um país específico utilizando o nome do país. Por exemplo, para obter informações sobre o Brasil:

```http
GET https://restcountries.com/v3.1/name/brazil
```

```json
[
  {
    "name": {
      "common": "Brazil",
      "official": "Federative Republic of Brazil"
    },
    "capital": ["Brasília"],
    "region": "Americas",
    "subregion": "South America",
    "languages": {
      "por": "Portuguese"
    },
    "population": 212559417,
    "flag": "🇧🇷"
  }
]
```

## Design do Projeto

![imagem](/docs/design-projeto.jpg)

## Como Executar o Projeto

### Pré-requisitos

- VSCode instalado
- Extensão Live Server

### Passos para Execução

1. Clone o repositório:

    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd seu-repositorio
    ```

3. Clique em Extensions e na barra de Busca pesquise "Live Server"

4. Após a instalação clique com o botão direito do mouse no arquivo index.html e no botão "Open With Live Server".

### Instalações Necessárias

- [VSCode](https://code.visualstudio.com/)
