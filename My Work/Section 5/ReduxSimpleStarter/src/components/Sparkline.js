import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine  } from 'react-sparklines';
import _ from 'lodash';
export default function SparkLineRender (props)
{
     

    return (

        <div>
            <Sparklines height={120} width= {180} data={props.DataArray}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{average(props.DataArray)} {props.Unit}</div>
        </div>

    );



}

function average(Data){

    const Avg = _.round(_.sum(Data)/Data.length);

    return Avg;
}