from django.contrib import admin
from .models import Category, Company, Keyword, Product, Rating, Review
# Register your models here.
admin.site.register(Category)
admin.site.register(Company)
admin.site.register(Keyword)
admin.site.register(Product)
admin.site.register(Rating)
admin.site.register(Review)
