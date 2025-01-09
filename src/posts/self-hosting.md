---

title: My local cloud

date: '2024-12-29'

author: Adrián Villar

excerpt: Self hosting of your favorite services

imageUrl: https://picsum.photos/id/85/800/400

---

## Become my own data overlord 😎

I bought a [NUC](https://en.wikipedia.org/wiki/Next_Unit_of_Computing) to use it as server with different kind of services I like and host my webpage in order to have full control of my data and avoid service providers.

In this post, I'll be your guide on this journey to self-hosting glory. We'll be building a server fortress to house all your favorite services, from websites to your own personal cloud 🏰
By the end of this, you'll be boasting rock-solid security and complete control over your data. Not to mention, you'll be the envy of all your tech-savvy friends 😉

## Networking 🌐


First things first, we need a trusty steed to carry us on this adventure. Enter the NUC, a tiny but mighty computer that'll be our server 💪
We'll also need a fixed IP address from your internet service provider (ISP). Think of it as your server's permanent address on the internet. Next, we'll configure our router to forward magic internet signals (ports) to our NUC. This way, the outside world can access our awesome server.

Note: We need to have our ip fixed. It's dynamic by default, so we need to request this change to our ISP. Once we have our fixed ip, we need to go to our router network settings and forward ports from wan to a lan machine (the one that runs docker) at a specific port. Here's a quick example, but you have to define one register by each service you have.

Don't worry, I'll show you exactly how to do this with a handy dandy picture.  👇

![Router network config](/images/posts/router-conf.png)

## Domains and DNS 👑

Every tech empire needs a name, and that's where your domain comes in. Grab yourself a domain name (it doesn't have to break the bank) and link it to your server's IP address using a DNS record.
This is basically how the internet translates fancy domain names into IP addresses
Again, I've got a super helpful image to steer you in the right direction 👇

![DNS A Register](/images/posts/dns-conf.png)


## Docker 🚢

Now, let's get our server humming with Docker 📦. This nifty tool lets us package our services into neat little containers, keeping everything organized and tidy
Here's a snippet of my docker-compose.yml file, which basically acts as a blueprint for all our services 👇

![Docker network](/images/posts/docker-network.png)

We're creating our private network in bridge mode, so the services running inside will be accesible from lan trough our host machine.


## NGINX SSL with Let's encrypt 🔒

The final step is to encrypt our communication channels with fancy SSL certificates. We'll use a tool called Let's Encrypt to generate these certificates and keep them up-to-date automatically. No more messing around every three months! 🎉

Doing my research🤓, [I've found a very cool project](https://github.com/wmnnd/nginx-certbot) that does this on docker. [You can read more info about this part here](https://pentacent.medium.com/nginx-and-lets-encrypt-with-docker-in-less-than-5-minutes-b4b8a60d3a71)Here's where things get a bit technical, but don't worry, I've included some resources to help you navigate this part 

Once we configure NGINX (the web server software) and set up Let's Encrypt, we'll be able to access all our services through a secure https connection  🔐

Here's the docker specific config:
![Nginx Docker configuration](/images/posts/docker-nginx.png)

At nginx config file, we need to configure these scripts at server{} policies and define locations in order to act as reversed proxy. With that configured, we will have acces to yourdomain.com/portainer

![Nginx config file](/images/posts/nginx-conf.png)

And that's it! 🥳 You've successfully built your own self-hosted tech empire. Now you can ditch those third-party services and enjoy the peace of mind that comes with owning your data 😎



















