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

## Deploy using ZEIT now

```
now microfeedback/microfeedback-jira
```

## Full documentation

See the project's [README](https://github.com/MicroFeedback/microfeedback-jira) for full API documentation.
