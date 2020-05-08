## Run the app
`docker-compose -f docker-compose.yml up --build`

## Set up nginx
make your configuration in `/etc/nginx/sites-available/default`

### configuration file content:
```
server {
    listen 80 default_server;
    server_name 45.33.97.232;

location / {
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-For $remote_addr;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_pass http://45.33.97.232:3000; #port where you are serving your express app.

  }
}
```

check if there is no error in your script:

`$sudo nginx -t`

Expected result should be:
```
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

After configuration is ok, you should restart your nginx instance:

```
$sudo nginx -s reload
```

After proper reload assert your node/express server is running. Now if you access http://45.33.97.232 you should see what's is listening in http://localhost:3000