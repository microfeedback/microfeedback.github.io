import React from 'react';

let microfeedback;
let $;
if (typeof window !== 'undefined') {
  microfeedback = require('microfeedback-button');
  $ = document.querySelectorAll.bind(document);
}

export default class MicroFeedbackButtonExamples extends React.Component {
  componentDidMount() {
    this.buttons = [

      microfeedback($('#custom-button')[0], {
        title: 'Custom button example',
      }),

      microfeedback($('#custom-dialog')[0], {
        url: null,
        title: 'Custom dialog example',
        text: 'See the sweetalert2 docs for available customization options.',
        placeholder: "What's on your mind?",
        cancelButtonText: 'Discard',
        confirmButtonText: 'Send it!',
        confirmButtonColor: '#41b883',
        reverseButtons: true,
      }),

      microfeedback($('#show-dialog')[0], {
        showDialog(btn) {
          return btn.alert({
            title: 'Programmatic dialog example',
            html:
              'You can create a dialog programatically using <code>btn.alert()</code>.',
            inputPlaceholder: 'One thing we can do better',
            input: 'text',
          });
        },
      }),

      microfeedback($('#non-optimistic')[0], {
        title: 'Non-optimistic example',
        text: 'The success dialog will not be displayed until the fake request is finished.',
        optimistic: false,
        // Simulate requests for demo purposes
        url: true,
        sendRequest() {
          return new Promise(resolve => {
            window.setTimeout(() => {
              resolve();
            }, 2000);
          });
        },
      }),

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
      }),

      microfeedback($('#custom-success')[0], {
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
      }),

      microfeedback($('#custom-success-non-optimistic')[0], {
        title: 'Success message after response',
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
        // Simulate requests for demo purposes
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
      }),
      microfeedback($('#multi-input')[0], {
        url: false,
        showDialog(btn) {
          return btn.alert({
            title: 'Multiple input example',
            html:
              '<textarea id="microfeedback-input" class="swal2-textarea" style="display: block;" placeholder="Describe your issue or share your ideas"></textarea>' +
              '<label id="microfeedback-followup" for="swal2-checkbox" class="swal2-checkbox">' +
              '<input style="display:block" type="checkbox">' +
              '<span>Contact me about opportunities to improve our product</span>' +
              '</label>',
            focusConfirm: false,
            preConfirm() {
              const input = document.getElementById('microfeedback-input');
              const followup = document.querySelectorAll(
                '#microfeedback-followup input'
              )[0];
              return {
                input: input.value,
                followup: followup.checked,
              };
            },
            showCancelButton: true,
            confirmButtonText: 'Send',
          });
        },
        showSuccessDialog(btn, {value: {followup}}) {
          const text = followup
            ? 'We will contact you soon.'
            : 'We will not contact you in the future.';
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
      }),
    ];
  }
  componentWillUnmount() {
    for (const btn of this.buttons) {
      btn.destroy();
    }
  }
  render() {
    return <span style={{display: 'none'}} />;
  }
}
