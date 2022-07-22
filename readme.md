# Projeto Jogo da Velha

##### <strong>Obs: Este documentário está desatualizado, pois ainda não contém as informações sobre quando o jogo dar velha e a possibilidade de escolher com qual símbolo quer começar.</strong>

## Desenvolvimento

<p>O projeto foi desenvolvido com base no método MVC (Model-View-Controller), onde uma parte está responsável por toda as funcionalidades do jogo, outra parte responsável pela interatividade (HTML) e a última parte responsável por juntar está duas, juntando o algoritmo do jogo a parte visual.</p>
<p>O script do jogo (game.js) foi criado de uma maneira que poderia ser reutilizado para um novos projetos, pois ele não conhece nada sobre o view (HTML), ele está responsável por fazer o jogo acontecer, dentro dele tem as seguintes funções:</p>

- Função para executar o movimento, que vai ser usada no controller dentro de um evento de click, onde vai receber o id do elemento como argumento e vai usar este id para ser empurrado um X ou um O para dentro do tabuleiro, além da mesma conferir quem ganhou a cada movimento.
- Função para conferir quem ganhou, que vai ser usada na função de executar o movimento (que está retornando o fim de jogo), onde vai retonar true, caso determinados index do tabuleiro forem iguais as possibilidades de ganhar, caso não for vai retornar false, assim, a cada movimento a função executar o movimento vai conferir quem ganhou.
- Função para recomeçar o jogo, onde vai pegar o tabuleiro e limpa-lo, e vai atribuir false ao fim de jogo, para assim o jogo poder funcionar normalmente de novo.

<p>O script interface.js tem como responsabilidade juntar o HTML e o game, o que antes os dois não se conhecia agora eles vão funcionar juntos, nele temos as seguintes funções:</p>

- Função executarClick atribuída ao evento click, que está responsável por chamar a função de executar o movimento do script game e passar como argumento o id do trajeto do evento, como este evento está atribuído aos quadrados ele vai passar o id de cada quadrado para o a função de executar o movimento, além de conferir se a função de executar o movimento é verdadeiro, caso ela for(se o fim de jogo tiver retornado true), ela vai mostrar qual foi o símbolo vencedor junto com um gif referente ao jogador vencedor.
- Função para atualizar o quadrado, que vai receber como argumento o trajeto do evento, como ela vai está dentro da função de executarClick, o trajeto vai ser do evento click. Basicamente ela tem como função pegar o elemento que está dentro do tabuleiro e passar para uma variável, como o tabuleiro está recebendo x ou o, no css fizemos dois estilos para estas classes, agora passamos para dentro do quadrado clicado uma div com uma nova classe, que vai ser x ou o dependendo da ordem do tabuleiro no script game.js.
- Atribuição do evento click ao botão para recomeçar o jogo, onde vai executar a função de recomeçar do script game.js, vai executar a função de limpar quadrados que vai limpar todos os quadrados que retirando suas classes, além de reiniciar os gifs para os gifs iniciais.

## Conclusão

<p>No decorrer de criação do projeto fui aprendendo como manipular um array melhor, além de aprender o método MVC, que realmente é muito útil para criações de projeto, como a vantagem de saber onde exatamente cada erro vai está - dependendo de qual erro é, além de deixar seu projeto mais organizado.<br>
Aprendi e quebrei bastante a cabeça na parte do gameover, onde se tornava díficil entender que os indexs dos elementos da possibilidade de ganhar teriam que ser iguais dentro dos index do tabuleiro. Quebrar a cabeça e resolver isto fez minha lógica crescer e minha fluência em JS ganhar mais valor.</p>