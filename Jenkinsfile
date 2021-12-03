pipeline{
     
    agent any
    stages{
         
        stage('Get surce from GIT'){
            steps{
               // Get some code from a GitHub repository...
               //This path must exists on jenkins server
               sh 'rm -rf /opt/cicd/vue_app'
               sh 'git clone https://github.com/erdnando/coltrans-vuejs-websocket.git /opt/cicd/vue_app'
               echo 'Clon OK'
            }
         }
         
        stage('Build docker image'){
            steps{
                sh 'docker build -t erdnando/coltrans-vuejs-websocket:1.0 /opt/cicd/vue_app/'
                echo 'DockerBuild OK...'
            }
            
        }
        
         stage('Publish to DockerHub'){
            steps{
                 withDockerRegistry([ credentialsId: "github_erv", url: "" ]) {
                      sh 'docker push erdnando/coltrans-vuejs-websocket:1.0'
                    }
               
                } 
            }  
    }
    
}
