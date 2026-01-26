

## Namespaces

There are two namespaces:

- **fedcomp** where all the resoources directly related to the services (deployments, secrets, ingresses etc.) plus the service account roles and role bindings are
- **fedcomp-users** where the actual service accounts and their tokens (as secrets) are plus the role & role binding for the admin user

Don't forget to  change the name of the namespace across the recipes if you don't want to use the default "fedcomp".

## Service accounts

There are two types of service accounts:

- admin defined in __user-admin-namespace-sa.yml__
- regular defined in __user-sa.yml__

The former has full access to all resources in the **fedcomp** and **fedcomp-users** namespaces. Its role and role binding have to be deployed in both of the aforementioned namespaces to give it access. The latter service account has limited rights, therefore the roles and rolebindings must be deployed only in the **fedcomp** namespace.

To protect the tokens, the secrets generating the tokens must be deployed by the admin in the **fedcomp-users** namespaces, as should be the actual service accounts.