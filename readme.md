# Straight up basics
composite component - fancy way of saying a component that you and i created

write more code, it's explicit, look back and understand what's happening 

key - instead of rerendering an destroying tree, just moves certain dom node

React.createElement(x,y,z)
- x = what element to render
- y = all the attributes you want to give the component
- z = w/e children you want to pass to it ( can be single or array)

# Tools

## npm
```
npm init -y
```
## prettier
standardizes on format
```
prettier \"src/**/*.{js,html}\" --write
```

require prettier config and format on save in vs code

## eslint

```
npm install -D eslint eslint-config-prettier
```

need eslint-config-prettier to tell eslint to not worry about spaces and stuff like that

## parcel

```
npm i -D parcel-bundler

parcel src/index.html
```

parcel command is available node_modules/.bin/parcel (binary tools and npm just finds it)