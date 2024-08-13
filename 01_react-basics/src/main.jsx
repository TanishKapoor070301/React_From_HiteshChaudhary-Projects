import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'

function Myapp(){

    let name="Tanish Ji"
    return(
        <div>
            <h1>hello {name}</h1>
        </div>
    )
}

// const ReactElement={
//     type:'a',
//     props:{
//         href:'https://google.com',
//         target:'_blank'
//     },
//     children:'click me to visit google'
// }

const anotherElement=(
    <a href="https://google.com">visit</a>
)

const ReactElement=React.createElement(
    'a',
    {href:'https://google.com'},
    'clok me'
)
createRoot(document.getElementById('root')).render(
    <Myapp />
    // ReactElement
    // anotherElement
)
