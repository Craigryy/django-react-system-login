from django.db import models

# Create your models here.
class Article(models.Model):
    name = models.CharField(max_length=20)
    description = models.TextField()

    def __str__(self):
        return self.title

    
