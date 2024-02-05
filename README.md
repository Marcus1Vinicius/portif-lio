# PORTIFÓLIO - Marcus Vinicius de Oliveira

# Configuração do projeto
Para clonar o projeto, você deverá apenas baixar o arquivo zipado, ou para ser mais rapido, abrir o terminal do GIT em sua maquina e dar o comado
```
https://github.com/Marcus1Vinicius/portif-lio.git
```

Após isso, você deverá criar o ambiente virtual do django usando o comando no terminal do VS code ou no CMD dentro da pasta criada pelo GIT:

# Configurando o ambiente no windows:
```
python -m venv venv
```

Lembrando que temos que ativar o ambiente virtual do python, isso sendo feito da seguinte forma:
```
cd venv/scripts
activate
cd ..
cd ..
```

E por ultimo, você apenas precisará baixar os pacotes necessarios para rodar o servido do Django, para isso só executar no terminal com o venv já ativado:
```
pip install -r requirements.txt
```

Com tudo já instalado, só precisaremos migrar os validadores do Django e após isso só rodar o servidor.
```
python manage.py makemigrations
python manage.py runserver
```

