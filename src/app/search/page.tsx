"use client"
import Link from "next/link";
import {useState} from "react";

export default function Search(){
    const products = useState([])
    // call server to lookup products
    /*
    const lookupProducts = (e) => {
        console.log(`searching products matching ${e}`)
        try{
            products.push(fetch(`https://api.themoviedb.org/3/products?q=${e.target.value}`));
        }catch(e){
            console.error(e);
        }
    }
    */

    return <>
        <h1>Welcome home!</h1>
        <input type="search" name="searchbar" placeholder="Search for produce" />
        <Link href="/profile">My Account</Link>
    </>;

}