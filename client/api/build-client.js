import axios from 'axios';

const deploy_infra = process.env.DEPLOY_INFRA
export default ({ req }) => {
  if (typeof window === 'undefined') {
    if (deploy_infra === "staging") {
      return axios.create({
        baseURL: 'http://staging.caboverde-vendas-prod.xyz/',
        headers: req.headers,
      });
    } else if (deploy_infra === "production") {
      return axios.create({
        baseURL: 'http://www.caboverde-vendas-prod.xyz/',
        headers: req.headers,
      });
    } else {
      return axios.create({
        baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/',
        headers: req.headers,
      });
    }
  } else {
    return axios.create({
      baseUrl: '/',
    });
  }
};
