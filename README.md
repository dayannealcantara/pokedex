# Pokédex

## 💻 Projeto

Desenvolver uma plataforma web para listar e visualizar pokémons, na qual contenha informações dos tais como: nome, número, tipo, imagem e atributos. Essas informações foram possíveis ser adquiridas pelo uso da API REST PokéApi.

O layout do projeto foi criado a partir de um desafio proposto pela equipe da trilha de Front-end do Camper da [ioasys](https://ioasys.com.br/).

### Funcionalidades

 - [x] **Listagem dos pokémons**: Listar os pokémons com o uso da API REST.

 - [x] **Buscar pokémons**: Método para filtrar os pokémons a partir do seu nome.

 - [x] **Selecionar pokémon**: Criar uma página na aplicação com mais detalhes sobre o pokémon escolhido.

  - [x] **Seção do pokémon Card**: Informações do pokémon, tais como: Descrição e Estatísticas

- [x] **Seção Sobre**: Dados básicos sobre o pokémon, como altura, peso, fraquezas.

- [x] **Seção Estatísticas**: Pontos de batalha do pokémon, como vida, ataque, defesa, velocidade, especial ataque e especial defesa.

- [x] **Listagem dos pokémons favoritos**: Lista os pokémons favoritos.

### Conceitos abordados

- Uso de Flexbox e Grid CSS para alinhar e ajustar elementos na página.

- Consumo de api com o uso da lib [axios](https://github.com/axios/axios).

- Controle de paginação na listagem dos pokémons com uso da lib [infinite-scroll](https://infinite-scroll.com/).

- Criando tema global de cores com o `DefaultTheme` do [styled-components](https://www.styled-components.com/).

- Controle de busca por pokemón pelo uso do hook useDebouncet para ajudar a limitar que o componente seja renderizado muitas vezes.
 

### Notas

- A listagem dos pokémons foi limitada em 700, pois a partir desse número a api apresenta instabilidade em algumas  informações.

## 📥 Instalação e execução

Faça um clone desse repositório e acesse o diretório.

```bash
$ git clone git@github.com:dayannealcantara/Pokedex.git && cd pokedex
```

```bash
# Instalando as dependências
$ npm install

# Executanto aplicação
$ npm run start

```

## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.





