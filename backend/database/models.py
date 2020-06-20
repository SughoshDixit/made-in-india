import uuid
from django.db import models

# Create your models here.


class Company(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=150)
    description = models.CharField(max_length=3000)
    website_url = models.URLField()

    class Meta:
        verbose_name_plural = 'companies'


class Category(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=150)

    class Meta:
        verbose_name_plural = 'categories'


class Product(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=150)
    logo = models.URLField(
        default="http://www.nashikproperty.com/uploads/builder-logo/default-logo.png")
    isIndian = models.BooleanField(default=False)
    description = models.CharField(max_length=3000)
    blog_url = models.URLField(null=True)
    website_url = models.URLField(null=True)
    company = models.ForeignKey('Company', on_delete=models.CASCADE)
    category = models.ForeignKey('Category', on_delete=models.CASCADE)


class Review(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user_id = models.CharField(max_length=150)
    product = models.ForeignKey('Product', on_delete=models.CASCADE)
    text = models.CharField(max_length=3000)
    rating = models.ForeignKey(
        'Rating', on_delete=models.DO_NOTHING)
    created_time = models.DateTimeField(auto_now_add=True)
    updated_time = models.DateTimeField(auto_now=True)


class Rating(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    review_text = models.CharField(max_length=3000)
    rating = models.IntegerField()
    description = models.CharField(max_length=30)


class Keyword(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    product = models.ForeignKey('Product', on_delete=models.CASCADE)
    keyword = models.CharField(max_length=50)
