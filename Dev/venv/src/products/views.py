from django.shortcuts import render, get_object_or_404, redirect
from .forms import ProductForm , RawProductForm
from .models import Product

def product_create_view(request):
	my_form=RawProductForm()
	if(request.method == "POST"):
		form=RawProductForm(request.POST) #here request.POST is used for validation
		if form.is_valid():
			Product.objects.create(**form.cleaned_data)
		else:
			print(form.errors)

	context = {
	"form":form
	}
	return render(request,"products/product_create.html",context)

def product_delete_view(request,id):
	obj=get_object_or_404(Product,id=id)
	if request.method == "POST" :
		obj.delete()
		return redirect('../../')
	context = {
	"object":obj
	}
	return render(request,"products/product_delete.html",context)

def product_list_view(request):
	queryset=Product.objects.all() #list of objects
	context= {
	"object_list": queryset
	}
	return render(request,"products/product_list.html",context)

# def product_create_view(request):
# 	context={}
# 	print(request.POST.get('title'))

# 	print(request.POST)
# 	return render(request,"products/product_create.html",context)

# def product_create_view(request):
# 	form = ProductForm(request.POST or None)
# 	if form.is_valid():
# 		form.save()
# 		form = ProductForm()
# 	context = {
# 		'form':form
# 	}
# 	return render(request,"products/product_create.html",context)



# Create your views here.
def product_detail_view(request):
	obj=Product.objects.get(id=1)
	context={
		'object':obj
	}
	return render(request,"products/product_detail.html",context)
#here the template is inside the app products.


def dynamic_lookup_view(request,my_id):
	#obj=Product.objects.get(id=my_id)
	obj=get_object_or_404(Product,id=my_id)
	context={
	"object":obj
	}
	return render(request,"products/product_detail.html",context)