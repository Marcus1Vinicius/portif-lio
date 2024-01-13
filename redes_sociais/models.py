from django.db import models

# Create your models here.
class Rede_Social(models.Model):
    nome = models.CharField(max_length=15, null=False, unique = True)
    foto = models.ImageField(upload_to="projetos/", null=True)
    link = models.URLField()