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
sudo su
cat > /etc/docker/daemon.json <<EOF
{
  "exec-opts": ["native.cgroupdriver=systemd"],
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "100m"
  },
  "storage-driver": "overlay2"
}
EOF

exit

sudo usermod -aG docker $USER
sudo reboot
kubectl get nodes
---