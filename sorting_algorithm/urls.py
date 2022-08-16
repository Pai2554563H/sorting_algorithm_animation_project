# urls of app sorting_algorithm

from django.urls import path
from sorting_algorithm import views

app_name = 'sorting_algorithm'

urlpatterns = [
    # initial page
    path('bubble_sorting/',views.bubble_sorting_algorithm,name='bubble_sorting'),
    path('selection_sorting/',views.selection_sorting_algorithm,name='selection_sorting'),
    path('insertion_sorting/',views.insertion_sorting_algorithm,name='insertion_sorting'),

]







