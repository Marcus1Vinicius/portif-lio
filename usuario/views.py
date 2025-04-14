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
    data = dict()
    context={}
    context['usuarios'] = usuarios
    context['redes'] = redes_sociais
    data['html_form'] = render_to_string('modal_sobre_mim.html', context, request=request)
    data['status_code'] = 200
    return JsonResponse(data)

# def modal_sobre(request):
#     usuarios = Usuario.objects.all()
#     redes_sociais = Rede_Social.objects.all()
#     data = dict()
#     context={}
#     context['usuarios'] = usuarios
#     context['redes'] = redes_sociais
#     data = render_to_string('modal_sobre_mim.html', context, request=request)
#     return JsonResponse({'html_modal': data, 'status_code': 200})