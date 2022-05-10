#!/bin/bash

source venv/bin/activate 
git restore bootstrap-aws-hosts/hosts 
cd bootstrap-aws-hosts
ansible-playbook main.yaml -i hosts  
