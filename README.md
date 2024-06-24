![Obol Logo](https://obol.tech/obolnetwork.png)

<h1 align="center">Obol Network</h1>

This repo intends to serve as a documentation site for the Obol Network.

## Quickstart

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```shell
$ yarn
```

### Local Development

```shell
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```shell
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

This repo is configured with Github Actions to deploy the built site to github pages. Committing or merging to master will update the production documentation site.

### Versioning

Docusaurus can manage multiple versions of your docs.

#### Create a docs version

Release a version v0.5.0 of your project:

Control/Command+F the `/docs/` folder for the current version, and update all references to the upcoming version.

Now you are ready to create the next version by running the following command.

```shell
yarn run version v0.5.0
```

The `docs` folder is copied into `versioned_docs/version-v0.5.0` and `versions.json` is created.

Your docs now have 2 versions:

- `v0.5.0` at `http://localhost:3000/docs/` for the version v0.5.0 docs
- `current` at `http://localhost:3000/docs/next/` for the **upcoming, unreleased docs**

Now push this to a branch and merge to main to release this version update publicly.

#### Add a Version Dropdown

To navigate seamlessly across versions, add a version dropdown.

Modify the `docusaurus.config.js` file:

```js title="docusaurus.config.js"
module.exports = {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: "docsVersionDropdown",
        },
        // highlight-end
      ],
    },
  },
};
```

The docs version dropdown appears in your navbar:

![Docs Version Dropdown](/img/tutorial/docsVersionDropdown.png)

#### Update an existing version

It is possible to edit versioned docs in their respective folder:

- `versioned_docs/version-1.0/hello.md` updates `http://localhost:3000/docs/hello`
- `docs/hello.md` updates `http://localhost:3000/docs/next/hello`

### Translate your site

Let's translate `docs/intro.md` to French.

#### Configure i18n

Modify `docusaurus.config.js` to add support for the `fr` locale:

```js title="docusaurus.config.js"
module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
  },
};
```

#### Translate a doc

Copy the `docs/intro.md` file to the `i18n/fr` folder:

```shell
mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/

cp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md
```

Translate `i18n/fr/docusaurus-plugin-content-docs/current/intro.md` in French.

#### Start your localized site

Start your site on the French locale:

```shell
npm run start -- --locale fr
```

Your localized site is accessible at `http://localhost:3000/fr/` and the `Getting Started` page is translated.

:::caution

In development, you can only use one locale at the same time.

:::

#### Add a Locale Dropdown

To navigate seamlessly across languages, add a locale dropdown.

Modify the `docusaurus.config.js` file:

```js title="docusaurus.config.js"
module.exports = {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: "localeDropdown",
        },
        // highlight-end
      ],
    },
  },
};
```

The locale dropdown now appears in your navbar:

![Locale Dropdown](/img/tutorial/localeDropdown.png)

#### Build your localized site

Build your site for a specific locale:

```shell
npm run build -- --locale fr
```

Or build your site to include all the locales at once:

```shell
npm run build
```

## Notes/Bugs/Gotchas

Configure a documentation page's extra details with these [metadata fields](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-frontmatter).
