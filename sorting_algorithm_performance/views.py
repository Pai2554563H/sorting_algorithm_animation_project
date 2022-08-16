from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def AlgorithmPerformance(request):
    context_dict = {'boldmessage': 'Hello, this is algorithm performance!'}
    return render(request, 'sorting_algorithm_performance/algorithm_performance.html',context=context_dict)


