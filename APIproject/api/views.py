from django.shortcuts import render,HttpResponse
from .models import Article
from .serializers import ArticleSerializer
from rest_framework.response import Response 
from rest_framework.parsers import JSONParser
from rest_framework.decorators import APIView
from rest_framework import status



class ArticleList(APIView):
    def get(self,request):
        article_data = Article.objects.all()
        serializer = ArticleSerializer(article_data,many=True)
        return Response(serializer.data)
    
    def post(self,request):
        serializer = ArticleSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ArticleDetails(APIView):
    def get_object(self,id):
        try: 
            return Article.objects.get(id=id)
        except Article.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND )
    

    def get(self,request,id):
        article = self.get_object(id)
        serializer = ArticleSerializer(article)
        return Response(serializer.data)
    

    def put(self,request,id):
        article = self.get_object(id)
        serializer = ArticleSerializer(article,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        else :
            return Response (serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        
    def delete(self,request,id):
        article = self.get_object(id)
        article.delete()
        return Response({'message':'deleted'}, status=status.HTTP_204_NO_CONTENT)











'''
# Create your views here.
@api_view(['GET','POST'])
def article_list(request):
    #GET all aarticle 
    if request.method == 'GET':
         article_data = Article.objects.all()
         serializer = ArticleSerializer(article_data,many=True)
         return Response(serializer.data)
    
    elif request.method == 'POST':
        # data =JSONParser().parse(request)

        serializer = ArticleSerializer(request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET','PUT','DELETE'])
def article_details(request,pk):
    try: 
        article =Article.objects.get(pk=pk)
    except article.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND )
    if request.method=='GET':
        serilizer = ArticleSerializer(article)
        return Response(serilizer.data,status=status.HTTP_201_CREATED)
    elif request.method=='PUT':
        data =JSONParser().parse(request)
        serializer = ArticleSerializer(article,data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    elif request.method=='DELETE':
        article.delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)

'''