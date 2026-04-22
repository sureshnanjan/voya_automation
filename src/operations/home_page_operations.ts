export interface HomePageOperation {
    getTitle(): string;
    getSubTitle(): string;
    getAvailableExamples(): string[];
    goToExample(exampleName: string): void;
    getBannerDetails(): {imageUrl?: string, color: string, displayText: string};

}