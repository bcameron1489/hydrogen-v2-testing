# Hydrogen v2 template updated with Klaviyo JS and VP

[Check out Hydrogen docs](https://shopify.dev/custom-storefronts/hydrogen)
[Get familiar with Remix](https://remix.run/docs/en/v1)

## What's included

- Remix
- Hydrogen
- Oxygen
- Shopify CLI
- ESLint
- Prettier
- GraphQL generator
- TypeScript and JavaScript flavors
- Minimal setup of components and routes

## Getting started

**Requirements:**

- Node.js version 16.14.0 or higher
- *recommended: NVM (node version manager)
- NPM 7

Remember to update `.env` with your shop's domain and Storefront API token!
For a simulated dev instance, I can provide credentials for a shared environment, feel free to ping me on slack.

## Steps to install

- Git clone
- nvm use v16.x.x
- npm install npm@7.24.2 or npm install -g npm@7.24.2 (requires v7)
- npm install
- touch .env (creates an env where we'll insert our environment variables)
- Insert personal environment variables into the .env file or use shared creds
- Example .env structure:
  
  - SESSION_SECRET="foobar"
  - PUBLIC_STOREFRONT_API_TOKEN="xxxxxxxxxxx"
  - PUBLIC_STOREFRONT_API_VERSION="2023-04"
  - PUBLIC_STORE_DOMAIN="example-preview.myshopify.com"
  
yarn dev (local build)


