from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def homepage(request):

    context_dict = {'boldmessage': 'Hello, this is home page!'}
    return render(request, 'index/home.html',context=context_dict)
