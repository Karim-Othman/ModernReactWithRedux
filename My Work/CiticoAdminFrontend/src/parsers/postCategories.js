import _ from 'lodash';

export function parsePostData(DataToBeParsed){

    const {TechName, ARCommName, ENCommName, characteristics} = DataToBeParsed;
    let ParsedData={

        TechName,
        ARCommName,
        ENCommName,
        characteristics


    };

    const result = _.map(DataToBeParsed,function(value, key){


        //Match if any key has (digit) pattern
        if (key.match(/\(\d+\)/g)){


        }


    });
    console.log(ParsedData);

    return;
}