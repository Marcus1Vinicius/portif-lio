from django.db import models

# Create your models here.
class Projeto(models.Model):
    nome = models.CharField(max_length=15, null=False, unique = True)
    foto = models.ImageField(upload_to="projetos/", null=True)
    sobre = models.TextField()
    link = models.URLField()