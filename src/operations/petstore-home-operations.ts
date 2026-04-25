export interface PSHomePageOperations {
    getLogoDetails: () => string;
    doSearch(input:string): string[];
    getAvailableCategories: () => string[];
    doLogin(username: string, password: string): boolean;
    getCenterImageDetails: () => string[];
}