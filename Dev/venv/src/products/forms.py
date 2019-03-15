from django import forms

from .models import Product

class ProductForm(forms.ModelForm):
	class Meta:
		model = Product
		fields = [
			'title',
			'description',
			'price'
		]

class RawProductForm(forms.Form):
	title=forms.CharField() # if-----as the label is blank title will not appear
	description=forms.CharField(
			required=False,
			widget=forms.Textarea(
				attrs={
					"class": "new-class-name-two",
					"id": "id-for-textarea",
					"rows" : 4,
					"cols" : 10
				}

				))
	price=forms.DecimalField()
	