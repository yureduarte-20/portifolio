FROM nginx:alpine

# Copia os arquivos do seu repositório para dentro da pasta do Nginx no container
COPY . /usr/share/nginx/html

# Garante as permissões corretas
RUN chmod -R 755 /usr/share/nginx/html
