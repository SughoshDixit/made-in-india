# Generated by Django 3.0.6 on 2020-05-16 07:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0003_auto_20200515_1843'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='category',
            name='is_indian',
        ),
        migrations.AddField(
            model_name='product',
            name='is_indian',
            field=models.BooleanField(default=False),
        ),
    ]
