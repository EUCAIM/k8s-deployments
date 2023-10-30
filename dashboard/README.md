# DASHBOARD DEPLOYMENT
For deploying the dashboard, you have to edit the files `dash_and_mongo_pvc_and_vols-template.yaml` and `eucaim-ingress-template.yaml` and add the IP address of your NFS server. Apart from this, you may also want to add or uncomment the lines for requesting resources at `dashb-mongo.yaml` and `eucaim-dashboard-template.yaml` 

<img width="704" alt="image" src="https://github.com/EUCAIM/k8s-deployments/assets/100042312/68a67103-c20f-4d55-873a-917e0fb045a9">
