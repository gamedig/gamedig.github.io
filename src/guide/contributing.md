# GameDig Contribution Guide

Thank you for considering a contribution to GameDig! Your efforts help enhance
the documentation and functionality of GameDig, making it an invaluable resource
for developers and gamers alike. Every contribution, no matter how small,
contributes to the improvement of GameDig's documentation and its libraries.

By participating in this community, you are helping to create a welcoming and
inclusive environment. Please take a moment to read our
[Code of Conduct](/code-of-conduct) to ensure our community remains a respectful
and enjoyable place for everyone.

This guide provides a detailed walkthrough of the contribution process, from
identifying issues and proposing changes to creating a Pull Request (PR) and
navigating the review process.

## New Contributor Guide

Welcome to the GameDig Community! As you embark on your journey as a
contributor, we're thrilled to provide you with a comprehensive guide to help
you get started and make meaningful contributions to the project. Below, you'll
find an array of resources and information tailored to new contributors like
yourself.

### Exploring Open Source Opportunities

To begin your journey into open source contribution, it's essential to
understand the various opportunities available to you on GitHub. GitHub's
curated guide,
[Finding ways to contribute to open source on GitHub](https://docs.github.com/en/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github),
offers insights into discovering projects, understanding their needs, and
identifying areas where you can make a difference.

### Setting Up Your Development Environment

Before diving into contributing code, it's crucial to set up your development
environment properly. GitHub's detailed documentation on
[Setting up Git](https://docs.github.com/en/get-started/getting-started-with-git/set-up-git)
provides step-by-step instructions to help you configure Git on your local
machine, ensuring a smooth and efficient development process.

### Understanding GitHub Flow

GitHub Flow is a collaborative development process that facilitates seamless
teamwork and iteration. To familiarize yourself with this workflow, explore
GitHub's guide on
[GitHub flow](https://docs.github.com/en/get-started/using-github/github-flow),
which outlines best practices for branching, committing changes, and merging
pull requests.

### Collaborating with Pull Requests

One of the primary ways to contribute to GameDig is by collaborating with pull
requests. Learn how to create, review, and merge pull requests effectively by
referring to the comprehensive guide on
[Collaborating with pull requests](https://docs.github.com/en/github/collaborating-with-pull-requests).
This resource covers everything from opening pull requests to addressing
feedback and resolving conflicts.

### Additional Resources and Support

As you begin your journey as a GameDig contributor, remember that you're not
alone. Our community is here to support you every step of the way. Whether you
have questions, need guidance, or want to connect with fellow contributors, our
Discord server provides a welcoming space for discussions and collaboration.
Join us in the [GameDig Community Discord](https://discord.gg/NVCMn3tnxH).

### Get Started Today!

Armed with these resources and a passion for open source, you're ready to embark
on your journey as a GameDig contributor. Start exploring opportunities, making
meaningful contributions, and shaping the future of GameDig. We can't wait to
see what you'll accomplish!

## Contribution Workflow

### Identifying and Addressing Issues

#### Reporting New Issues

If you encounter a problem or see room for improvement, start by checking if
there's already an
[existing issue](https://github.com/gamedig/gamedig.github.io/issues). If not,
you can create a new issue using the appropriate
[issue template](https://github.com/gamedig/gamedig.github.io/issues/new/choose)
to ensure clarity and comprehensiveness.

#### Working on Existing Issues

Browse the list of
[open issues](https://github.com/gamedig/gamedig.github.io/issues) to find
something that interests you. You can filter the list by using `labels` to
narrow down the type of contributions that match your skills and interests. We
encourage open collaboration and do not assign issues to specific contributors.

### Making Your Contribution

#### Quick Edits

For minor corrections like typos, broken links or small improvements, simply
click `Suggest changes to this page` at the bottom of any documentation page.
This will lead you directly to the `.md` file where you can make your changes
and submit a pull request.

#### Local Development

For more significant contributions or changes, you might prefer working locally:

1. **Fork the repository**: Click the `Fork` button in the top-right corner of
   the repository page to create your own copy of the repository.
2. **Clone the repository**: Use `git clone` to create a local copy of your
   forked repository.
3. **Set up your development environment**: Ensure you have **Node.js**
   installed and updated as per the `engines.node` value in the `package.json`
4. **Install dependencies**: Run `npm install` to install the necessary
   dependencies.
5. **Create a branch and make your changes**: This is where you can dive into
   coding, writing documentation, or making other improvements.

### Finalizing Your Contribution

After making your changes, commit them to your branch and submit a pull request.
Be sure to follow any templates or guidelines provided, as this helps expedite
the review process.

## Library Contribution Guidelines

### Overview

The GameDig libraries are crucial components of the GameDig ecosystem, providing
the underlying functionality for querying game server information. We welcome
contributions, including new features, bug fixes, and improvements to existing
functionalities.

### Communication and Collaboration

- **GitHub Issues**: Our primary platform for discussion about bugs, features,
  and improvements.
- **Discord**: Join our [Discord community](https://discord.gg/NVCMn3tnxH) for
  more informal discussions and community engagement.

### Development Guidelines

#### Licensing

All contributions are made under the
[MIT license](https://opensource.org/licenses/MIT), ensuring flexibility and
openness in the development process.

#### Naming Conventions

For consistency and clarity, we have specific guidelines for naming games and
creating identification strings within the libraries. Please refer to the
detailed naming conventions outlined in the specific repository's
`CONTRIBUTING.md` file.

#### Contribution Priorities

Contributions that implement games using already supported protocols or add
support for new protocols are highly encouraged. We prioritize adding games that
can immediately benefit from the library's current capabilities.

#### Versioning and Releases

We adhere to Semantic Versioning (SemVer) for the libraries, denoting major,
minor, and patch releases. This system helps us manage releases in a way that's
predictable and understandable for users.

### Getting Your Changes Merged

Once you've made your contribution:

1. **Submit a Pull Request**: Provide a detailed description of your changes and
   how they improve the library.
2. **Review Process**: The GameDig team will review your submission, possibly
   requesting changes or clarification.
3. **Merge**: After approval, your contributions will be merged, becoming part
   of the GameDig ecosystem.

### Celebrating Your Contribution

Congratulations on contributing to GameDig! Your efforts help enhance the gaming
community's experience by improving the robustness and functionality of GameDig.
We invite you to continue participating in our community, exploring new ways to
contribute and collaborate.

By following these guidelines, you ensure a smooth and effective contribution
process, helping to grow and improve GameDig for everyone involved.
