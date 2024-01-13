from django.db import models

# Create your models here.
class Skill(models.Model):
    nome = models.CharField(max_length=15, null=False, unique = True)
    foto = models.ImageField(upload_to="skills/", null=True)
    sobre = models.TextField()