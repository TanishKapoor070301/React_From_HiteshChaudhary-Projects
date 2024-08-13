function customRender(ReactElement,container){
    const domElement=document.createElement(ReactElement.type);
    domElement.innerHTML=ReactElement.children
    for(const prop in ReactElement.props){
        domElement.setAttribute(prop,ReactElement.props[prop])
    }

    container.appendChild(domElement)
}


const ReactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'click me to visit google'
}

const mainContainer=document.querySelector('#root');

customRender(ReactElement,mainContainer);