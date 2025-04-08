
# 🧑‍💻 Portfólio - Marcus Vinicius de Oliveira

Este é um projeto de portfólio pessoal desenvolvido com Django. Ele tem como objetivo apresentar minhas habilidades, projetos e formas de contato de maneira moderna e funcional.

---

## ⚙️ Configuração do Projeto

### 1. Clone o repositório

Você pode baixar o projeto como um arquivo `.zip` ou, de forma mais rápida, cloná-lo diretamente com o Git:

```bash
git clone https://github.com/Marcus1Vinicius/portif-lio.git
```

---

### 2. Crie e ative o ambiente virtual

#### 🔵 Windows

No terminal, dentro da pasta do projeto, crie o ambiente virtual:

```bash
python -m venv venv
```

Ative o ambiente virtual:

```bash
venv\Scripts\activate
```

#### 🟢 Linux

No terminal, dentro da pasta do projeto, crie o ambiente virtual:

```bash
python3 -m venv venv
```

Ative o ambiente virtual:

```bash
source venv/bin/activate
```

---

### 3. Instale as dependências

Com o ambiente virtual ativado, instale os pacotes necessários:

```bash
pip install -r requirements.txt
```

---

### 4. Execute as migrações e inicie o servidor

Agora, aplique as migrações e rode o servidor local:

```bash
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

> Em sistemas Linux, use `python3` se necessário:

```bash
python3 manage.py runserver
```

---

### ✅ Pronto!

Acesse o projeto no navegador:  
[http://localhost:8000](http://localhost:8000)

---

### 🛠️ Tecnologias Utilizadas

- Python 3
- Django
- HTML5
- CSS3
- JavaScript
- Bootstrap
- Git

---

### 📂 Estrutura do Projeto

- `usuario/`: App principal com views, models e templates
- `static/`: Arquivos CSS e JavaScript
- `templates/`: Templates HTML
- `media/`: Imagens carregadas via admin



