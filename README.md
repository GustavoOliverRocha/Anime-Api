### Getting started
1. Você vai precisar do [NodeJS](https://nodejs.org/en/download/) instalado na sua maquina;
> Também vai precisar de um servidor local para rodar o banco de dados como o XAMPP,WAMP entre outros;
2. Após isso abra o arquivo **config.js** em um editor de codigo e altere o valor das constantes de acordo com as sus configurações;
> Caso ja tenha seu banco de dados instalado, recomendo ja criar uma base de dados e inserir o nome dela no arquivo **config.js**;
3. Depois isso abra o aquivo **index.js** e altere o valor da constante **porta** e insira o numero de uma porta que não esteja em uso na sua maquina;
4. Caso ja tenha o [NodeJS](https://nodejs.org/en/download/),o servidor do bando de dados instalado e iniciado com sua base de dados ja criada e as configurações prontas abra um terminal e acesse o diretório do projeto por ele;
5. Estando ja no diretório do projeto pelo terminal entre com o comando **npm install**
6. Depois disso entre com o comando **node database/create_table.js** para já criar as tabelas na base de dados;
7. Após tudo isso só entrar com o comando **node index.js** e caso receba a mensagem de **"Server rodando na porta: "** quer dizer que funcionou
> É bom também entrar com o comando **node database/db-core.js** para testar a conexão com o banco de dados