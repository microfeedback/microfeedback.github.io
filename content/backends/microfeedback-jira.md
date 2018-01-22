---
title: microfeedback-jira
---

The microfeedback-jira backend collects user feedback as JIRA issues.

GitHub source: [MicroFeedback/microfeedback-jira](https://github.com/MicroFeedback/microfeedback-jira)

## API

### `POST /<projectID>/<issueTypeID>`

Post a new feedback issue on the configured JIRA project.

A single instance may be used to post issues to multiple JIRA projects.

Example: `/10001/3?componentID=12702&componentID=12701&priorityID=3`

The **path** includes:

- `projectID` (required): ID for the project to post issues on.
- `issueTypeID` (required): ID for the issue types for posted issues.

The JSON **payload** contains the following keys:

- `body` (required): The feedback content.
- `screenshotURL`: Optional URL to a screenshot image.
- `extra`: Optional object containing optional information to include in the issue.

The following **query** parameters are optional:

- `componentID`: JIRA component ID to assign to issues. May be passed
multiple times.
- `priorityID`: Priority ID to assign to issues.

## Deploy to Now

Deploy to now using the `now` CLI:

```
now microfeedback/microfeedback-jira
```

You will be prompted to entered the required environment variables.

## Deploy to Heroku

If you prefer to deploy to Heroku, use the deployment button below or
deploy with Git.

### One click deploy

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/microfeedback/microfeedback-jira)

### Deployment with git

```
git clone https://github.com/microfeedback/microfeedback-jira.git
cd microfeedback-jira
heroku create
heroku config:set JIRA_USERNAME=smeagol@lotr.org JIRA_PASSWORD=myprecious JIRA_HOST=onering.atlassian.net
git push heroku master
```

## Configuration (Environment variables)

Configuration is defined through environment variables and can be passed
when you deploy microfeedback-jira.

```
now microfeedback/microfeedback-jira -e JIRA_USERNAME=foo@bar.com -e JIRA_PASSWORD=secret \
  -e JIRA_HOST=company.atlassian.net
```

The following envvars must be set:

- `JIRA_HOST`: JIRA host, e.g., `'yourcompany.atlassian.net'`
- `JIRA_USERNAME` and `JIRA_PASSWORD`: Credentials for the
                                                  JIRA user that will
                                                  post issues
