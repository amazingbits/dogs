<h1>O Projeto</h1>
<p>Trata-se de uma rede social para cachorros.</p>
<p>Esta aplicação foi desenvolvida utilizando React puro, tendo como biblioteca externa apenas o <b>React Router</b> para gerenciamento de rotas e o <b>Victory</b> para gerar gráficos na páginas de estatísticas.</p>

<h1>Endpoints</h1>
<table>
  <tr>
    <th>Nome</th>
    <td>TOKEN_POST</td>
  </tr>
  <tr>
    <th>URI</th>
    <td>/jwt-auth/v1/token</td>
  </tr>
  <tr>
    <th>Descrição</th>
    <td>Rota para efetuar o login, retorna um token JWT</td>
  </tr>
</table>
<br>
<table>
  <tr>
    <th>Nome</th>
    <td>TOKEN_VALIDATE_POST</td>
  </tr>
  <tr>
    <th>URI</th>
    <td>/jwt-auth/v1/token/validate</td>
  </tr>
  <tr>
    <th>Descrição</th>
    <td>Verifica se o token é válido</td>
  </tr>
</table>
<br>
<table>
  <tr>
    <th>Nome</th>
    <td>USER_GET</td>
  </tr>
  <tr>
    <th>URI</th>
    <td>/api/user</td>
  </tr>
  <tr>
    <th>Descrição</th>
    <td>Retorna as informações de um usuário através do token que é passado no header</td>
  </tr>
</table>
<br>
<table>
  <tr>
    <th>Nome</th>
    <td>USER_POST</td>
  </tr>
  <tr>
    <th>URI</th>
    <td>/api/user</td>
  </tr>
  <tr>
    <th>Descrição</th>
    <td>Insere um novo usuário</td>
  </tr>
</table>
<br>
<table>
  <tr>
    <th>Nome</th>
    <td>PHOTO_POST</td>
  </tr>
  <tr>
    <th>URI</th>
    <td>/api/photo</td>
  </tr>
  <tr>
    <th>Descrição</th>
    <td>Insere uma imagem de um cachorro que será postada na rede social</td>
  </tr>
</table>
<br>
<table>
  <tr>
    <th>Nome</th>
    <td>PHOTOS_GET</td>
  </tr>
  <tr>
    <th>URI</th>
    <td>/api/photo/?_page=[CURRENTPAGE]&_total=[TOTALNUMBER]&_user=[USERNAME]</td>
  </tr>
  <tr>
    <th>Descrição</th>
    <td>Retorna uma lista de fotos de cachorros cadastrados</td>
  </tr>
</table>
<br>
<table>
  <tr>
    <th>Nome</th>
    <td>PHOTO_GET</td>
  </tr>
  <tr>
    <th>URI</th>
    <td>/api/photo/:id</td>
  </tr>
  <tr>
    <th>Descrição</th>
    <td>Retorna uma foto específica pelo ID</td>
  </tr>
</table>
<br>
<table>
  <tr>
    <th>Nome</th>
    <td>PHOTO_DELETE</td>
  </tr>
  <tr>
    <th>URI</th>
    <td>/api/photo/:id</td>
  </tr>
  <tr>
    <th>Descrição</th>
    <td>Exclui uma foto através do ID</td>
  </tr>
</table>
<br>
<table>
  <tr>
    <th>Nome</th>
    <td>COMMENT_POST</td>
  </tr>
  <tr>
    <th>URI</th>
    <td>/api/comment/:id</td>
  </tr>
  <tr>
    <th>Descrição</th>
    <td>Posta um comentário passando o ID da foto na qual se quer comentar</td>
  </tr>
</table>
<br>
<table>
  <tr>
    <th>Nome</th>
    <td>PASSWORD_LOST</td>
  </tr>
  <tr>
    <th>URI</th>
    <td>/api/password/lost</td>
  </tr>
  <tr>
    <th>Descrição</th>
    <td>Envia um e-mail (que é passado via POST) contendo uma chave que é gerada e passada no link para fazer uma nova senha</td>
  </tr>
</table>
<br>
<table>
  <tr>
    <th>Nome</th>
    <td>PASSWORD_RESET</td>
  </tr>
  <tr>
    <th>URI</th>
    <td>/api/password/reset</td>
  </tr>
  <tr>
    <th>Descrição</th>
    <td>Altera a senha do usuário para a nova senha inserida</td>
  </tr>
</table>
<br>
<table>
  <tr>
    <th>Nome</th>
    <td>STATS_GET</td>
  </tr>
  <tr>
    <th>URI</th>
    <td>/api/stats</td>
  </tr>
  <tr>
    <th>Descrição</th>
    <td>Retorna um objeto com uma série de dados de estatística: número total de acesso às fotos, número de acessos em cada foto e demais informações sobre cada foto do usuário que está fazendo a requisição</td>
  </tr>
</table>

<p>Os commits foram separados de acordo com a separação das aulas.</p>
