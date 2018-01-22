---
title: microfeedback-github
---

The microfeedback-github backend collects user feedback to your GitHub
repo's issue tracker.

GitHub source: [MicroFeedback/microfeedback-github](https://github.com/MicroFeedback/microfeedback-github)

## API

### `POST /<githubUser>/<githubRepo>`

Post a new feedback message on the issue tracker for the given GitHub
repo.

A single instance may be used to post issues to multiple GitHub repos.

The **path** includes:

- `githubUser` (required): Github username or organization.
- `githubRepo` (required): Repo name.

The JSON **payload** contains the following keys:

- `body` (required): The feedback content.
- `screenshotURL`: Optional URL to a screenshot image.
- `extra`: Optional object containing optional information to include in the issue.

## Deploy to Now

If you already have a [Now](https://zeit.co/now) account and a GitHub
API token associated with your feedback bot, you can deploy
microfeedback-github to now using the `now` CLI.

### One command deploy

```
now microfeedback/microfeedback-github
```

You will be prompted to enter the GitHub API token associated
with your feedback bot's GitHub account.

For more detailed setup instructions, see the next section.

### Detailed instructions

- Sign in to the GitHub account that will post issues, e.g. `myapp-issuebot`.
- Go [here](https://github.com/settings/tokens/new) to generate a new personal access token.
- Enter a description, e.g. "For posting issues" and select the "repo" scope.

![](https://user-images.githubusercontent.com/2379650/35210363-dd5e03aa-ff8c-11e7-9ffd-fb707d58f793.png)

- Click "Generate token" and copy the token.

- [Create an account with Now](https://zeit.co/login) and install the `now` CLI.

```
npm i -g now
```

- Deploy the service with `now`. When prompted, pass the GitHub token you generated previously.

```
now microfeedback/microfeedback-github
```

- You're done! Copy the URL returned by `now`. This is the URL that clients will use to access the service.

## Deploy to Heroku

If you prefer to deploy to Heroku, use the deployment button below or
deploy with Git.

### One click deploy

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/microfeedback/microfeedback-github)

### Deployment with Git

```
git clone https://github.com/microfeedback/microfeedback-github.git
cd microfeedback-github
heroku create
heroku config:set GH_TOKEN=your-bot-token
git push heroku master
```

## Configuration

Configuration is defined through environment variables and can be passed
when you deploy microfeedback-github.

```
now microfeedback/microfeedback-github -e GH_TOKEN=abc123 -e ALLOWED_REPOS=sloria/website,sloria/another-website
```

The following options are available:

- `GH_TOKEN` (required): The GitHub API token associated with your
                         feedback bot's account.
- `ALLOWED_REPOS`: A comma-delimited list of GitHub repos that maybe
                    posted to. If `'*'`, allow posting to any repo
                    that the `GH_TOKEN` has access to (incl. any
                    public repos). Default: `'*'`
