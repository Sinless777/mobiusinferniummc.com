pipeline {
    agent any
    environment {
        PROJECT_NAME = 'mobius_gateway'
        DOCKER_REGISTRY_CREDENTIALS = 'docker-hub-credentials'
        DOCKER_REGISTRY = 'https://registry.hub.docker.com'
        DOCKER_IMAGE = 'sinless777/mobius_gateway'
        WEBHOOK_URL = 'https://discord.com/api/webhooks/1099334918376526016/WcX9xHr21-AEps2n7t5cW1kMFggVluUp1EW8gUfGBSl-WoQpmV5rWVdUuOxGPRRC-TKi'
        WEBHOOK_URL_2 = 'https://discord.com/api/webhooks/1101388471056216115/CPR5LiFb-sNNa2wLun0FDFjTpNJa6uESVFWlKtDMiGyC23eOC7ltGgoxLoMemoFbf1fx'
        VERSION = sh(returnStdout: true, script: 'cat package.json | jq -r ".version"').trim()

        // Set the default branch if BRANCH_NAME is not available and remove the / and replace with .
        GIT_BRANCH = "${env.BRANCH_NAME}".replace("/", ".")
    }
    stages {
        stage('Clone Repository') {

            steps {
                /* Checkout the source code from GitHub */

                checkout scm
            }
        }

        stage('Build Image') {
            /* Build the Docker image */

            steps {
               sh "docker build -t ${DOCKER_IMAGE}:latest ."
               sh "docker build -t ${DOCKER_IMAGE}:${VERSION}_build.${BUILD_NUMBER}.${GIT_BRANCH} ."
            }
        }

        stage('Push Image') {
        /* Push the Docker image */

            steps {
                withCredentials([usernamePassword(credentialsId: DOCKER_REGISTRY_CREDENTIALS, passwordVariable: 'PASSWORD', usernameVariable: 'USERNAME')]) {
                    sh "docker login -u ${USERNAME} -p ${PASSWORD} ${DOCKER_REGISTRY}"
                    sh "docker push ${DOCKER_IMAGE}:${VERSION}_build.${BUILD_NUMBER}.${GIT_BRANCH}" // Push the versioned image
                    sh "docker push ${DOCKER_IMAGE}:latest" // Push the latest image
                }
            }
        }

        stage('system cleanup') {
            steps {
                // Remove Images
                sh "docker system prune -a -y"
                // remove workspace
                cleanWs()
            }
        }
    }
    post {
        success {
            discordSend description: "<@241693350711787522> The Mobius Infernium Website ${env.BRANCH_NAME} branch was built successfully.", link: env.BUILD_URL, result: currentBuild.currentResult, title: JOB_NAME, webhookURL: "${WEBHOOK_URL}"
            discordSend description: "<@241693350711787522> The Mobius Infernium Website ${env.BRANCH_NAME} branch was built successfully.", link: env.BUILD_URL, result: currentBuild.currentResult, title: JOB_NAME, webhookURL: "${WEBHOOK_URL_2}"
        }
        failure {
            discordSend description: "<@241693350711787522> The Mobius Infernium Website ${env.BRANCH_NAME} branch build failed.", link: env.BUILD_URL, result: currentBuild.currentResult, title: JOB_NAME, webhookURL: "${WEBHOOK_URL}"
            discordSend description: "<@241693350711787522> The Mobius Infernium Website ${env.BRANCH_NAME} branch build failed.", link: env.BUILD_URL, result: currentBuild.currentResult, title: JOB_NAME, webhookURL: "${WEBHOOK_URL_2}"
        }
        unstable {
            discordSend description: "<@241693350711787522> The Mobius Infernium Website ${env.BRANCH_NAME} branch build is unstable.", link: env.BUILD_URL, result: currentBuild.currentResult, title: JOB_NAME, webhookURL: "${WEBHOOK_URL}"
            discordSend description: "<@241693350711787522> The Mobius Infernium Website ${env.BRANCH_NAME} branch build is unstable.", link: env.BUILD_URL, result: currentBuild.currentResult, title: JOB_NAME, webhookURL: "${WEBHOOK_URL_2}"
        }

    }
}
