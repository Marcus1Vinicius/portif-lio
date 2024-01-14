from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Usuario(models.Model):
    nome = models.CharField(max_length=15, null=False, unique = True)
    email = email = models.EmailField(unique=True)
    foto = models.ImageField(upload_to="usuario/", null=True)
    sobre = models.TextField()

    def __str__(self):
        return self.nome
    
class Skill(models.Model):
    nome = models.CharField(max_length=15, null=False, unique = True)
    foto = models.ImageField(upload_to="skills/", null=True)
    sobre = models.TextField()

    def __str__(self):
        return self.nome

class Rede_Social(models.Model):
    nome = models.CharField(max_length=15, null=False, unique = True)
    foto = models.ImageField(upload_to="redes_sociais/", null=True)
    link = models.URLField()

    def __str__(self):
        return self.nome
    
class Projeto(models.Model):
    nome = models.CharField(max_length=15, null=False, unique = True)
    foto = models.ImageField(upload_to="projetos/", null=True)
    sobre = models.TextField()
    link = models.URLField()

    def __str__(self):
        return self.nome