import React , { Component } from 'react';
import PackagesSearchBar from './packages-search';
export default function PackagesContainer (){


    return (
        <div>

            <div><img src="../../theme/img/banner.jpg" alt="bg" className="bg opacity"/></div>

            <div>

                <PackagesSearchBar/>

            </div>

        </div>

    );
}