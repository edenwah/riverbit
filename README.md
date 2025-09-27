## Riverbit

## Deployment

Production deployments are automated via GitHub Actions in `.github/workflows/deploy.yml`.

- The workflow runs on pushes to `main` (e.g. PR merges) and can also be triggered manually.
- It builds the project with the Vercel CLI and publishes a production deployment.
- Configure the following GitHub secrets in the repository before the workflow can succeed:
  - `VERCEL_TOKEN`: Personal Vercel access token with permission to deploy the project.
  - `VERCEL_ORG_ID`: ID of the Vercel team (`team_YwHx66PebFoyNLauS9jyYTO7`).
  - `VERCEL_PROJECT_ID`: ID of the Vercel project (`prj_MQlJBzJ2GVsrkrAW0llXj0161XEA`).

If your production branch differs from `main`, update the branch filter in the workflow file accordingly.
