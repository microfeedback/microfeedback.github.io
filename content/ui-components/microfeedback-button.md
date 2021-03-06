---
title: microfeedback-button
# This is necessary to ensure that MicroFeedbackButtonExamples mounts
# when there's a trailing slash
redirect_from:
  - path: /ui-components/microfeedback-button/
    browser: true
---

microfeedback-button adds a configurable feedback button to your website.

## Quickstart

First, [deploy](/getting-started/deployment) a microfeedback backend, e.g.
[microfeedback-github](/backends/microfeedback-github).

Add the following to your site, replacing `'http://your-backend-url.now.sh/'` with your backend's URL.

```html
<script src="https://unpkg.com/microfeedback-button/dist/microfeedback-button.min.js"></script>
<!-- Optional: Include a Promise polyfill for IE9+ -->
<script href="https://cdn.jsdelivr.net/npm/promise-polyfill@7/dist/polyfill.min.js"></script>

<script>
microfeedback({
  url: 'http://your-backend-url.now.sh/'
});
</script>
```

## Usage as a package

microfeedback-button can also be installed and used as a package.

```
npm install microfeedback-button --save
```

```javascript
import microfeedback from 'microfeedback-button';

microfeedback({
  url: 'http://your-backend-url.now.sh/'
});
```

## Default button

To render the default button (as show in the bottom right), pass no
options to `microfeedback()`:

```javascript
microfeedback();
```

If no URL is passed, feedback will only be logged to the console. To
send feedback to your MicroFeedback backend, pass the `url` option:

```javascript
microfeedback({
  url: 'http://your-backend-url.now.sh/'
});
```

## Binding to an element

The feedback dialog can be bound to any element by passing an
`HTMLElement` as the first argument:

```javascript
microfeedback(document.getElementById('custom-button'), {
  url: null,
  title: 'Binding to an element',
  text: 'You can bind a feedback dialog to any element',
});
```
<button id="custom-button" class="mf-button-preview">Preview</button>

## Customizing the input dialog

