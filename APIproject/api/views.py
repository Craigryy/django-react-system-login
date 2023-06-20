from django.shortcuts import render,HttpResponse
from .models import Article
from .serializers import ArticleSerializer
from django.http import Http404, JsonResponse
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
@csrf_exempt
def article_list(request):
    #GET all aarticle 
    if request.method == 'GET':
         article_data = Article.objects.all()
         serializer = ArticleSerializer(article_data,many=True)
         return JsonResponse(serializer.data,safe=False)
    
    elif request.method == 'POST':
        data =JSONParser().parse(request)
        serializer = ArticleSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data,status=201)
        return JsonResponse(serializer.errors, status=400)

@csrf_exempt
def article_details(request,pk):
    try:
        article =Article.objects.get(pk=pk)
    except article.DoesNotExist:
        return HttpResponse(status=404)
    if request.method=='GET':
        serilizer = ArticleSerializer(article)
        return JsonResponse(serilizer.data,status=201)
    elif request.method=='PUT':
        data =JSONParser().parse(request)
        serializer = ArticleSerializer(article,data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors)
    elif request.method=='DELETE':
        article.delete()
        return HttpResponse(status=204)

