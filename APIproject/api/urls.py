from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import ArticleViewSet , UserViewSet

router = DefaultRouter()
router.register('articles',ArticleViewSet,basename='articles')
router.register('users',UserViewSet)



urlpatterns =[
    path('',include(router.urls))
#     path('articles/',ArticleList.as_view()),
#     path('articles/<int:id>/',ArticleDetails.as_view())
]