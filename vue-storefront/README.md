<div align="center">
<img src="https://user-images.githubusercontent.com/1626923/137092657-fb398d20-b592-4661-a1f9-4135db0b61d5.png" height="80px"/>
</div>
# Vue Storefront 2 integration with Magento2

Repository is a starter Vue Storefront 2 application integrated with Magento2.

### Requirements:
- NodeJS >=14 <=16
- Yarn
- [Magento2](https://docs.magento.com/user-guide/)

### Where to start?

To get started, see the following guides:

- [Introduction](https://docs.vuestorefront.io/v2/getting-started/introduction.html) to learn what is Vue Storefront

- [Configuring Magento2](https://docs.vuestorefront.io/magento/installation-setup/configure-magento.html) to setup your Magento2 store

- [Configuring VueStorefront 2](https://docs.vuestorefront.io/magento/installation-setup/configure-integration.html) to install and setup new Vue Storefront project for Magento2

### Local dev setup
```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev
```

### Multistore local dev setup
1. Install [docker](https://docs.docker.com/get-docker/) and [docker-compose](https://docs.docker.com/compose/install/) on your local machine.

2. Add your hosts to the `/etc/hosts` file:
    ```
    127.0.0.1       myshop1.local myshop2.local
    ```

3. Set `API_BASE_URL=/api/` env variable in the `.env` file.

4. If you're using Linux: uncomment lines 10 and 11 in the `docker-compose.yml` file.

5. Add your hosts to the `server_name` option inside the `docker/nginx/nginx.conf` file:
    ```
    server_name localhost myshop1.local myshop2.local;
    ```

6. Because this is a local dev setup and nginx is configured to use an unsecured HTTP connection, the `middleware.config.js` file needs to be updated to disable the secure cookie option. To achieve this, you can modify the `cookiesDefaultOpts` object in the `magento` integration section of the `middleware.config.js` file as follows:
    ```js
    module.exports = {
      integrations: {
        magento: {
          configuration: {
            cookiesDefaultOpts: {
              secure: process.env.VSF_COOKIE_SECURE || false,
            }
          }
        }
      }
    };
    ```

7. Start docker-compose daemon:
    ```bash
    $ docker-compose up -d
    ```

8. Start storefront dev server:
    ```bash
    $ yarn dev
    ```

## Resources

- [Vue Storefront Documentation](https://docs.vuestorefront.io/v2/)
- [Vue Storefront Enterprise Documentation](https://docs.vuestorefront.io/v2/general/enterprise.html)
- [Magento2 Integration Documentation](https://docs.vuestorefront.io/magento/)
- [API References](https://docs.vuestorefront.io/magento/api-reference/)
- [Community Chat](http://discord.vuestorefront.io)

## Support

If you have any questions about this integration we will be happy to answer them on  `Magento2` channel on [our Discord](http://discord.vuestorefront.io).
