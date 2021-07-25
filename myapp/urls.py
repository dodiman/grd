from django.urls import path
from . import views

urlpatterns = [
	path('', views.index, name="myapp_index"),
	path('pasarwajo', views.pasarwajo, name="myapp_pasarwajo"),
]