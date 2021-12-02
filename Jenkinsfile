pipeline{
    
    agent any
    stages{
        stage('Get surce from GIT'){
            steps{
               // Get some code from a GitHub repository...
               sh 'rm -rf /opt/cicd/vue_app'
               sh 'git clone https://github.com/erdnando/coltrans-vuejs-websocket.git /opt/cicd/vue_app'
               echo 'Descarga OK'
            }
         }
        stage('Build docker image'){
            steps{
                sh 'docker build -t erdnando/coltrans-websocket-server:1.0 /opt/cicd/vue_app/'
                echo 'DockerBuild OK...'
            }
            
        }
       
        
        
    }
    
}
