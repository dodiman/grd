from django.contrib import admin
from import_export.admin import ImportExportModelAdmin

from .models import *


@admin.register(DesaKelurahan)
class DesaKelurahanAdmin(ImportExportModelAdmin):
	pass

@admin.register(Anggota)
class AnggotaAdmin(ImportExportModelAdmin):
	pass

@admin.register(Foto)
class FotoAdmin(ImportExportModelAdmin):
	pass