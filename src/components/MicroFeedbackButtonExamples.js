import React from 'react';

let microfeedback;
let $;
if (typeof window !== 'undefined') {
  microfeedback = require('microfeedback-button');
  $ = document.querySelectorAll.bind(document);
}

export default class MicroFeedbackButtonExamples extends React.Component {
  componentDidMount() {
    this.custom = microfeedback($('#custom-button')[0], {
      title: 'Custom button example',
      text: 'You can bind the feedback dialog to any element.',
    });
    this.customDialog = microfeedback($('#custom-dialog')[0], {
      title: 'Custom dialog example',
      placeholder: "What's on your mind?",
      cancelButtonText: 'Discard',
      confirmButtonText: 'Send it!',
      confirmButtonColor: '#41b883',
      reverseButtons: true,
    });
    this.showDialog = microfeedback($('#show-dialog')[0], {
      showDialog(btn) {
        return btn.alert({
          title: 'Programmatic dialog example',
          html:
            'You can create a dialog programatically using <code>btn.alert()</code>.',
          inputPlaceholder: 'One thing we can do better',
          input: 'text',
        });
      },
    });
    this.customSuccess = microfeedback($('#custom-success')[0], {
      title: 'Success message example',
      html: 'Use <code>beforeSend()</code> to create a custom success dialog.',
      width: 600,
      beforeSend(btn) {
        return btn.alert({
          title: "❤️ You're amazing!",
          text: 'We appreciate you.',
          confirmButtonText: 'Continue being amazing',
        });
      },
    });
    this.multiInput = microfeedback($('#multi-input')[0], {
      url: false,
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
      beforeSend(btn, {value: {followup}}) {
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
    });
  }
  componentWillUnmount() {
    this.custom.destroy();
    this.customDialog.destroy();
    this.showDialog.destroy();
    this.customSuccess.destroy();
    this.multiInput.destroy();
  }
  render() {
    return <span style={{display: 'none'}} />;
  }
}
