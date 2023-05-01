# Web Components

https://css-tricks.com/building-interoperable-web-components-react/

> Web Components are essentially HTML elements that you define yourself, like <yummy-pizza> or whatever, from the ground up. They’re covered all over here at CSS-Tricks (including an extensive series by Caleb Williams and one by John Rhea) but we’ll briefly walk through the process. Essentially, you define a JavaScript class, inherit it from HTMLElement, and then define whatever properties, attributes and styles the web component has and, of course, the markup it will ultimately render to your users.

> Being able to define custom HTML elements that aren’t bound to any particular component is exciting. But this freedom is also a limitation. Existing independently of any JavaScript framework means you can’t really interact with those JavaScript frameworks. Think of a React component which fetches some data and then renders some other React component, passing along the data. This wouldn’t really work as a web component, since a web component doesn’t know how to render a React component.

> Web components particularly excel as leaf components. Leaf components are the last thing to be rendered in a component tree. These are the components which receive some props, and render some UI. These are not the components sitting in the middle of your component tree, passing data along, setting context, etc. — just pure pieces of UI that will look the same, no matter which JavaScript framework is powering the rest of the app.