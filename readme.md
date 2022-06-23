# Canil Unigoiás

### Projeto destinado à atividade avaliativa da faculdade.

Baseia-se em um front-end feito com HTML, CSS e Javascript Vanilla para um sistema de gestão de canil.

O sistema tem três tipos de provedores de dados:
 - Memory: Lê/Grava os dados apenas em memória onde os dados serão descartados ao trocar de página.
 - Session: Lê/Grava os dados no Session Storage do navegador onde os dados serão descartados ao fechar a página.
 - Api: Lê/Envia os dados através de requisições HTTP para o endpoint ```http://localhost```, podendo ser trocado no arquivo ```js/data-providers/api/client-http.js```.
 