// 2.--------------------------------
import React from 'react'
import Header from './Header'
import Card from './Card'

export default function Home(){

    let task = "i am best";
    let name ="sushma";

    return(
        <> 
        <Header  data={{task, name}} />
        <Card />
        </>
    )
}