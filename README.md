# webb22_alm_cicd
Final group exercise, application lifecycle management
  
    
    
## Installing dependencies
Open terminal and run:
```
npm install
```
You should now have everything you need. Including Husky which runs pre-commit to ensure no commits with failing tests or unseemly coding style are made. The linting is done by eslint adhering to airbnb with a few exceptions. In addition commitlinting is enforced and the commit-msg hook of husky prevents commit if message is not conforming to convention, visit this [handy guide](https://github.com/conventional-changelog/commitlint/#what-is-commitlint) for help.
---  
  

## Starting the server
You have two options for starting the server:
1. To start in watch-mode and have automatic restarts on change run:
    ```
    npm run devstart
    ```
2. To restart manually run:
    ```
    npm run start
    ```
---


## Testing the server
You have three options for testing, unit tests, tests of endpoints or both:

1. To only run unit tests:
    ```
    npm run test:unit
    ```
2. To run only integration tests:
    ```
    npm run test:integration
    ```
3. To run both integration an unit tests:
    ```
    npm run test:all
    ```
---



## Updates
The project is equipped with 