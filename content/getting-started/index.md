---
title: Getting Started
redirect_from:
  - docs/
---

Welcome to the MicroFeedback docs.

## What is MicroFeedback?

MicroFeedback is a collection of microservices and UI components for
collecting user feedback.

Once you have a MicroFeedback backend deployed and a UI component on your site, user feedback
will be posted to your issue tracker (e.g., on GitHub or in JIRA).

MicroFeedback aims to provide a **no-cost, easily-deployable, and open
source solution** for collecting feedback about your website or app.

## Features

* Users don't need to sign up to your issue tracker service in order to submit feedback.
* Client information (browser, operating system) is included with every issue.
* Spam detection using Akismet.
* Toxicity scoring with the Perspective API.
* Attach arbitrary metadata (e.g. user information) to issues.
* Deploy easily to Now or Heroku--no databases or addons necessary.

## Next steps

- If you're just starting out, check out the [Core Concepts](/getting-started/core-concepts) page to learn about the two components
of the MicroFeedback project: *Backends* and *UI Components*.
- For guides on how to deploy MicroFeedback backends, see the
[Deployment](/getting-started/deployment) page.
- If you're looking for documentation on a specific backend, see the
[Backends](/backends/) page.
- If you need to add a feedback button to your site, see [microfeedback-button](/ui-components/microfeedback-button).
