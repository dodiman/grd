from django.urls import path, include

from rest_framework import routers
from rest_framework.urlpatterns import format_suffix_patterns


from . import views

urlpatterns = [
	path('', views.index, name='mydata'),
	path('dashboard', views.dashboard, name='dashboard_mydata'),
	path('tabel', views.tabel, name='tabel_mydata'),
	path('api', views.apiIndex, name='apiIndex'),
	path('api_anggota', views.anggota, name="api_anggota"),
	path('api_foto_anggota', views.fotoAnggota, name="foto_anggota"),
	path('filter_anggota/<str:pk>', views.filter_anggota, name="filter_anggota"),

	# crud
	path('read', views.read, name="read_mydata"),
	path('anggota_detail/<str:pk>', views.anggota_detail, name="anggota_detail"),

	# paginasi
	path('paginasi', views.paginasi, name="paginasi_mydataa"),

	# myapp
	path('myapp', views.myapp, name='myapp_mydata'),
]