Dialogs are powered by
[sweetalert2](https://sweetalert2.github.io/#configuration), so all of
sweetalert2's customization options are available to you.

```javascript
microfeedback(document.getElementById('custom-dialog'), {
  url: null,
  title: 'Custom dialog example',
  text: 'See the sweetalert2 docs for available customization options.',
  input: 'text',
  width: 600,
  placeholder: "What's on your mind?",
  cancelButtonText: 'Discard',
  confirmButtonText: 'Send it!',
  confirmButtonColor: '#41b883',
  reverseButtons: true
});
```
<button id="custom-dialog" class="mf-button-preview">Preview</button>

You can even create a dialog programmatically using the `showDialog`
option.

**Use `btn.alert()` to display dialogs**. It is equivalent to the
`swal()` function from [sweetalert2](https://sweetalert2.github.io/).
Make sure to return its value so that the input can be passed
along to other methods.


```javascript
microfeedback(document.getElementById('show-dialog'), {
  url: null,
  showDialog(btn) {
    return btn.alert({
      title: 'Programmatic dialog example',
      html: 'You can create a dialog programatically using <code>btn.alert()</code>.',
      inputPlaceholder: 'One thing we can do better',
      input: 'text',
    });
  }
});
```

<button id="show-dialog" class="mf-button-preview">Preview</button>

## Success message after response

By default, the success message will be shown as soon as the user submits their input.
Set `optimistic: false` if you want to show the message only after the request to the backend is complete.

```javascript
microfeedback(document.getElementById('non-optimistic'), {
  title: 'Non-optimistic example',
  text: 'The success dialog will not be displayed until the fake request is finished.',
  optimistic: false,
  // Simulate requests to backend
  url: true,
  sendRequest() {
    return new Promise(resolve => {
      window.setTimeout(() => {
        resolve();
      }, 2000);
    });
  },
});
```

<button id="non-optimistic" class="mf-button-preview">Preview</button>

## Handling errors

When `optimistic` is set to `false`, use the `onFailure()` hook to
handle error responses.


```javascript
microfeedback(document.getElementById('handling-failure'), {
  title: 'Handling errors',
  html: 'Use <code>onFailure</code> to handle errors.',
  optimistic: false,
  onFailure(btn) {
    return btn.alert('Oops', 'Something terrible happened!', 'error');
  },
  // Simulate a failed request
  url: true,
  sendRequest() {
    return new Promise((resolve, reject) => {
      window.setTimeout(() => {
        reject();
      }, 2000);
    });
  },
});
```

<button id="handling-failure" class="mf-button-preview">Preview</button>

## Customizing the success message

Use the `showSuccessDialog()` hook to customize the success message. Again, use `btn.alert()` to display the dialog. Return its value so that the
input will get passed to other methods.

```javascript
microfeedback(document.getElementById('custom-success'), {
  url: null,
  title: 'Success message example',
  html: 'Use <code>showSuccessDialog</code> to create a custom success dialog.',
  width: 600,
  showSuccessDialog(btn, input) {
    return btn.alert({
      title: "❤️ You're amazing!",
      text: `You wrote: "${input.value}"`,
      confirmButtonText: 'Continue being amazing',
    });
  },
  },
});
```
<button id="custom-success" class="mf-button-preview">Preview</button>

By default, the message will be shown immediately after the user submits
their input.

If you want to show a custom message based on the response from the
backend, set `optimistic` to `false`. The `showSuccessDialog()` hook
will receive the response as its third argument.

```javascript
microfeedback(document.getElementById('custom-success-non-optimistic'), {
  title: 'Custom success message after response',
  html: 'Use <code>showSuccessDialog</code> together with <code>optimistic: false</code> ' +
        'to display a custom message after the request finishes.',
  width: 600,
  optimistic: false,
  showSuccessDialog(btn, input, response) {
    return btn.alert(
      'Issue posted',
      `You wrote: "${input.value}".<br>Your issue number is: ${response.result.issueNo}`,
      'info'
    );
  },
  // Simulate requests to backend
  url: true,
  sendRequest(btn, url, payload) {
    return new Promise(resolve => {
      window.setTimeout(() => {
        resolve({
          result: {
            body: payload.body,
            issueNo: Math.floor(Math.random() * 1000),
          },
        });
      }, 2000);
    });
  },
});
```

<button id="custom-success-non-optimistic" class="mf-button-preview">Preview</button>

## Advanced: Multiple inputs

Multiple inputs can be rendered by using the `html` and `preConfirm`
parameters of `btn.alert`.

```javascript
microfeedback(document.getElementById('btn-multi-input'), {
  url: null,
  showDialog(btn) {
    return btn.alert({
      title: 'Multiple input example',
      html:
        '<textarea id="microfeedback-input" class="swal2-textarea" style="display: block;" placeholder="Describe your issue or share your ideas"></textarea>' +
        '<label id="microfeedback-followup" for="swal2-checkbox" class="swal2-checkbox">' +
        '<input style="display:block" type="checkbox"> ' +
        '<span>Contact me about opportunities to improve our product</span>' +
        '</label>',
      focusConfirm: false,
      preConfirm() {
        const input = document.getElementById('microfeedback-input');
        const followup = document.querySelectorAll('#microfeedback-followup input')[0];
        return {
          input: input.value,
          followup: followup.checked,
        };
      },
      showCancelButton: true,
      confirmButtonText: 'Send',
    });
  },
  showSuccessDialog(btn, {value: {input, followup}}) {
    const text = followup ? 'We will contact you soon.' : 'We will not contact you in the future.';
    return btn.alert({
      title: 'Thank you for your feedback!',
      text,
      type: 'success',
    });
  },
  getPayload(btn, {value: {input, followup}}) {
    return {
      body: input,
      extra: {
        followup,
      },
    };
  },
});
```

<button id="multi-input" class="mf-button-preview">Preview</button>

There are a few interesting bits here:

1. First, we use `showDialog` to programmatically create our custom dialog.
1. We pass `html` to `btn.alert` to specify the HTML content of the dialog.
1. `preConfirm` returns the value that will be passed to `showSuccessDialog` and `getPayload`.
1. `showSuccessDialog` receives the input values from `preConfirm`. We customize the "Thank you" message based on
   whether the user checked the checkbox.
1. `getPayload` receives the input values from `preConfirm` and returns the JSON payload that will be sent to the
   MicroFeedback backend.

This example may seem complicated, but it demonstrates how you have
fine-grained control over the UI when you need it.

## Styling

Use `backgroundColor` and `color` to change the color of the button and button text:

```javascript
microfeedback({
  backgroundColor:'#424b54', // Button color
  color: '#fff',  // Button text color
});
```

You can also style the button in CSS.

```css
.microfeedback-button {
  font-family: 'Helvetica Neue' sans-serif;
}
```

### Styling the dialog

See the [sweetalert2 docs](https://sweetalert2.github.io/) for styling
the input dialog.

## API reference

See microfeedback-button's [README](https://github.com/MicroFeedback/microfeedback-button) for a full API reference.
