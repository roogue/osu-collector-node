# Osu-Collector-Node

Osu-Collector-Node is a wrapper for osu!Collector API which is written in typescript.

## Installation

```bash
npm i osu-collector-node

##

yarn add osu-collector-node
```

## Documentation

[Documentation](https://roogue.github.io/osu-collector-node/)

## Example Usage

```js
const { OsuCollectorNode } = require("osu-collector-node");

const cookie = "your-cookie";

const osuCollector = new OsuCollectorNode().setCookie(cookie);

// Fetch data of current logged-in user. 
osuCollector.getUserMe().then(console.log).catch(console.error);

// Fetch metadata (this does not requires a cookie)
osuCollector.getMetadata().then(console.log).catch(console.error);

// Typescript return type example
osuCollector.getUser<"Uploads">({ id: 2051389 }).then(console.log).catch(console.error);
```

For more information, check the [documentation](https://roogue.github.io/osu-collector-node/)

## Contributing

Typings are written manually by me, there's might be typo, missing or errors in props, once found, please open an issue or pull request for enhancement. Big appreciate.

## License
[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)