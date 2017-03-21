const loginCommands = {
    login(email, pass) {
        return this
            .waitForElementVisible('@emailInput',300)
            .setValue('@emailInput', email)
            .setValue('@passInput', pass)
            .waitForElementPresent('@loginButton', 1000)
            .click('@loginButton')
    },
    forgetPassword() {
            return this
                .waitForElementVisible('@forgetPassword',300)
                .click('@forgetPassword')
    },
    register() {
        return this
            .waitForElementVisible('@signUp',300)
            .click('@signUp')
    }
};

export default {
    url: 'https://ready4gmat-frontend-staging.herokuapp.com/login',
    commands: [loginCommands],
    elements: {
        loginContainer: {
            selector: '.login-container'
        },
        emailInput: {
            selector: 'input[type=text]'
        },
        passInput: {
            selector: 'input[name=password]'
        },
        loginButton: {
            selector: 'button[type=submit]'
        },
        forgetPassword:{
            selector:'.forgot-password'
        },
        signUp:{
            selector:'.sign-in-register'
        }
    }
};