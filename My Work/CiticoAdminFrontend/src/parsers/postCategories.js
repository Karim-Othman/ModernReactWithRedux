import _ from 'lodash';

//Array to hold all SubCategories
let SubCategoriesArray = [];

export function parsePostData(DataToBeParsed){

    const {TechName, ARCommName, ENCommName, characteristics} = DataToBeParsed;
    let ParsedData={

        TechName,
        ARCommName,
        ENCommName
        
    };

    const characteristicsString=characteristics.toString();
    let characteristicsArray=characteristicsString.split(',');
    
    ParsedData.characteristics= characteristicsArray;


     _.map(DataToBeParsed,function(value, key){


        //Match if any key has (digit) pattern
        if (key.match(/\(\d+\)/g)){

                //get mapped index from key string
                const keyIndexArr= key.match(/\d+/g);

                //Modify Key by removing index from it ex:(0)
                key = key.replace(/\(\d+\)/g,'');
                
                if(SubCategoriesArray.length <= keyIndexArr[0] || SubCategoriesArray.length == 0){
                    //if SubCategoriesArray doesn't has element or its length is smaller than index
                    //then add element to array (object)
                    SubCategoriesArray.push({[key]:value});
                    
                }

                else{
                    //if SubCategoriesArray has element or its length is equal or greater than index
                    //then modify existing array element (object)
                    
                    SubCategoriesArray[keyIndexArr[0]][key]=value;
                }


                
        }


    });

    ParsedData.subCategories= SubCategoriesArray;


    return ParsedData;
}