criar venv
install boto3 e boto
usar container para exec ansible e terraform
export ANSIBLE_HOST_KEY_CHECKING=False

provision
ansible-playbook main.yaml -i hosts  

installk8s
ansible-playbook main.yml -i hosts