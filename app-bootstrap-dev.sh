#!/bin/bash

kubectl create namespace staging  
kubectl create secret generic jwt-secret --from-literal=JWT_KEY=wd32d3wdasd2awd2dwdwdwd
kubectl create secret generic jwt-secret --from-literal=JWT_KEY=wd32d3wdasd2awd2dwdwdwd -n staging
kubectl create secret generic stripe-secret --from-literal=STRIPE_KEY=sk_test_51KZNM2DemEgezl57oYzXk78jJPdcNmd50ruGZJTMLtXJaNvBEo9PabNAYdzxSErwO3NvTNGHceTjDddfExLyUzoB00p4rocvKM
kubectl create secret generic stripe-secret --from-literal=STRIPE_KEY=sk_test_51KZNM2DemEgezl57oYzXk78jJPdcNmd50ruGZJTMLtXJaNvBEo9PabNAYdzxSErwO3NvTNGHceTjDddfExLyUzoB00p4rocvKM -n staging