import { useState } from 'react'
import quote from '../assets/quote.json'

const QuoteBox = () => {

    const colors = [
    {
        "hex": "#4C4F56"
    },
    {
        "hex": "#0048BA"
    },
    {
        "hex": "#1B1404"
    },
    {
        "hex": "#7CB0A1"
    },
    {
        "hex": "#B0BF1A"
    },
    {
        "hex": "#7CB9E8"
    },
    {
        "hex": "#450920"
    },
    {
        "hex": "#714693"
    },
    {
        "hex": "#B284BE"
    },
    {
        "hex": "#00308F"
    },
    {
        "hex": "#72A0C1"
    },
    {
        "hex": "#FB4B4E"
    },
    {
        "hex": "#8093F1"
    },
    {
        "hex": "#D81159"
    },
    {
        "hex": "#3D348B"
    },
    {
        "hex": "#967AA1"
    },
    {
        "hex": "#111D4A"
    },
    {
        "hex": "#84DE02"
    },
    {
        "hex": "#E32636"
    },
    {
        "hex": "#C46210"
    },
    {
        "hex": "#0076A3"
    },
    {
        "hex": "#1E1E24"
    },
    {
        "hex": "#907B71"
    },
    {
        "hex": "#AF8F2C"
    },
    {
        "hex": "#0F4C5C"
    },
    {
        "hex": "#0E1C36"
    },
    {
        "hex": "#E52B50"
    },
    {
        "hex": "#F19CBB"
    },
    {
        "hex": "#AB274F"
    },
    {
        "hex": "#7CB518"
    },
    {
        "hex": "#3B7A57"
    },
    {
        "hex": "#FFBF00"
    },
    {
        "hex": "#FF033E"
    },
    {
        "hex": "#87756E"
    },
    {
        "hex": "#9966CC"
    },
    {
        "hex": "#A397B4"
    },
    {
        "hex": "#70E000"
    },
    {
        "hex": "#7B9F80"
    },
    {
        "hex": "#002A22"
    },
    {
        "hex": "#A4C639"
    },
    {
        "hex": "#0496FF"
    },
    {
        "hex": "#CD9575"
    },
    {
        "hex": "#665D1E"
    },
    {
        "hex": "#915C83"
    },
    {
        "hex": "#841B2D"
    },
    {
        "hex": "#E0B646"
    },
    {
        "hex": "#008000"
    },
    {
        "hex": "#FB6107"
    },
    {
        "hex": "#E9D66B"
    }
    ]
    const indexInit = Math.floor(Math.random() * colors.length)
    const [index, setIndex ] = useState(indexInit);

    const changeQuote = () =>{
    const index = Math.floor(Math.random() * colors.length)
        setIndex(index)
    }

    let color = colors[index].hex
    let body = document.body
    body.style.backgroundColor = color

    return (
        <div className="container" style={{color:color}}>
         <div className="quote_box">
          <span><i className="fa-solid fa-quote-left"></i>{" "}</span><span>{quote[index].quote}</span>
         </div>
         <div className="container_text">
          <small>{quote[index].author}</small>
          <button className="button" onClick={changeQuote} style={{backgroundColor:color}}>&gt;</button>
         </div>
        </div>
    )
}

export default QuoteBox