dockerhub.com
digitalocean.com
aws.com
namecheap.com
---
install virtualbox
install minkube
install docker
install kubectl
install awscli
install doctl
install skaffold
install ansible
install terraform

---
cicd
github actions


---
local
kubectl config view
kubectl config use-context <name>

sudo vi /etc/hosts
docker login
cmd -> skaffold dev

prod
doctl auth init 
doctl kubernetes cluster kubeconfig save caboverde-vendas-devops

stag
---
domains

---
To make dynamic
URL
'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local' //dev
http://www.caboverde-vendas-prod.xyz/ // prod
http://www.caboverde-vendas-stag.xyz/ // online stag

DATABASE

ENVS

---
1. run app-bootstrap.sh
2. apply ingress
3. apply manifests


TODO:
refactor
helm
private charts repo 
private docker registry
verdaccio
nexus or artifactory
ingress with traffic

deploy jenkins in k8s

monitoramento
logs
service mesh
observabilidade
tracing

local and public dns mangament

new relic 
sentry

api gateway
cors
nginx proxy

deployment type (canary with istio)

---
// problemas
fix anotaions domain in ingress controller
database not working e prod (maybe is the env file that I added)

------------------
CLOUD
In client api folder -> baseURL: 'http://www.caboverde-vendas-prod.xyz/',
1. config doctl with k8s context
doctl kubernetes cluster kubeconfig save caboverde-vendas-devops
2. run app-bootstrap-sh
3. update readme on master infra run .github/workflows/infra-manifests-prod-deployment.yaml 

grafana credentials
admin
prom-operator
