from django.shortcuts import render

def index(request):
    return render(request, 'menu/index.html')


# Create your views here.
