// simple creating:
 
const elem1 = document.createElement('a')
const elem2 = document.createElement('div')
 
 
// method with parser:
const parser = new DOMParser();
const element = parser.parseFromString('<div>......</div>','text/html').body.firstChild;
 
 
// using created elements (both methods):
 
const parent = document.querySelector('some parent element')
parent.append(element);
parent.prepend(element);