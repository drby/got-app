import axios from "axios";
//import React from "react";

export async function getAllBooks() {
    try{
        const response = await axios.get('https://anapioficeandfire.com/api/books');
        //console.log('response  ', response)
        return response.data;
    }catch(error) {
        return [];
    }
}
