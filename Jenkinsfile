pipeline{
    
    agent{
     dockerfile true
    }
    stages{
        stage('uno'){
            steps{
               // Get some code from a GitHub repository
               git 'https://github.com/erdnando/coltrans-vuejs-websocket.git'
               echo 'Descarga OK'
               sh 'docker build -t erdnando/coltrans-websocket-server:1.0 .'
                echo 'DockerBuild OK'
            }
           
        }
    }
    
}
