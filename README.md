Step 1: Install The @evershop/evershop Npm Package
@evershop/evershop is the core of the EverShop platform. It contains all of the core modules like catalog, checkout, order.

Install the @evershop/evershop Npm package
npm init -y;
npm install @evershop/evershop;

Step 2: Install the core Npm scripts
Open the package.json file and add the following scripts:

Add the core npm scripts
"scripts": {
    "setup": "evershop install",
    "build": "evershop build",
    "start": "evershop start",
    "seed": "evershop seed",
    "start:debug": "evershop start --debug",
    "user:create": "evershop user:create",
    "user:changePassword": "evershop user:changePassword"
}

Step 3: Run the installation script
Before running this script, make sure that you have an empty Postgres database ready for EverShop.

This installation script will do the following tasks:

Create a default configuration file.
Create your administrator user.
Installation script
npm run setup

caution
During the installation process, you will be asked for some information like database connection, your shop information…

Step 4: Folder permission
EverShop needs to write some files to the disk. So you need to make sure that the following folders have the write permission:

public/
.evershop
.log
media
Step 5: Run the build command to build the site
Build the site
npm run build

Step 6: Run the start command to start your store in production mode
Start the site
npm run start

Your site will start at http://localhost:3000.

Admin panel can be accessed at http://localhost:3000/admin.

info
By default EverShop will start at port 3000. You can change the port by setting the PORT environment variable.

Upgrade EverShop
To upgrade EverShop version, you can run the following command:

Upgrade EverShop
npm install @evershop/evershop@latest

EverShop will take care of the database migration for you.

caution
Upgrading EverShop requires running the build command again.

Demo Data Seeding
After installation, you can populate your store with demo data using the seed command. This is useful for development and testing.

npm run seed

This command will populate your store with sample products, categories, and other data.

info
Demo data seeding is intended for development and testing environments only. Do not use it in production.

For developer
If you are a developer and want to start the project in the development mode, there are some additional steps you need to follow.

Install some additional dependencies for development
To run the project in development mode, you need to install some additional dependencies. These dependencies are not required for production but are essential for development.

npm install --save-dev @types/node typescript @parcel/watcher @types/config @types/express @types/pg @types/react execa

Adding the dev script to the package.json file.
Open the package.json and add the following script:

Add the core dev script
"scripts": {
    "dev": "evershop dev"
}

Adding the workspace configuration
Open the package.json and add the following configuration:

Adding the workspace configuration
 "workspaces": [
    "extensions/*", #This is where you put your extensions
    "themes/*", #This is where you put your themes
  ],

Start the project in development mode
Start the site in development mode
npm run dev

The debug mode
To run the project in debug mode, you are required to add the debugging script to the package.json file.

Add the debugging scripts
"scripts": {
    ...,
    "start:debug": "evershop start --debug",
}

And then you can run the project in debug mode by running the following commands:

Start the site in debug mode
npm run start:debug

And then you can run the project in debug mode by running the following commands:

Start the site in debug mode
npm run start:debug

info
The debug mode is enabled by default when you run the dev command.