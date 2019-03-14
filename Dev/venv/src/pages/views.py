from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def home_view(request,*args,**kwargs):
	return render(request,"home.html",{})
	#return HttpResponse("<h1>Hello World</h1>") #html code-string form

def contact_view(request,*args,**kwargs):
	#return HttpResponse("<h1>Contacts Page</h1>")
	return render(request,"contacts.html",{})

def about_view(request,*args,**kwargs):
	my_context={
	"my_text":"This is about us",
	"my_number":123,
	"my_list":[1,2,3]
	}
	return render(request,"about.html",my_context)
