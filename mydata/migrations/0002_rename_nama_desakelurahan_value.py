# Generated by Django 3.2.4 on 2021-07-28 01:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('mydata', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='desakelurahan',
            old_name='nama',
            new_name='value',
        ),
    ]
