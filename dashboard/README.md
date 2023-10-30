# DASHBOARD DEPLOYMENT
For deploying the dashboard, you have to edit the files `dash_and_mongo_pvc_and_vols-template.yaml` and `eucaim-ingress-template.yaml` and add the IP address of your NFS server. Apart from this, you may also want to add or uncomment the lines for requesting resources at `dashb-mongo.yaml` and `eucaim-dashboard-template.yaml` 

<img width="701" alt="image" src="https://github.com/EUCAIM/k8s-deployments/assets/100042312/47dcd7cf-9710-458e-a7ab-619bc7315295">

