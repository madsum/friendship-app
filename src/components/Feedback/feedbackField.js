export default [
  {
    title: 'Send feedback on the app',
    content: {
      title: 'Feedback for Friendship app',
      subtitle: 'Thank you for taking the time to help us make the app better!',
      inputForm: [
        {
          title: 'What about the app has made finding one good friend easy?',
          name: 'easy',
          subtitle:
            'Tell us anything you liked! For example: Was the app easy to use? Was the matching algorithm effective? Did you find it easy to connect through yeahs and naahs?',
        },
        {
          title: 'What about the app has made finding one good friend hard?',
          name: 'hard',
          subtitle:
            'Tell us anything you didn’t like. For example: Did you have trouble finding something? Did you find it difficult to meet up with people?',
        },
        {
          title: 'How could we improve?',
          name: 'improve',
          subtitle: 'Free word! All suggestions are welcome.',
        },
      ],
      checkbox: [
        'Make one good friend',
        'Find a friend group',
        'Find fun events',
        'Find friends to do specific activities with ',
      ],
    },
  },
  {
    title: 'Suggest an interest',
    content: {
      title: 'Suggest an interest',
      subtitle: 'Is an interest missing from the app? Suggest it here!',
      placeholder: 'Interest',
    },
  },
  {
    title: 'Suggest a activity tag',
    content: {
      title: 'Suggest an activity',
      subtitle: 'Is an activity missing from the app? Suggest it here!',
      placeholder: 'Activity',
    },
  },
  {
    title: 'Send us an idea',
    subtitle:
      'Do you have an awesome idea to make the app better? Let us know!',
    content: {
      title: 'Send us an idea',
      subtitle:
        'Please send us your awesome idea. It can be anything about the app: making friends, attending events, sending messages… We’re happy to hear your suggestion!',
    },
  },
];
