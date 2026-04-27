export interface SigninOperations {
    doLogin(username: string, password: string): boolean;
    getErrorMessage(): string;
    access_signup(): void;
    access_forgotpassword();
}

