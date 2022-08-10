#!/bin/bash

ssh-add ~/.ssh/sales-devops-tcc.pem  
export ANSIBLE_HOST_KEY_CHECKING=False 
ansible-playbook main.yml -i hosts
