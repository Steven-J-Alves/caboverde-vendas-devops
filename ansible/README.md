criar venv
install boto3 e boto

usar container para exec ansible e terraform

.ssh/sales-devops-tcc.pem
ssh-add ~/.ssh/sales-devops-tcc.pem
source venv/bin/activate
export ANSIBLE_HOST_KEY_CHECKING=False

provision
ansible-playbook main.yaml -i hosts  

installk8s
ansible-playbook main.yml -i hosts

---
aws k8s kube adm kubelt e kubectl

manual cmds
kubectl get nodes
---
