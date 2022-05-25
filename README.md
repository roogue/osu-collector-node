# Osu-Collector-Node

Osu-Collector-Node is a wrapper for osu!Collector API which is written in typescript.

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

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.
If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

## License
[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)