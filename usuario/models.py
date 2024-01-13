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