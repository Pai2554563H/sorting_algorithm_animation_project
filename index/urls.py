# urls of app sorting_algorithm

from django.urls import path
from index import views

app_name = 'index'

urlpatterns = [
    # initial page
    path('', views.homepage, name='home'),
    
]







