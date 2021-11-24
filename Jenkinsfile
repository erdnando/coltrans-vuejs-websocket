node {

    checkout scm

    env.DOCKER_API_VERSION="1.23"
    
    sh "git rev-parse --short HEAD > commit-id"

    tag = "latest"   
    appName = "coltrans-vuejs-websocket"
    registryHost = ""
    imageName = "${registryHost}${appName}:${tag}"
    env.BUILDIMG=imageName
    
    stage "Build"
    
        sh "docker build -t erdnando/coltrans-vuejs-websocket:1.0 -f coltrans-vuejs-websocket"
    
    stage "Push"

         withDockerRegistry([ credentialsId: "docker-private-credentials", url: "http://localhost:5000" ]) {
            sh "docker push erdnando/coltrans-vuejs-websocket:1.0"
          }  
    
}
