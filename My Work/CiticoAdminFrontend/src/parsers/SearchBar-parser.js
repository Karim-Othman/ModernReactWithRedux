export function SearchBarParserFunction (CategoriesResponse){


   const CategoriesParsedArray= CategoriesResponse.map((category)=>{

        const {ARCommName,ENCommName,TechName,subCategories} = category;

        const label= `${ARCommName}/${ENCommName}`;

        const SubCategoriesParsedArray = subCategories.map((subCategory)=>{


            const {subCatTechName,subCatARCommName,subCatENCommName}= subCategory;

            const SubcategoryValue=`${subCatARCommName}/${subCatENCommName}`;

            return{
                label:SubcategoryValue,
                value:subCatTechName
            }

        })
        
        return {
            label,
            value:TechName,
            relativeSubCatArray:SubCategoriesParsedArray
        }

    });

    return CategoriesParsedArray;

}


export function SearchBarPackagesParserFunction(PackagesResponse){

    const PackagesParsedArray= PackagesResponse.map((packageElement)=>{


        const {ARCommName,ENCommName,TechName} = packageElement;
        const label= `${ARCommName}/${ENCommName}`;
        return {
            label,
            value:TechName
        }

    });

    return PackagesParsedArray;
}