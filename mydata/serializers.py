# from django.contrib.auth.models import User, Group
from .models import *
from rest_framework import serializers

class DesaKelurahanSerializer(serializers.ModelSerializer):
	class Meta:
		model = DesaKelurahan
		fields = '__all__'

class AnggotaSerializer(serializers.ModelSerializer):

	class Meta:
		model= Anggota
		fields = '__all__'

class FotoSerializer(serializers.ModelSerializer):

	class Meta:
		model = Foto
		fields = '__all__'