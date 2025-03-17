function customRender(reactElement,maincontainer){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    for(const prop in reactElement.props){
        if(prop==='children'){
            continue;
        }
        domElement.setAttribute(prop,reactElement.props[prop]);
    }

    maincontainer.appendChild(domElement);
} 

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    children: 'click here to visit google'
};

const maincontainer = document.querySelector('#root')

customRender(reactElement,maincontainer);
