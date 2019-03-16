from django.conf.urls import url

from . import views #this will now import all the functions from views:

urlpatterns = [
    url(r'^$',views.home),
]