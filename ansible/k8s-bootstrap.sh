#!/bin/bash

ssh-add ~/.ssh/sales-devops-tcc.pem  
export ANSIBLE_HOST_KEY_CHECKING=False 
cd create-install-aws-k8s && ansible-playbook main.yml -i hosts
