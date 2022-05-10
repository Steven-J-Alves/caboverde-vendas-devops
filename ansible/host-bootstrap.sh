#!/bin/bash

source venv/bin/activate 

git restore bootstrap-aws-hosts/hosts 

cd bootstrap-aws-hosts

export ANSIBLE_HOST_KEY_CHECKING=False

ansible-playbook main.yaml -i hosts  
