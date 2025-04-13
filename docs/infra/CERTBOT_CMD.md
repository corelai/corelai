### how to ask for multiple cert at once with name overriding

docker compose run --rm certbot certonly --webroot -w /var/www/certbot --cert-name uat.prime.corelai.tech --dry-run -d uat.prime.corelai.tech -d uat.prime.corelai.com -d uat.prime.corelai.io -d uat.prime.corelai.dev

docker compose run --rm certbot certonly --webroot -w /var/www/certbot --cert-name uat.prime.corelai.tech -d uat.prime.corelai.tech -d uat.prime.corelai.com -d uat.prime.corelai.io -d uat.prime.corelai.dev