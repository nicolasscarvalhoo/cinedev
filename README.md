# 🎬 CineDev - Catálogo de Filmes & Locais de Gravação

O **CineDev** é um mini aplicativo desenvolvido em React que funciona como um catálogo interativo de grandes produções cinematográficas mundiais. O projeto foi construído do zero com o objetivo de mapear e explorar as informações técnicas de cada obra, seu elenco principal e a localização geográfica real onde suas cenas foram gravadas.

---

## 🚀 Tecnologias Utilizadas

* **React** (Biblioteca principal para construção da interface)
* **Vite** (Ambiente de desenvolvimento rápido)
* **Styled-Components** (Estilização isolada e dinâmica via CSS-in-JS)
* **Google Maps Embed API** (Integração de mapa dinâmico via Iframe)

---

## ⚙️ Funcionalidades e Conceitos Aplicados

1. **Componentes Reutilizáveis & Props:** Criação de um componente único de `Card` que renderiza de forma genérica e automatizada qualquer filme recebido através de propriedades (`props`).
2. **Manipulação de Estados (`useState`):** * **Favoritar:** Sistema interativo local em cada card que altera dinamicamente sua cor ao ser clicado.
   * **Filtragem:** Sistema global na página principal para filtrar os filmes na tela dinamicamente por gênero/país.
   * **Navegação Dinâmica:** Controle de fluxo de telas que permite transitar entre a listagem, tela de detalhes e o perfil dos artistas.
3. **Estilização com Styled-Components:** Toda a identidade visual (Layout Escuro no estilo "Streaming") foi desacoplada em arquivos independentes (`style.jsx`), utilizando recursos avançados como passagem de propriedades para mudar o estilo em tempo de execução (propriedade `$fav` no botão).
4. **Reuso de Telas:** A página de `Ator` foi reaproveitada de forma inteligente no ecossistema da aplicação para exibir também os dados da biografia e fotos dos Diretores.
5. **Integração com Mapas:** Injeção de mapas interativos baseados nas coordenadas e nomes de locais reais de filmagem contidos no banco de dados.

---

## 📂 Estrutura do Projeto

O projeto segue estritamente a arquitetura de pastas solicitada:

```text
src/
 ├── components/
 │   └── Card/
 │       ├── index.jsx
 │       └── style.jsx
 ├── pages/
 │   ├── Home/
 │   │   ├── index.jsx
 │   │   └── style.jsx
 │   ├── Detalhes/
 │   │   ├── index.jsx
 │   │   └── style.jsx
 │   └── Ator/
 │       ├── index.jsx
 │       └── style.jsx
 ├── data/
 │   └── dados.jsx
 └── App.jsx
