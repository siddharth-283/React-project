function customRender(reactElement, container) {
  /*const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.target);

   container.appendChild(domElement);
 */
  //now let's make v.2.0 of above.
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === 'children') continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
}

// how react sees the element when it is passed in the tree structure.
// react jo hai na vo ek tree banane ki kosis karta hai jo bhi hamare pass element (#example 'div', 'a', 'section', etc)
const reactElement = {
  type: "a", //reperesetnt which tyoe of element it is.

  //props is an object and we can add as much as properties we want.
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click me to visit google",
};

const mainContainer = document.querySelector("#root");

//ig renderning means adding the element to the root
//ab hmare pass ek aisa 'method' ya 'element' ho jo usse render kar de jo 'reactElement' ko add kar de root me
// DOM to yehi chize hai jo element ko inject karna chahta hai.
customRender(reactElement, mainContainer);
//ye 2 chize expect karta hai pheli chiz hai kya inject karu(jaise ki hame reactElement inject karna hai) aur kha pe inject karu(jais ki hame mainContainer me inject karna hai )
//maze ki bat ye hai ki hame pata hi nahi hai ki ye custom render kaise kam kare ga
