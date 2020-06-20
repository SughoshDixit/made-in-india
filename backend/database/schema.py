import graphene

from graphene_django.types import DjangoObjectType

from .models import Category, Company, Keyword, Product, Rating, Review


class CategoryType(DjangoObjectType):
    class Meta:
        model = Category


class CompanyType(DjangoObjectType):
    class Meta:
        model = Company


class ProductType(DjangoObjectType):
    class Meta:
        model = Product

    extra_field = graphene.String()

    def resolve_extra_field(self, info):
        return 'hello!'


class Query(object):
    category = graphene.Field(CategoryType,
                              id=graphene.String(),
                              name=graphene.String())
    categories = graphene.List(CategoryType)
    comany = graphene.Field(ProductType,
                            id=graphene.String(),
                            name=graphene.String())
    companies = graphene.List(CompanyType)
    product = graphene.Field(ProductType,
                             id=graphene.String(),
                             name=graphene.String())
    products = graphene.List(ProductType)

    def resolve_categories(self, info, **kwargs):
        return Category.objects.all()

    def resolve_companies(self, info, **kwargs):
        # We can easily optimize query count in the resolve method
        return Company.objects.select_related('product').all()

    def resolve_products(self, info, **kwargs):
        return Product.objects.all()

    def resolve_category(self, info, **kwargs):
        id = kwargs.get('id')
        name = kwargs.get('name')

        if id is not None:
            return Category.objects.get(pk=id)

        if name is not None:
            return Category.objects.get(name=name)

        return None

    def resolve_company(self, info, **kwargs):
        id = kwargs.get('id')
        name = kwargs.get('name')

        if id is not None:
            return Company.objects.get(pk=id)

        if name is not None:
            return Company.objects.get(name=name)

        return None

    def resolve_product(self, info, **kwargs):
        id = kwargs.get('id')
        name = kwargs.get('name')

        if id is not None:
            return Product.objects.get(pk=id)

        if name is not None:
            return Product.objects.get(name=name)

        return None
