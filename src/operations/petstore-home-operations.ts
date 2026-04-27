export interface PSHomePageOperations {
   // Information on Home Page
    getLogoDetails: () => PSLogo;
   getTopCategoryItems: () => string[];
   getLeftSideBarItems: () => string[];
   getCenterImageItems: () => string[];
   // Actions on Home Page
   visitCategory(catgegoryname: string): CatItems[];


}
// POJO - Plain Old JavaScript Object
type PSLogo{
    imagesrc: string;
    imagehelpstring: string;
    position: string;
    color: string;
    font: string;
}

type CatItems{
    prod_id:string
    prod_name:string

    }