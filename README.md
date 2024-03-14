# Impactify User Manual

Welcome to the user manual for Impactify. This guide will assist you in installing, setting up, and using the application effectively.

## Installing the Application

### Cloning the Project

First, clone the project repository and navigate into the project directory:

```bash
git clone https://github.com/BrianTaylor9/CS130_Project.git
cd CS130_Project
```

## Installing Backend Dependencies
Navigate to the backend directory, install its dependencies, and start the backend service:
```bash
cd backend
npm install
npm start
```
## Installing Frontend Dependencies
Navigate to the NGO app directory, install its dependencies, and start the application:
```bash
cd ngo-app
npm install
npm start
```

# CI/CD User Manual

## Continuous Integration with GitHub Actions

### Overview
This section explains how continuous integration is implemented using GitHub Actions.

### Building Script
Our GitHub repository utilizes a building script that automatically compiles the project with every push or pull request to the main branch.

### Workflow File
The workflow configuration can be found at the following link: 
[GitHub Workflow YAML](https://github.com/BrianTaylor9/CS130_Project/blob/main/.github/workflows/node.js.yml)

### Workflow Execution
Whenever a workflow is triggered, it is automatically executed. Successful workflow executions can be viewed under the "Actions" tab on GitHub.

## Continuous Deployment with Vercel

### Overview
Describes how Vercel is used for continuous deployment of the application.

### Deployment Projects
Two separate Vercel projects are created to deploy the backend and frontend independently, adhering to the N-tier landscape pattern.

### Deployment Process
Vercel automatically listens for changes on the main branch and triggers a deployment whenever an update occurs.

### Accessing Deployments
The application is currently hosted at [CS 130 NGO App](https://cs-130-ngo-app.vercel.app/), and deployments are visible on Vercel's dashboard.