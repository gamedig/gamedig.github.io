---
title: GameDig Libraries Overview
description: In-depth guide to GameDig for Node.js and Rust
---

# Overview of GameDig Libraries

::: warning Work in Progress This overview for the GameDig libraries is
currently under active development. This page aims to provide a thorough
introduction and guide to utilizing GameDig in both Node.js and Rust
environments. While we populate this page with detailed content, please note
that some sections may be modified or expanded based on user feedback and
ongoing development. We appreciate your understanding and patience during this
phase. :::

## Introduction to GameDig

GameDig is a premier game server query library designed to retrieve detailed
information about game server statuses across a wide array of games and
platforms. With implementations in both Node.js and Rust, GameDig offers
developers the tools to integrate real-time server data into applications,
enhancing user experiences and enabling advanced server management.

### What Makes GameDig Unique?

- **Extensive Game Support:** Over `320` supported games and services, ensuring
  wide applicability.
- **Flexible Usage:** Available for use as a Node.js module or command-line
  tool, as well as a Rust library for system-level integration.
- **Community-Driven:** Benefiting from active community support, including a
  dedicated Discord server for discussions and GitHub repositories for
  contributions.

## Node GameDig

::: tip Node.js Implementation **node-GameDig** stands out as a comprehensive
Node.js module, enabling developers to easily query server information for
nearly any game or voice server that makes its status publicly available.

- GitHub Repository:
  [node-GameDig on GitHub](https://github.com/gamedig/node-gamedig)
- npm Package: [GameDig on npm](https://www.npmjs.com/package/gamedig)
- Compatibility: Requires Node.js version `>=16.20.0` and supports Deno
  `>=1.39.2`.
- Community Support: Questions and discussions are welcome on our
  [Discord Server](https://discord.gg/NVCMn3tnxH) or for bugs and feature
  requests, please use
  [GitHub Issues](https://github.com/gamedig/node-gamedig/issues).

**Quick Start Example:**

```javascript
import { GameDig } from 'gamedig';

GameDig.query({
  type: 'minecraft',
  host: 'mc.hypixel.net',
})
  .then((state) => console.log(state))
  .catch((error) => console.log(`Server is offline, error: ${error}`));
```

For more detailed examples and configuration options, refer to the
[Official GitHub repository](https://github.com/gamedig/node-gamedig).

::: details Installation

::: details npm

Install the `gamedig` library via npm:

```bash
npm install gamedig
```

Install the TS definitions for `gamedig` as a dev dependency (if using
TypeScript):

```bash
npm install --save-dev @types/gamedig
```

::: details Using Yarn or pnpm as your package manager?

You can also use `yarn` or `pnpm` to install `gamedig` and its TypeScript
definitions.

```bash
yarn add gamedig
```

```bash
yarn add --dev @types/gamedig

```

```bash
pnpm add gamedig
```

```bash
pnpm add --save-dev @types/gamedig
```

:::

## Rust GameDig

::: tip Rust Implementation **rust-GameDig** mirrors the functionality of its
Node.js counterpart within the Rust ecosystem, leveraging Rust's performance and
safety features for game server queries.

- GitHub Repository:
  [rust-GameDig on GitHub](https://github.com/gamedig/rust-gamedig)
- Crates.io Package: [GameDig on Crates.io](https://crates.io/crates/gamedig)
- Compatibility: Minimum supported Rust version is `v1.65.0`.
- Community Engagement: Join the
  [GameDig Discord Server](https://discord.gg/NVCMn3tnxH) for community
  discussions.

**Example Query in Rust:**

```rust
use gamedig::games::teamfortress2;

fn main() {
    let response = teamfortress2::query(&"127.0.0.1".parse().unwrap(), None);

    match response {
        Err(error) => println!("Couldn't query, error: {}", error),
        Ok(r) => println!("{:#?}", r)
    }
}
```

For additional examples and how to contribute to the development of
rust-GameDig, check out the
[GitHub repository](https://github.com/gamedig/rust-gamedig).

::: details Installation

Add `gamedig` to your `Cargo.toml`:

```toml
[dependencies]
gamedig = "version_here"
```

::: details Install with `cargo add`

You can find more details about the `cargo add` command in
[The Cargo Book](https://doc.rust-lang.org/cargo/commands/cargo-add.html).

```bash
cargo add gamedig
```

:::

::: details Get Involved Both the Node.js and Rust versions of GameDig are
open-source projects that thrive on community contributions. Whether you're
looking to add support for a new game, improve existing functionality, or simply
share feedback, we encourage you to get involved. Visit our GitHub repositories
to learn more about contributing or join our Discord server to become part of
the GameDig community. :::

::: warning Note The information provided here is a brief introduction to the
GameDig libraries. For comprehensive guides, detailed API documentation, and
advanced usage examples, please refer to the respective GitHub repositories or
reach out to the community for assistance. :::
