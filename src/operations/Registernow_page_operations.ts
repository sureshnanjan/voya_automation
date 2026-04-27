export interface RegisternowOperations {
    navigate(): Promise<void>;
    getRegisterNowText(): Promise<string>;
    douserinformation(userId: string, newPassword: string, repeatPassword: string): Promise<void>;
    doaccountinformation(firstName: string, lastName: string, email: string, phone: string, address1: string, address2: string, city: string, state: string, zip: number, country: string): Promise<void>;
    doprofileinformation(language: string, favouriteCategory: string, enableMyList: boolean, enableMyBanner: boolean): Promise<void>;
    dosaveaccountinformation(): Promise<void>;
    getErrorMessage(): Promise<string>;
    getSuccessMessage(): Promise<string>;
}