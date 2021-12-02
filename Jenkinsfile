pipeline{
    
    def app   
    agent any
    stages{
        stage('Get surce from GIT'){
            steps{
               // Get some code from a GitHub repository...
                 checkout scm  
               //sh 'rm -rf /opt/cicd/vue_app'
              // sh 'git clone https://github.com/erdnando/coltrans-vuejs-websocket.git /opt/cicd/vue_app'
               echo 'Clon OK'
            }
         }
        stage('Build docker image'){
            steps{
                //sh 'docker build -t erdnando/coltrans-websocket-server:1.0 /opt/cicd/vue_app/'
                app = docker.build("erdnando/coltrans-websocket-server")  
                echo 'DockerBuild OK...'
            }
            
        }
        
         stage('Publish to DockerHub'){
            steps{
                // sh 'docker push erdnando/coltrans-vuejs-websocket:1.0'
                docker.withRegistry('https://registry.hub.docker.com', 'git') {            
                app.push("${env.BUILD_NUMBER}")            
                app.push("1.0")  
            }

        }
       
        
        
    }
    
}
