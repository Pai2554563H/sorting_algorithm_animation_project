from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.
def bubble_sorting_algorithm(request):

    context_dict = {'boldmessage': 'Hello, this is bubble!'}
    return render(request, 'sorting_algorithm/bubble_sorting.html',context=context_dict)

def selection_sorting_algorithm(request):

    context_dict = {'boldmessage': 'Hello, this is selection!'}
    return render(request, 'sorting_algorithm/selection_sorting.html',context=context_dict)

def insertion_sorting_algorithm(request):

    context_dict = {'boldmessage': 'Hello, this is insertion!'}
    return render(request, 'sorting_algorithm/insertion_sorting.html',context=context_dict)





