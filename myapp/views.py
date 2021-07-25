from django.shortcuts import render
from .forms import *

def index(request):
	return render(request, 'myapp/index.html')

def pasarwajo(request):
	nama = ''
	form = PencarianForm();
	if request.method == 'POST':
		if form.is_valid():
			nama = form.cleaned_data['nama']

	context = {
		'form': form,
		'nama': nama,
	}
	return render(request, 'myapp/pasarwajo.html', context)