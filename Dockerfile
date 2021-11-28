FROM node:14 as builder
#https://itnext.io/building-docker-images-from-private-git-repositories-using-ssh-login-433edf5a18f2
ADD "https://www.random.org/cgi-bin/randbyte?nbytes=10&format=h" skipcache
RUN git clone https://github.com/erdnando/coltrans-vuejs-websocket.git /opt/vue_app

WORKDIR /opt/vue_app
RUN npm install && npm run build


# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.17.6

#Copy ci-dashboard-dist
COPY --from=builder /opt/vue_app/dist/ /usr/share/nginx/html/coltrans-vuejs-websocket/



#docker rmi image erdnando/coltrans-vuejs-websocket
#build
#docker build -t erdnando/coltrans-vuejs-websocket:1.0 .
#local test
#docker run -itd -p 8080:8080 --net=host --name coltrans-vuejs-websocket erdnando/coltrans-vuejs-websocket:1.0
#push
#docker push erdnando/coltrans-vuejs-websocket:1.0
#------------------------


EXPOSE 8080
#Copy default nginx configuration
RUN chown -R 1001:0 /etc/nginx/conf.d/default.conf
COPY /nginx-custom.conf /etc/nginx/conf.d/default.conf
