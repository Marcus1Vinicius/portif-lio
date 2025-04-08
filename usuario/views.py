from django.shortcuts import render
from .models import Usuario, Skill, Projeto, Rede_Social

def index(request):
    usuarios = Usuario.objects.all()
    skills = Skill.objects.all()
    projetos = Projeto.objects.all()
    redes_sociais = Rede_Social.objects.all()
    context={}
    context['usuarios'] = usuarios
    context['skills'] = skills
    context['projetos'] = projetos
    context['redes'] = redes_sociais
    return render(request, 'index.html', context)

def modal_sobre(request):
    usuarios = Usuario.objects.all()
    context={}
    context['usuarios'] = usuarios
    return render(request, 'modal_sobre_mim.html', context)


