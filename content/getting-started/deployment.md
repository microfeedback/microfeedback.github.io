---
title: Deployment
---

Guides for deploying to different hosting providers.

- [Now](#now)
- [Heroku](#heroku)

## Now

Zeit's [Now](https://zeit.co/now) is an excellent option for hosting MicroFeedback backends.
Now provides a command-line interface for deploying Node.js
microservices quickly and easily.

Install the now CLI:

```
npm i -g now
```

To deploy a MicroFeedback backend using the now CLI, pass the
GitHub repo for backend.

```
now microfeedback/microfeedback-github
```

You will be prompted to enter the required environment variables to
configure your deployment. In the case of microfeedback-github, all you
need is a GitHub API token.

## Heroku

Heroku is another option for quickly deploying your MicroFeedback
backend.

### Push button deploy

See the documentation pages for the [available backends](/backends/) to find a ![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg) button for your backend of choice.

### Deployment with Git

To deploy with Git you will need to:

- Clone the repo for your backend
- Create and configure a new Heroku app using the heroku CLI
- Push your backend application to the heroku remote

See [this page](https://devcenter.heroku.com/articles/heroku-cli) for
installation instructions for the Heroku CLI.

Then run the following commands:

```
git clone https://github.com/microfeedback/microfeedback-github.git
cd microfeedback-github
heroku create
heroku config:set GH_TOKEN=your-bots-github-token
git push heroku master
```

## Next steps

* See the [Backends](/backends/) page for a list of officially-supported backends.
* If you already have a backend deployed, add a feedback button to your
website using [microfeedback-button](/ui-components/microfeedback-button/).
