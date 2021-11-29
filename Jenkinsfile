pipeline{
    
    agent any
    stages{
        stage('Get surce from GIT'){
            steps{
               // Get some code from a GitHub repository...
               sh 'rm -rf /opt/vue_app'
               sh 'git clone https://github.com/erdnando/coltrans-vuejs-websocket.git /opt/vue_app'
               echo 'Descarga OK'
            }
         }
        stage('Build docker image'){
            steps{
                sh 'docker build -t erdnando/coltrans-websocket-server:1.0 /opt/vue_app/'
                echo 'DockerBuild OK...'
            }
            
        }
        stage('Publish to DockerHub'){
            sh 'docker push erdnando/coltrans-vuejs-websocket:1.0'
        }
        
        
    }
    
}
