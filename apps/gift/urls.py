from django.conf.urls import url
from . import views

urlpatterns = [
    #url(r'^admin/', admin.site.urls),
    url(r'^$', views.index, name='index'),
    url(r'^konami$', views.konami, name='konami'),
    url(r'^riddle$', views.riddle, name='riddle'),

]
