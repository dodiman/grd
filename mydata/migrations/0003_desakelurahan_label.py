# Generated by Django 3.2.4 on 2021-07-28 01:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mydata', '0002_rename_nama_desakelurahan_value'),
    ]

    operations = [
        migrations.AddField(
            model_name='desakelurahan',
            name='label',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
