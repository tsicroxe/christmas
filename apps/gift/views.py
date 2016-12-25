from django.shortcuts import render

def index(request):
    return render(request, 'gift/index.html')

def konami(request):
    return render(request, 'gift/konami.html')

def riddle(request):
    return render(request, 'gift/riddle.html')
