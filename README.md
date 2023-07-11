# design system 

This design system is based on the material design framework and uses their underlying web components.
We provide different implementations of advanced patterns and functionality as reusable web components.

You need to add all material dependencies yourself to prevent multiple definition of `MWC` components such as `<mwc-icon>refresh</mwc-icon>` that as well is true for fonts definitions.

## Install

Install Material web components using
[npm and node](https://nodejs.org)<!-- {.external} -->.

```shell
yarn add scherler_design_system
```

## Import

Import element definitions from
`scherler_design_system/<component>/index.js`.

```js
// index.js
import 'scherler_design_system/dropdown';
```

Import all element definitions from
`scherler_design_system`.

```js
// index.js
import 'scherler_design_system';
```

## Usage

Use the `<component-name>` tag in HTML markup. Refer to the
[component docs](components/) for more guidance on using each component.

[Playground](https://lit.dev/playground/#gist=37d28012c5ec6de30809bdf4a6e26cb6)<!-- {.external} -->

```html
<script type="module" src="./index.js"></script>

<ds-dropdown title="my ds-dropdown" isFirst="true">
    my body content
</ds-dropdown>
```

## Development

### Live preview

```shell
yarn start
```

will start a dev server serving the main `index.html` file (which links to components `index.html`)

### Build

```shell
yarn build
```

will create a new distribution so it can be published in npm

### create a new component

```shell
yarn :add component
```

This will create a new component and link it in the project hierarchy

## The anatomy of a component

To allow automatic wiring and export of all web components, we recommend using one folder per component/view and [barrels](https://basarat.gitbook.io/typescript/main-1/barrel). The `*.styles.ts` file is generated so do not edit it since it will be overridden by the build process. You can either use the `*.css` file to define your styles or use tailwind-driven classes, which will then be exported to the `*.styles.ts` file.
