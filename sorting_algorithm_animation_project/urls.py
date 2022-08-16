"""sorting_algorithm_animation_project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
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

from django.urls import include

# media
from django.conf import settings
from django.conf.urls.static import static

# app sorting_algorithm
from index import views

urlpatterns = [

    # sorting_algorithm
    path('',views.homepage,name='home'),

    # The above maps any URLs starting with rango/ to be handled by rango.
    path('sorting_algorithm/',include('sorting_algorithm.urls')),
    path('sorting_algorithm_performance/',include('sorting_algorithm_performance.urls')),
    path('index/',include('index.urls')),

    path('admin/', admin.site.urls),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
