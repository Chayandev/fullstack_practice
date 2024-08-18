let mainContainer = document.getElementById("root");

function createCustomReactElement(mainContainer, reactElement) {
  /*
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;

  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.target);

  mainContainer.appendChild(domElement);
*/

  const domElement = document.createElement(reactElement.type);
  domElement.innterHTML = reactElement.children;

  for (prop in reactElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  mainContainer.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

createCustomReactElement(mainContainer, reactElement);
