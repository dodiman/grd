from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt

from .serializers import *
from rest_framework import viewsets, permissions
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.parsers import JSONParser 
from django.http import JsonResponse

from django.contrib.auth.decorators import login_required
from accounts.decorators import unauthenticated_user, allowed_users, admin_only

def myapp(request):
	context = {}
	return render(request, 'mydata/myapp.html', context)

def index(request):
	tampung = 'kosong'
	db = DesaKelurahan.objects.all()
	kamus = DesaKelurahan.objects.values()
	data_js = [value for value in kamus]
	if request.method == 'POST':
		tampung = request.POST['pilih']

	print(kamus)

	context = {
		'tampung': tampung,
		'data_js': JsonResponse(data_js, safe=False),
		'db': db,
	}
	return render(request, 'mydata/index.html', context)

@api_view(['GET'])
def apiIndex(request):
	db = DesaKelurahan.objects.all()
	serializer = DesaKelurahanSerializer(db, many=True)
	return Response(serializer.data)

@login_required(login_url='login')
@csrf_exempt
def anggota(request):
	if request.method == 'GET':
		dataAnggota = Anggota.objects.all()
		serializer= AnggotaSerializer(dataAnggota, many=True)
		return JsonResponse(serializer.data, safe=False)

	# create data baru
	elif request.method == 'POST':
		data = JSONParser().parse(request)
		serializer = AnggotaSerializer(data=data)
		if serializer.is_valid():
			serializer.save()
			return JsonResponse(serializer.data, status=201)
		
		return JsonResponse(serializer.errors, status=400)

@login_required(login_url='login')
@csrf_exempt
def anggota_detail(request, pk):
	try:
		dataAnggota = Anggota.objects.get(id=pk)
	except dataAnggota.DoesNotExist:
		return HttpResponse(status=404)

	if request.method == 'GET':
		serializer = AnggotaSerializer(dataAnggota)
		return JsonResponse(serializer.data)

	elif request.method == 'PUT':
		data = JSONParser().parse(request)
		serializer = AnggotaSerializer(dataAnggota, data=data)
		if serializer.is_valid():
			serializer.save()
			return JsonResponse(serializer.data)
		return JsonResponse(serializer.errors, status=400)

	elif request.method == 'DELETE':
		dataAnggota.delete()
		return HttpResponse(status=204)

@csrf_exempt
def fotoAnggota(request):
	foto = Foto.objects.all()
	serializer = FotoSerializer(foto, many=True)
	return JsonResponse(serializer.data, safe=False)

@login_required(login_url='login')
@csrf_exempt
def filter_anggota(request, pk):
	try:
		dataAnggota = Anggota.objects.filter(alamat__startswith=pk)
	except Anggota.DoesNotExist:
		return HttpResponse(status=404)

	if request.method == 'GET':
		serializer = AnggotaSerializer(dataAnggota, many=True)
		return JsonResponse(serializer.data, safe=False)

def dashboard(request):
	context = {

	}
	
	return render(request, 'mydata/dashboard.html', context)

def tabel(request):
	context = {}
	return render(request, 'mydata/table.html', context)

def read(request):
	context = {}
	return render(request, 'mydata/crud.html', context)

def paginasi(request):
	context = {}
	return render(request, 'mydata/paginasi.html', context)