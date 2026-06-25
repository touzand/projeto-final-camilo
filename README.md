# GameVault - Catálogo de Games

**Trabalho Final - Projeto Frontend com React**

**Disciplina:** Linguagem de Programação para Internet  
**Professor:** Dr. Camilo Barreto  
**Curso:** Grande Área de Computação  
**UNIUBE**

## Integrantes

| Nome | RA |
|------|----|
| Alan Gabriel Alonso Fernandez | 5167638 |

## Tema

Catálogo de Games - Uma vitrine digital interativa para explorar, buscar e favoritar jogos eletrônicos.

## Descrição

O GameVault é uma aplicação Single Page Application (SPA) desenvolvida com React e Vite que permite aos usuários navegar por um catálogo de jogos, visualizar detalhes, filtrar por gênero, buscar por nome e gerenciar uma lista de favoritos. O projeto foi desenvolvido como trabalho final da disciplina Linguagem de Programação para Internet.

## Tecnologias Utilizadas

- **React 19** com JavaScript
- **Vite** (bundler e dev server)
- **React Router DOM** (roteamento SPA)
- **CSS Modules** (estilização por componente)
- **localStorage** (persistência de favoritos)

## Funcionalidades

- Navegação entre 5 páginas via React Router DOM
- Catálogo de jogos com dados mockados
- Busca por nome do jogo
- Filtro por gênero
- Página de detalhes do jogo com informações completas
- Sistema de favoritos com persistência (localStorage)
- Componente criativo: GameConsole (console retrô interativo)
- Design responsivo e moderno com tema escuro

## Componente Criativo

**GameConsole** - Console retrô interativo presente na página inicial.

O componente simula um videogame portátil com tela e controles físicos. O usuário pode navegar pelos jogos em destaque utilizando um D-Pad (direcionais) e interagir com botões de ação:

- **▲▼◀▶ (D-Pad):** Navegar entre os jogos em destaque
- **A (Play):** Ativa modo "playing" com animação na tela
- **B (Info):** Redireciona para a página de detalhes do jogo
- **X (Random):** Seleciona um jogo aleatório
- **Y (Reset):** Volta ao primeiro jogo da lista

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

2. Acesse a pasta do projeto:
```bash
cd seu-repositorio
```

3. Instale as dependências:
```bash
npm install
```

## Execução

Para rodar o projeto em modo de desenvolvimento:

```bash
npm run dev
```

O servidor será iniciado em `http://localhost:5173`.

Para gerar a build de produção:

```bash
npm run build
```

Para pré-visualizar a build:

```bash
npm run preview
```

## Estrutura do Projeto

```
src/
├── components/
│   ├── Navbar/         # Barra de navegação
│   ├── Footer/         # Rodapé
│   ├── GameCard/       # Card de jogo (props desestruturadas)
│   ├── SearchBar/      # Campo de busca (Lift State Up)
│   ├── FilterBar/      # Filtro por gênero (Lift State Up)
│   ├── RatingStars/    # Estrelas de avaliação (props desestruturadas)
│   └── GameConsole/    # Console retrô interativo (criativo)
├── pages/
│   ├── Home/           # Página inicial
│   ├── Catalog/        # Catálogo com busca e filtros
│   ├── GameDetails/    # Detalhes do jogo
│   ├── Favorites/      # Jogos favoritados
│   └── About/          # Sobre o projeto
├── data/
│   └── games.js        # Dados mockados
├── App.jsx             # Componente principal com rotas
├── App.module.css
├── main.jsx            # Entry point
└── index.css           # Estilos globais
```

## Link do Repositório

[GitHub - seu-usuario/seu-repositorio](https://github.com/seu-usuario/seu-repositorio)
# projeto-final-camilo
