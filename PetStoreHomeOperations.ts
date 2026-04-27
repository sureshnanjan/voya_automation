export interface HomePageOperation {
    getLogoDetails: () => string;
    doSearch(input:string): string[];
    getAvailableCategories: () => string[];
    getCenterImageDetails: () => string[];
    accessSignIn(): string[];
    doLogin(username: string, password: string): boolean;
    getSignInPageHeader(): string;      // returns header text e.g. "Please enter your username and password."
    getLoginBtnVisibility(): boolean;   // returns true if Login button is visible
    getRegisterTextVisibility(): boolean; // returns true if "Need a user name and password? Register Now!" is visible
    clickLoginButton(): void;
    getSignOutBtnVisibility(): boolean; // returns true if "Sign Out" link is visible after login
    visitReptilesCategory(): void;                          // clicks the Reptiles category link
    getReptilesCategoryItems(): {prod_id: string, name: string}[]; // returns list of reptile products
}


