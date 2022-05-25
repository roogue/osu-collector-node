# Osu-Collector-Node

Osu-Collector-Node is a wrapper for osu!Collector API which written in typescript.

## Installation

```bash
npm i osu-collector-node

##

yarn add osu-collector-node
```

## Example Usage

```js
const { OsuCollectorNode } = require("osu-collector-node");

const cookie = "your-cookie";

const osuCollector = new OsuCollectorNode().setCookie(cookie);

// Fetch data of current logged-in user. 
const user = osuCollector.getUserMe().then(console.log).catch(console.error);

// Fetch metadata (this does not requires a cookie)
const metadata = osuCollector.getMetadata().then(console.log).catch(console.error);
```

For more information, check the [documentation](https://roogue.github.io/osu-collector-node/)

## Contributing
Pull requests are welcomed, it can be missing of api endpoint or enhancement of typings.

If bugs or issues were found, feel free to create an issue too for improvement of this package.

## License
[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)