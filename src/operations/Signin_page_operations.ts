//used for sign in operations
export interface SigninOperations {
    navigate(): Promise<void>;
    getSigninText(): Promise<string>;
    doLogin(username: string, password: string): Promise<void>;
    getErrorMessage(): Promise<string>;
    getSuccessMessage(): Promise<string>;
}


