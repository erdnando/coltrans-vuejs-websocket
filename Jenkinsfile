pipeline {
    agent {
        docker {
            image 'node:10.20.1-alpine3.11' 
            args '-v $HOME/.m2:/root/.m2'
        }
    }
    stages {
        def app 
          stage('clone repository') {
           checkout scm  
           }
          stage('Build docker Image'){
           app = docker.build("erdnando/coltrans-vuejs-websocket:1.0")
           }
          stage('Push Image'){
            docker.withRegistry('https://registry.hub.docker.com', 'git') {            
            app.push("${env.BUILD_NUMBER}")            
            app.push("latest")   
             }
          }
        }
}
