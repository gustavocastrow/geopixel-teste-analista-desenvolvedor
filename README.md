#  🌐 Teste Geopixel: Analista Desenvolvedor

## Sobre o teste:
  O teste consiste na criação de três aplicações utilizando `React`, e cada desafio possuí um nível de dificuldade.
   - Relógio: Com uma dificuldade considerada fácil, este problema irá julgar a sua capacidade de manipulação e administração de estados simples.
   - Seletor de itens: Em um nível moderado de dificuldade, sua capacidade de controlar estados compartilhados, eventos e relacionamento entre componentes da interface serão avaliados.
   - Bola tímida: Neste desafio de conhecimentos mais específicos, sua capacidade de controlar
eventos específicos e como alterar estilos CSS dinamicamente será levado em consideração.

## ✅ Resultados esperados:
  - A aplicação deverá ser uma página web simples, dividida em três partes, onde cada parte deverá estar cada um dos desafios a serem realizados.
Ao final, sua página web deverá estar similar a algo como na imagem abaixo:

<img src="https://i.imgur.com/HcLYbvZ.png" width="800" height="600">

## 🕰️ Desafio 1: Relógio
* Desenvolver um relógio e renderizar na tela do usuário informando o horário atual.

## 🗃️ Desafio 2: Manipulador de itens
* Desenvolver um `dropdown` que seja possível receber um item via botão `Adicionar`, remover um item via `Remover` e limpar o dropdown via `Limpar caixa` 
  - Os itens na lista devem ser case-sensitives, ou seja, não devem existir itens exatamente iguais na lista, por exemplo, a ocorrência de “Geopixel” e “ Geopixel” não deve acontecer, mas “geopixel” e “geoPixel" podem existir.
  - Para o item ser removido da lista, deve-se digitá-lo exatamente igual ao que se encontra na lista.
  - Ao adicionar ou remover um item da lista, o input ser limpo.
  - Não permita que string vazia seja adicionada à lista.
  - Notifique o usuário, com uma mensagem clara, sempre que ele tentar realizar uma ação que não
deva, como adicionar um item repetido.
  - Notifique o usuário, com uma mensagem clara, sempre que uma ação for bem-sucedida,
informando o que acabou de acontecer, como inserir um item na lista ou apagar um item com sucesso

## 🔴 Desafio 3: Bola Tímida
* Desenvolver um componente em formato de bola que quando o usuário realizar a ação de hover sobre ela com o cursor, ela mude de posição aleatoriamente dentro de seu espaço estabelecido.
  - A mudança de posição deve ser feita com uma transição e não mudar imediatamente para o novo local.

### ⚙️ Configurando o Ambiente e subindo a aplicação.

#### I. Instalação NodeJS.
  - Para executar a aplicação localmente vamos precisar ter o `NodeJS` instalado em nossa máquina, que pode ser baixado através do link: https://nodejs.org/en/

### II. Clonando repositório
  - Devemos clonar o repositório para nossa máquina através do comando `git clone git@github.com:gustavocastrow/geopixel-teste-analista-desenvolvedor.git`

### III. Acessando o projeto e instalando as dependências
  - Após efetuar o clone do repositório devemos acessar a pasta `geopixel-teste` e executar o comando `npm install`

### IV. Subindo aplicação
  - Depois da instalação das dependências ainda na pasta `geopixel-teste` devemos executar o comando `npm run dev`

### V. Acessando aplicação
  - Após seguir todos os passos citados acima você poderá acessar a aplicação através da URL `http://localhost:3001/`

