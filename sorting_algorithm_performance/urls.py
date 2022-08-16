# urls of app sorting_algorithm

from django.urls import path
from sorting_algorithm_performance import views

app_name = 'sorting_algorithm_performance'

urlpatterns = [
    path('', views.AlgorithmPerformance, name='algorithm_performance'),
    
]







