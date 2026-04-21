export interface KPHomePageOperation {
    getPetwebTitle(): string;
    getPetcategory(): string;
    getpettype(): string;
    goTosearch(categoryName: string): void;
    gotosignin(): void;
    gotoregister(): void;
    gotoCart(): void;
    getimageDetails(): {imageUrl?: string, color: string, displayText: string};
    gotoupdateCart(): void;
    gotosearchResultPage(): void;
    gotoPetDetailsPage(): void;
    gotoPetDetailsPageFromSearchResult(): void;
    gotoPetDetailsPageFromCart(): void;
    gotoPetDetailsPageFromHomePage(): void;
    gotoPetDetailsPageFromPetCategory(): void;
    gotoPetDetailsPageFromPetType(): void;
    gotoPetCategoryPage(): void;
    gotoPetTypePage(): void;    
}     