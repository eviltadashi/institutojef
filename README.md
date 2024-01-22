<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>
<h1>Instituto J&F - Sistema Teste de Gestão de Cursos</h1>
<p><a target="_blank" href="https://elisios.com.br/sites/institutojef/Insomnia_doc.json"> <strong>Insomnia</strong></a></p>
<p><a target="_blank" href="https://elisios.com.br/sites/institutojef/sistemas_curso.docx"> <strong>Docx - (word)</strong></a></p>
<strong>Link para testes base64: </strong><a href="https://www.base64encode.net/file-to-base64" target="_blank">base64encode.net</a>
<hr>
<p>Boa tarde, segue avaliação prática para vaga de Analista de TI. Informo que serão avaliadas as posições de Pleno e Senior, portanto, iremos considerar, funcionamento, lógica, design de código, utilização do framework, documentação e testes. Cada um desses itens tem uma pontuação individual, o que significa que mesmo que não consiga realizar todo o desenvolvimento, o que for feito será considerado.</p>
<p>Todos os itens pedidos abaixo são obrigatórios, entretanto, tudo o que for adicionado além do solicitado será considerado para aumento da pontuação.</p>
<p>A entrega pode ser feita via link do github. Se hospedado, será considerado.</p>
<hr>
<h5>Você deve utilizar:</h5>
<ul>
  <li>Typescript</li>
  <li>NestJS</li>
  <li>SQL</li>
</ul>
<hr>
<h3>O projeto:</h3>
<p>Você foi contratado para desenvolver o back-end de um sistema de cadastramento de cursos online, esse sistema possui dois tipos de acesso:</p>
<ul>
  <li>Professor (Nome, usuário)</li>
  <li>Aluno (Nome, usuário)</li>
</ul>
<p>O sistema permite que o PROFESSOR cadastre novos cursos (Nome, descrição, banner).</p>
<p>Apenas o PROFESSOR pode criar,  editar, ou excluir cursos.</p>
<p>O professor pode liberar ou remover acesso para determinados alunos ou todos a algum curso.</p>
<p>O curso é formado por uma ou mais aulas, cada aula pode conter:</p>
<p>Um texto, um arquivo (pdf, xlsx, docx, pptx) ou um link.</p>
<p>O professor consegue ver todos os alunos com acesso ao curso e quantas aulas do total eles visualizaram.</p>
<p>O professor pode aprovar um aluno, CONTANTO QUE esse aluno tenha assistido a 100% das aulas daquele curso.</p>
<p>O aluno consegue apenas visualizar aulas e somente dos cursos aos quais eles tiverem sido cadastrados.</p>
<p>Cada aula que o aluno visualiza é marcada como visualizada no sistema.</p>
<h5>O aluno consegue ver seu status no curso:</h5>
<ul>
  <li>Não iniciado:  quando tem 0 aulas visualizadas</li>
  <li>Em andamento: quando tem ao menos uma aula visualizada</li>
  <li>Finalizado: Quando tem 100% das aulas visualizadas, porém sem aprovação do professor</li>
  <li>Aprovado: Quando o professor aprova</li>
</ul>
<p>Considere as regras de acesso nas APIS, você pode simular o envio da informação no header e/ou considerar o usuário realizando a requisição.</p>
<p>Não deve ser possível realizar a chamada sem ser um usuário cadastrado.</p>
<p>Detalhe como deve ser feito a chamada simulando cada um dos acessos.</p>
<p>Caso necessário deixe cadastrado ao menos 2 usuários de cada perfil.</p>
<p>Não é necessário criar um sistema de login e token, você pode simular o acesso com tokens específicos no header se for o caso. Só não esqueça de mencioná-los no envio da resposta para realização de testes.</p>
<hr>
<img src="https://elisios.com.br/sites/institutojef/draws.png">
<hr>
<h3>Funcionalidade:</h3>
<h4>Professores:</h4>
<ul>
  <li>Cadastrar Professor [sem restrições]</li>
  <li>Atuliazar Professor [apenas professores]</li>
  <li>Listar Professores [apenas professores]</li>
  <li>Listar Professor por ID [apenas professores]</li>
  <li>Remover Professores [apenas professores]</li>
</ul>
<h4>Alunos</h4>
<ul>
  <li>Cadastrar Alunos [apenas professores]</li>
  <li>Atualizar Alunos [professores e alunos]</li>
  <li>Remover Aluno  [apenas professores]</li>
  <li>Listar Todos Alunos  [apenas professores]</li>
  <li>Listar Aluno por Email  [apenas professores]</li>
  <li>Listar Aluno por ID [professores e alunos]</li>
</ul>
<h4>Cursos</h4>
<ul>
  <li>Cadastrar Curso [apenas professores]</li>
  <li>Atualizar Curso [apenas professores]</li>
  <li>Listar Curso [professores e alunos]</li>
  <li>Listar Curso por ID [professores e alunos]</li>
  <li>Remover Curso [apenas professores]</li>
</ul>
<h4>Aulas</h4>
<ul>
  <li>Cadastrar Aula [apenas professores]</li>
  <li>Atualizar Aula [apenas professores]</li>
  <li>Remover Aula [apenas professores]</li>
  <li>Listar Aula [professores e alunos]</li>
  <li>Listar Aula por ID [professores e alunos]</li>
</ul>
<h4>Vinculo Alunos com Cursos (Cadastrar Aluno no Curso)</h4>
<ul>
  <li>Criar Vinculo [professores e alunos]</li>
  <li>Atualizar Status do Curso Manual [apenas professores]</li>
  <li>Remover Vinculo [apenas professores]</li>
  <li>Listar Cursos do Aluno [professores e alunos]</li>
  <li>Listar Alunos que fazem parte do Curso [apenas professores]</li>
  <li>Atualizar Visualização da Aula [professores e alunos]</li>
</ul>
<h4>AulasConteudo (adicionar Anexo para a Aula)</h4>
<ul>
  <li>Criar Conteudo para Aula [somente professor]</li>
  <li>Remover Conteudo para Aula [somente professor]</li>
  <li>Listar Conteudo por ID_AULA [somente professor]</li>
  <li>Listar Conteudos por ID [somente professor]</li>
</ul>
<hr>

<h3><b>Swagger</b> : http://localhost:3001/api/ <small>[ não terminado ]</small></h3>
