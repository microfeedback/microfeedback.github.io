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

The feedback dialog can be bound to any element. Just pass the element
as the first argument:

```javascript
microfeedback(document.getElementById('custom-button'), {
  url: null,
  title: 'Custom button example',
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

## Custom success message

You can configure the "thank you" dialog using the `beforeSend` option.

Again, use `btn.alert()` to display the dialog. Return its value so that the
input will get passed to other methods.

```javascript
microfeedback(document.getElementById('custom-success'), {
  url: null,
  title: 'Success message example',
  html: 'Use <code>beforeSend()</code> to create a custom success dialog.',
  beforeSend(btn) {
    return btn.alert({
      title: "❤️ You're amazing!",
      text: 'We appreciate you.',
      confirmButtonText: 'Continue being amazing',
    });
  }
});
```
<button id="custom-success" class="mf-button-preview">Preview</button>

Note: `beforeSend` gets called immediately after the user submits
their input. It does **not** wait for a response from the MicroFeedback
backend.

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
  beforeSend(btn, {value: {input, followup}}) {
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
1. `preConfirm` returns the value that will be passed to `beforeSend` and `getPayload`.
1. `beforeSend` receives the input values from `preConfirm`. We customize the "Thank you" message based on
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

## Full documentation

See microfeedback-button's [README](https://github.com/MicroFeedback/microfeedback-button) for a full API reference.
