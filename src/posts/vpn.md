---
title: Host your vpn
date: '2025-10-15'
author: Adrián Villar
excerpt: Host your own vpn
imageUrl: https://picsum.photos/id/192/800/400
---

A VPN, or Virtual Private Network, is a service that creates a secure, encrypted connection over the internet to protect your data and privacy &#128218;

## Why You Should Roll Your Own 🚀

So, you've seen the ads: "Surf the web securely! Unlock streaming libraries! Get a VPN!" But here’s the secret sauce: paying $10 a month for a commercial VPN is often overkill and sometimes counterproductive.

If you’re technical enough to run a Docker container, you're technical enough to run a Personal VPN Server. And trust me, it’s worth it.

### 1. Speed and Latency: Bye-Bye Bottlenecks 💨

When you use a commercial VPN, your data often travels across the country (or the globe!) to reach their nearest server. That adds latency (lag), which is terrible for gaming, video calls, and just general browsing feel.

**- Commercial VPN**: Your data goes from your house → VPN Company Server → The Internet. (Long trip, slow speeds.)

**- Your Own VPN**: Your data goes from your phone/laptop → Your Home Router → The Internet. (Short trip, maximum speed.)

Since your server is sitting right on your high-speed home connection (like your Starlink/Fiber connection), you get the fastest possible route. Plus, no shared bandwidth! You get **100% of your available speed**.


### 2. True Privacy: You Are the Only User 🕵️

This is the big one. The whole point of a VPN is to avoid having your data collected. But when you use a commercial VPN, you are transferring all your trust from your Internet Service Provider (ISP) **to the VPN company itself**.

**- The Log Myth**: Commercial VPNs constantly promise "no-logs," but **how do you really know?** You have to take their word for it. They are still a large company managing millions of users, and they could be compromised.

**- Your Own Server**: When you run a server using an **open-source** tool like **WireGuard**, you are the sole administrator. You control the logs. There are no other users, no corporate policies, and no third-party eyes. This is the only way to guarantee truly private access.

### 3. Secure Remote Access: Home is Where the Server Is 🏠
Forget about accessing your local devices (like your Docker services!) through complex port forwarding rules. Your personal VPN creates a secure, encrypted tunnel right back to your local network.

**- Access Local Services**: When you are connected to your VPN, your phone or laptop essentially acts as if it is on your couch. You can access your local network shares, or your Portainer GUI just by using their local IP addresses.

**- Safety First**: You don't have to expose any sensitive management interfaces to the public Internet—they're all safely hidden behind your encrypted tunnel.


### 4. Cost and Control: You Already Paid for It 💸
Why pay for a service when you already own the hardware?

**- Zero Recurring Fees**: Tools like WireGuard and OpenVPN are completely free and open-source. Your only "cost" is the minimal electricity needed to run your server (which is probably already running anyway!).

**- Customization** : You decide the protocol (WireGuard for speed), the DNS (Pi-hole/Ad-blocking), and the network range. You're the boss.

## 💡 How to Get Started (The Easy Way)
The best way to achieve this today is by running a **Docker** image like [wg-easy](https://github.com/wg-easy/wg-easy). These are 3 main goals to make it work:

**- Use WireGuard**: It's the fastest, most modern VPN protocol.

**- Use Docker**: Deploying wg-easy via docker-compose makes setup and client management trivial.

**- Forward One Port**: Just open **51820/UDP** on your main router, and you're good to go.

## wg-easy docker service configuration &#128230;

![WG-EASY DOCKER SERVICE](/images/posts/wg-easy.png)

Compose your docker up and enjoy!