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


## Deploy using ZEIT now

```
now microfeedback/microfeedback-github
```

## Full documentation

See the project's [README](https://github.com/MicroFeedback/microfeedback-github) for full API documentation.
