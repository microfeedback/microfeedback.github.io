---
title: Core concepts
---

The MicroFeedback project is broken down into two components:
**Backends** and **UI Components**.

## Backends

MicroFeedback *backends* are simple Node.js services that expose an HTTP
endpoint for collecting user feedback.

For example, the [microfeedback-github](/backends/microfeedback-github/) backend posts user
feedback into a given GitHub repo's issue tracker.

## UI Components

MicroFeedback *UI components* are what end-users interact with to input
their feedback. A UI component includes code to post user feedback to your
MicroFeedback backend.

For example, [microfeedback-button](/ui-components/microfeedback-button/) displays a
feedback button that opens an input dialog. Upon submitting the input
dialog, a `POST` request is made to the specified backend's URL.

## Next steps

- See the [Deployment](/getting-started/deployment/) guide to learn how to deploy a MicroFeedback backend.
- Go to the [Backends](/backends/) section for detailed documentation available backends.
- Use [microfeedback-button](/ui-components/microfeedback-button/) to display a feedback button on your website.
