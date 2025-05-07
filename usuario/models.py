from django.db import models
from django.contrib.auth.models import User

class Usuario(models.Model):
    nome = models.CharField(max_length=15, null=False, unique=True)
    email = models.EmailField(unique=True)
    foto = models.ImageField(upload_to="usuario/", null=True)
    foto_tablet = models.ImageField(upload_to="usuario/", null=True) #imagem de tablet
    foto_pc = models.ImageField(upload_to="usuario/", null=True) #imagem de pc
    sobre = models.TextField()

    def __str__(self):
        return self.nome

class Skill(models.Model):
    nome = models.CharField(max_length=15, null=False, unique=True)
    foto = models.ImageField(upload_to="skills/", null=True)
    sobre = models.TextField()
    dono = models.ForeignKey(Usuario, on_delete=models.CASCADE)

    def __str__(self):
        return self.nome


class Rede_Social(models.Model):
    nome = models.CharField(max_length=15, null=False, unique = True)
    foto = models.ImageField(upload_to="redes_sociais/", null=True)
    link = models.URLField()
    dono = models.ForeignKey(Usuario, on_delete=models.CASCADE)

    def __str__(self):
        return self.nome
    
class Projeto(models.Model):
    nome = models.CharField(max_length=15, null=False, unique = True)
    foto = models.ImageField(upload_to="projetos/", null=True)
    sobre = models.TextField()
    link = models.URLField()
    dono = models.ForeignKey(Usuario, on_delete=models.CASCADE)

    def __str__(self):
        return self.nome

class Diploma(models.Model):
    instituicao = models.CharField(max_length=15, null=False, unique = True)
    foto = models.ImageField(upload_to="projetos/", null=True)
    sobre = models.TextField()
    dono = models.ForeignKey(Usuario, on_delete=models.CASCADE)

    def __str__(self):
        return self.instituicao