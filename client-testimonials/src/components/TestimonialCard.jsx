import React from "react";

export default function TestimonialCard({name,text}){
    return(
        <>
        <p style={{
            fontSize:"30px"
        }}>Customer name: {name}</p>
        <p style={{
            color:"green",
            fontSize:"25px"
        }}>Review: {text}</p>
        </>
    )
}