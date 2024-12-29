---

title: My local cloud

date: '2024-12-29'

author: Adrián Villar

excerpt: Self hosting of your favorite services

imageUrl: https://picsum.photos/id/85/800/400

---

## Intro

I bought a [NUC](https://en.wikipedia.org/wiki/Next_Unit_of_Computing) to use it as server with different kind of services I like and host my webpage in order to have full control of my data and avoid service providers.
In this post, I'll explain how I configured the different layers covering domains, networking and specific server configurations.

## Networking

In this step, we need to have our ip fixed. It's dynamic by default, so we need to request this change to our ISP. Once we have our fixed ip, we need to go to our router network settings and forward ports from wan to a lan machine (the one that runs docker) at a specific port. Here's a quick example, but you have to define one register by each service you have:

![Router network config](/images/posts/router-conf.png)

## Domains and DNS

It's required to have a domain. It can be the cheapest one, we only need to associate our domain with your local public ip (which must be fixed IP) using A type DNS register:

![DNS A Register](/images/posts/dns-conf.png)


## Docker

The point with docker is that enables serving using virtual containers, which allows us to have a well defined configuration (with docker compose) regardless the local machine and other interesting features that makes it easy to configure and maintain. 
Here's a piece of my docker-compose.yml:
![Docker network](/images/posts/docker-network.png)

We're creating our private network in bridge mode, so the services running inside will be accesible from lan trough our host machine.


## NGINX SSL with Let's encrypt

This is the tricky point of the project. I wanted to have all services running on https, therefore I needed to use let's encrypt ssl certificates. These certificates are valid for three months, so we need something that auto-renew these certificates. Doing my research, [I've found a very cool project](https://github.com/wmnnd/nginx-certbot) that does this on docker. [You can read more info about this part here](https://pentacent.medium.com/nginx-and-lets-encrypt-with-docker-in-less-than-5-minutes-b4b8a60d3a71)


Here's the docker specific config:
![Nginx Docker configuration](/images/posts/docker-nginx.png)

At nginx config file, we need to configure these scripts at server{} policies and define locations in order to act as reversed proxy. With that configured, we will have acces to yourdomain.com/portainer:
![Nginx config file](/images/posts/nginx-conf.png)

And that's it! We can get rid of third services for hosting and have full control of our data!


















