from django.db import models

class DesaKelurahan(models.Model):
	value = models.CharField(max_length=100)
	label = models.CharField(max_length=100, null=True, blank=True)

	def __str__(self):
		return self.value

class Anggota(models.Model):
	nama = models.CharField(max_length=100)
	alamat = models.CharField(max_length=100)
	status = models.CharField(max_length=100)

	def __str__(self):
		return self.nama

class Foto(models.Model):
	keterangan = models.CharField(max_length=100, blank=True, null=True)
	selfi = models.ImageField(null=True, blank=True)
	ktp = models.ImageField(null=True, blank=True)
	diri = models.ImageField(null=True, blank=True)
	anggota = models.ForeignKey(Anggota, on_delete=models.CASCADE)

	def __str__(self):
		return self.keterangan