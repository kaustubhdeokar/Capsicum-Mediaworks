from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def home_view(request,*args,**kwargs):
	return render(request,"ques1_1.html",{})
	#return HttpResponse("<h1>Hello World</h1>") #html code-string form

def contact_view(request,*args,**kwargs):
	return HttpResponse("<h1>Contacts Page</h1>")
	print(request.user)