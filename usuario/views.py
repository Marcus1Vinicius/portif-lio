from django.shortcuts import render
from .models import Usuario, Skill, Projeto, Rede_Social
from django.template.loader import render_to_string
from django.http import JsonResponse

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
    redes_sociais = Rede_Social.objects.all()
    context={}
    context['usuarios'] = usuarios
    context['redes'] = redes_sociais
    html_do_modal = render_to_string('modal_sobre_mim.html', context, request=request)
    return JsonResponse({'CONTEUDO DO MODAL': html_do_modal})



