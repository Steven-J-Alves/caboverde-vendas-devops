#!/bin/bash

export \
  PROFILE=sales \
  MEMORY=8192 \
  CPUS=4 \
  DRIVER=docker \
  KUBERNETES_VERSION=v1.22.4

{ minikube --profile ${PROFILE} config set memory ${MEMORY} 
minikube --profile ${PROFILE} config set cpus ${CPUS}
minikube --profile ${PROFILE} config set disk-size 20g

minikube --profile ${PROFILE} config set vm-driver ${DRIVER}

minikube --profile ${PROFILE} config set kubernetes-version ${KUBERNETES_VERSION}
# minikube start --profile ${PROFILE} --embed-certs

minikube addons --profile ${PROFILE} enable ingress

minikube start --profile $PROFILE

minikube addons --profile ${PROFILE} enable registry
}