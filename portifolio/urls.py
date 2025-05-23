"""
URL configuration for portifolio project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from usuario import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('modal/sobre/', views.modal_sobre, name='modal_sobre'),
    path('modal/skills/', views.modal_skills, name='modal_skills'),
    path('modal/redes/', views.modal_redes, name='modal_redes'),
    path('modal/projetos/', views.modal_projetos, name='modal_projetos'),
    path('modal/formacoes/', views.modal_formacoes, name='modal_formacoes'),    
    path('', views.index, name='index'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
