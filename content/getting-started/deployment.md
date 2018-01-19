---
title: Deployment
---

The easiest way to deploy a MicroFeedback backend is with ZEIT's
[now](https://zeit.co/now), which provides a command-line interface for
deploying Node.js microservices quickly and easily.

Before you can start deploying, you'll need the now client installed.
See [here](https://zeit.co/now#get-started) for instructions on how to
get started with now.

To deploy a MicroFeedback backend using the now CLI, pass the
GitHub repo for backend.

```
now microfeedback/microfeedback-github
```

You will be prompted to enter the required environment variables to
configure your deployment. In the case of microfeedback-github, all you
need is a GitHub API token.

See the [Backends](/backends/) page for a list of officially-supported backends.
