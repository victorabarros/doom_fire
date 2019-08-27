FROM nginx:1.17
COPY . /usr/share/nginx/html

# WORKDIR /code

# RUN \
# apt-get update && \
# apt-get install -y nginx && \
# rm -rf /var/lib/apt/lists/* && \
# echo "daemon off;" >> /etc/nginx/nginx.conf

# ADD . /var/www/

# CMD ["nginx"]
# EXPOSE 80
