# figma-ui-components

[![npm version](https://img.shields.io/npm/v/figma-ui-components.svg)](https://www.npmjs.com/package/figma-ui-components)

An unofficial set of Figma UI components. 
Based on [Tom Lowry's Figma UI JS/CSS files](https://www.dropbox.com/s/iar45s6h22nupom/figma-plugin-ui-css-0.5.zip?dl=0).

* Uses React ⚛️, styled-components 💅, TypeScript.
* Stateful components, fully controlled outside.
* All components showed at [Storybook](https://figma-ui.lessmess.agency/).

## Installation

Install it with yarn:

```
yarn add figma-ui-components
```

Or with npm:

```
npm i figma-ui-components --save
```

## Usage

### Global styles

```javascript
import * as React from 'react'
import {TypographyStyles, BaseStyles} from "figma-ui-components"

const App = () => {
    return <>
        <BaseStyles />
        <TypographyStyles />
        ...
    </>
};
```

## Components

```javascript
import * as React from 'react'
import {PrimaryButton, SecondaryButton} from "figma-ui-components"

export const Component = () => {
    return <div>
        <PrimaryButton onClick={onCreate}>Create</PrimaryButton>
        <SecondaryButton onClick={onCancel}>Cancel</SecondaryButton>
    </div>
};
```

## Sponsored

<a href="https://lessmess.agency/?utm_source=figma-ui-components">
  <img src="https://lessmess.agency/badges/sponsored_by_lessmess.svg"
       alt="Sponsored by Lessmess" width="236" height="54">
</a>

