pipeline{
    
    agent any
    stages{
        stage('Get surce from GIT'){
            steps{
               // Get some code from a GitHub repository
               git 'https://github.com/erdnando/coltrans-vuejs-websocket.git'
               echo 'Descarga OK'
            }
         }
        stage('Build docker image'){
            steps{
                sh 'docker build -t erdnando/coltrans-websocket-server:1.0 .'
                echo 'DockerBuild OK'
            }
            
        }
        
        
    }
    
}
