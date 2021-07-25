from django import forms

class PencarianForm(forms.Form):
	nama = forms.CharField(max_length=200)
	