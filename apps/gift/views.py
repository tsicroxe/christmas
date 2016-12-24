from django.shortcuts import render, HttpResponse, redirect
# from .models import User
from django.contrib import messages
from django.core.urlresolvers import reverse

def index(request):
    return render(request, 'gift/index.html')

def konami(request):
    return render(request, 'gift/konami.html')

def riddle(request):
    return render(request, 'gift/riddle.html')
