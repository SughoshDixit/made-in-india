from django.db import models

# Create your models here.


class Category(models.Model):
    """[Category Model]
"""
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=250)
    description = models.TextField()


class Product(models.Model):
    """[Product Model]
"""
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=250)
    description = models.TextField()
    is_indian = models.BooleanField(default=False)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
