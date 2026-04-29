export interface HomePageOperation {
    getLogoDetails: () => string;
    doSearch(input: string): string[];
    getAvailableCategories: () => string[];
    doLogin(username: string, password: string): boolean;
    getCenterImageDetails: () => string[];
}