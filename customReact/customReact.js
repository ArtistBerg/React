// Function for making new Element on browser

function customRender(reactElement, container){
    /*
//  Making new tag based on 
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
// Appending to second parameter
*/
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    // Using loop
    for (const prop in reactElement.props) {
        if (prop === 'children') continue // we skip the children part
        domElement.setAttribute( prop, reactElement.props[prop])//using array like to set attribute
    }
    
   container.appendChild(domElement)

}

// Element in RAW
const reactElement = {
    type : 'a',
    props : {
        href : 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
}

// Commands
const mainContainer = document.querySelector('#root') 

customRender(reactElement, mainContainer)