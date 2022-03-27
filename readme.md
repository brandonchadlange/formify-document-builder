# @formify-tech/document-builder

A context based javascript HTML template renderer.

## Installation:

To install the Formify document builder, run one of the following commands:

- npm: `npm install @formify-tech/document-builder`

- yarn: `yarn add @formify-tech/document-builder`

## Usage:

To get started import the context that you are building for as well as the elements that you require:

**Basic Example:**

    import { DomContext, Container } from @formify-tech/document-builder

    const document = DomContext([
        Container()
    ]);

## Supported Contexts:

### `DomContext`:

Used to build DOM element nodes with best practices for SEO applied.

### `StringContext`:

Used to build html strings with no specific objective in mind.

### `EmailContext`:

Used to build html strings to support templated email composition with support for all relevant email clients.
