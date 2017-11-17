# Simple Firebase Components

Basic firebase components for creating, reading and updating firebase strings

## setting up

clone this repository and extract the dist folder for reference ie 

```<script src="dist/simple-firebase-components.js">```

or include the npm hosted version

```<script src="https://unpkg.com/simple-firebase-components@latest/dist/simple-firebase-components.js">```


create a new firebase project and include the api key and project id, as well as the
name of the document you intend on creating or reading:

```<!-- READ DATA -->
<fb-string id="your-project-id" key="your-api-key" item="name-of-document"></fb-string>
```

```<!-- SEND/UPDATE DATA -->
<fb-content-editor id="your-project-id" key="your-api-key" doc="name-of-document">
```

firebase structure will consist of 'posts'->[your created document]->'data'


## editing the components

This project is built using StencilJS, a compiler for building web components. 
To edit/build from these components, simply clone this repository and follow the
instructions from the [StencilJS Documentation](https://stenciljs.com/docs/intro) 
