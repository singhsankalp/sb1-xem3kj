import type { RegularClass } from '../types/events';

export const regularClasses: RegularClass[] = [
  {
    id: 101,
    type: 'regular',
    title: 'Kathak',
    image: 'https://storage.googleapis.com/cityvibe/kathak.PNG?auto=format&fit=crop&w=1500&q=80',
    categories: ['Dance'],
    location: 'Good Move Studios, Koramangala',
    locationUrl: 'https://g.co/kgs/BYH4hS8',
    description: 'Step into the enchanting world of Kathak, a classical Indian dance form celebrated for its graceful spins, intricate footwork, and expressive storytelling. In this class, you will learn the fundamentals of rhythm, hand gestures (mudras), and emotive expressions (abhinaya), all set to traditional and modern compositions. Perfect for beginners and those seeking to deepen their cultural connection, this class offers a beautiful journey into the art of Kathak!',
    maxCapacity: 30,
    instagramStoryUrl: 'https://www.instagram.com/p/C_arnDJyexg/',
    level: 'All Levels',
    featured: true,
    // instructor: {
    //   name: 'Sarah Mitchell',
    //   image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=300&q=80',
    //   bio: 'Certified yoga instructor with 10+ years of experience in mindfulness and meditation practices.',
    //   expertise: ['Hatha Yoga', 'Vinyasa Flow', 'Meditation', 'Breathwork']
    // },
    schedule: {
      batches: [
        {
          name: "Weekend Batch",
          days: ['Saturday'],
          timeSlots: [
            { start: '3:00 PM', end: '4:30 PM' }
          ]
        }
      ],
      frequency: 'Weekly'
    },
    requirements: [
      'Comfortable ethnic clothes',
      'Water bottle'
    ],
    amenities: [
      'Changing rooms',
      'Filtered water.'
    ],
    faqs: [
      {
        question: 'What if I\'m a complete beginner?',
        answer: 'Our classes are designed for all levels.'
      }
    ],
    subscriptionPlans: [
      {
        id: 'monthly-basic',
        name: 'Monthly Basic',
        price: 2200,
        interval: 'monthly',
        description: 'Perfect for exploring interest',
        features: [
          'All Basic features',
          // 'Basic amenities access',
          // 'Online community access',
          // 'Class recordings for 24 hours'
        ],
        bookingLink: 'https://rzp.io/l/kathakmembership'
      },
      {
        id: 'quarterly-premium',
        name: 'Quarterly Premium',
        price: 5600,
        interval: 'quarterly',
        description: 'Best value for dedicated dancers',
        features: [
          'All Basic features',
          'Mark holidays',
          '17% off workshops'
        ],
        popular: true,
        bookingLink: 'https://rzp.io/l/kathakmembership'
      }
    ]
  },
  {
    id: 102,
    type: 'regular',
    title: 'Semi-classical',
    image: 'https://storage.googleapis.com/cityvibe/IMG_9661.PNG?auto=format&fit=crop&w=1500&q=80',
    categories: ['Dance'],
    location: 'Good Move Studios, Koramangala',
    locationUrl: 'https://g.co/kgs/BYH4hS8',
    maxCapacity: 20,
    instagramStoryUrl: 'https://www.instagram.com/p/C6YZEZ0soCv/',
    description: 'Discover the beauty of Semi-Classical dance, a captivating fusion of traditional Indian classical styles and contemporary movements. This class offers a perfect balance of grace, expression, and rhythm, making it accessible to dancers of all levels. Learn intricate footwork, fluid hand gestures, and storytelling techniques while exploring a variety of music, from classical melodies to modern tunes. Ideal for those looking to blend tradition with creativity, this class nurtures artistic expression and celebrates the rich cultural heritage of dance. Join us to move, connect, and express yourself in a dynamic and supportive environment!',
    level: 'All Levels',
    // instructor: {
    //   name: 'Sarah Mitchell',
    //   image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=300&q=80',
    //   bio: 'Certified yoga instructor with 10+ years of experience in mindfulness and meditation practices.',
    //   expertise: ['Hatha Yoga', 'Vinyasa Flow', 'Meditation', 'Breathwork']
    // },
    schedule: {
      batches: [
        {
          name: "Weekday Batch",
          days: ['Tuesday', 'Thursday'],
          timeSlots: [
            { start: '07:30', end: '08:30' }
          ]
        },
        {
          name: "Weekend Batch",
          days: ['Saturday', 'Saturday'],
          timeSlots: [
            { start: '11:00', end: '12:00' }
          ]
        }
      ],
      frequency: 'Weekly'
    },
    requirements: [
      'Comfortable ethnic clothes',
      'Water bottle'
    ],
    amenities: [
      'Changing rooms',
      'Filtered water.'
    ],
    faqs: [
      {
        question: 'What if I\'m a complete beginner?',
        answer: 'Our classes are designed for all levels.'
      }
    ],
    subscriptionPlans: [
      {
        id: 'monthly-basic',
        name: 'Monthly Basic',
        price: 3400,
        interval: 'monthly',
        description: 'Perfect for exploring interest',
        features: [
          'All Basic features',
          // 'Basic amenities access',
          // 'Online community access',
          // 'Class recordings for 24 hours'
        ],
        bookingLink: 'https://rzp.io/l/semiclassicalgms'
      },
      {
        id: 'quarterly-premium',
        name: 'Quarterly Premium',
        price: 8500,
        interval: 'quarterly',
        description: 'Best value for dedicated dancers',
        features: [
          'All Basic features',
          'Mark holidays',
          '17% off workshops'
        ],
        popular: true,
        bookingLink: 'https://rzp.io/l/semiclassicalgms'
      }
    ]
  },
  {
    id: 103,
    type: 'regular',
    title: 'Kids Regular Classes',
    image: 'https://storage.googleapis.com/cityvibe/kids.PNG?auto=format&fit=crop&w=1500&q=80',
    categories: ['Dance', 'Kids'],
    location: 'Good Move Studios',
    locationUrl: 'https://g.co/kgs/BYH4hS8',
    instagramStoryUrl: 'https://www.instagram.com/p/DBd5R21yzhK/',
    description: 'Let your little ones groove and have fun! Our kids dance class combines energy, creativity, and simple choreography to keep them active and smiling. Perfect for all skill levels!',
    maxCapacity: 10,
    level: 'Beginner',
    featured: true,
    // instructor: {
    //   name: 'Sarah Mitchell',
    //   image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=300&q=80',
    //   bio: 'Certified yoga instructor with 10+ years of experience in mindfulness and meditation practices.',
    //   expertise: ['Hatha Yoga', 'Vinyasa Flow', 'Meditation', 'Breathwork']
    // },
    schedule: {
      batches: [
        {
          name: "Weekend Batch",
          days: ['Saturday', 'Sunday'],
          timeSlots: [
            { start: '12:00 PM', end: '1:00 PM' }
          ]
        }
      ],
      frequency: 'Weekly'
    },
    requirements: [
      'Comfortable clothes',
      'Water bottle'
    ],
    amenities: [
      'Changing rooms',
      'Filtered water.'
    ],
    faqs: [
      {
        question: 'What if I\'m a complete beginner?',
        answer: 'Our classes are designed for all levels.'
      }
    ],
    subscriptionPlans: [
      {
        id: 'monthly-basic',
        name: 'Monthly Basic',
        price: 2400,
        interval: 'monthly',
        description: 'Perfect for exploring interest',
        features: [
          'All Basic features',
          // 'Basic amenities access',
          // 'Online community access',
          // 'Class recordings for 24 hours'
        ],
        bookingLink: 'https://rzp.io/rzp/xJn2d5q'
      },
      {
        id: 'quarterly-premium',
        name: 'Quarterly Premium',
        price: 6500,
        interval: 'quarterly',
        description: 'Best value for dedicated dancers',
        features: [
          'All Basic features',
          'Mark holidays',
          '10% off workshops'
        ],
        popular: true,
        bookingLink: 'https://rzp.io/rzp/xJn2d5q'
      }
    ]
  },
  {
    id: 104,
    type: 'regular',
    title: 'Bollywood',
    image: 'https://storage.googleapis.com/cityvibe/logo.PNG?auto=format&fit=crop&w=1500&q=80',
    categories: ['Dance'],
    location: 'Good Move Studios, Koramangala',
    locationUrl: 'https://g.co/kgs/BYH4hS8',
    featured: false,
    description: 'Dive into the electrifying world of Modern Bollywood dance! This high-energy class blends the vibrant rhythms of Bollywood with dynamic moves from hip-hop, contemporary, and other global styles. Perfect for beginners and dance enthusiasts alike, you will learn expressive choreography that fuses traditional Indian flair with modern grooves. Whether you are looking to unleash your inner performer or just have fun, this class promises a creative, upbeat, and unforgettable experience!',
    level: 'Beginner',
    maxCapacity: 20,
    instagramStoryUrl: 'https://www.instagram.com/p/DB8E2vPSatV/',
    schedule: {
      batches: [
        {
          name: "Weekday Batch",
          days: ['Monday', 'Wednesday'],
          timeSlots: [
            { start: '07:30', end: '08:30' }
          ]
        },
        {
          name: "Weekend Batch",
          days: ['Saturday', 'Saturday'],
          timeSlots: [
            { start: '11:00', end: '12:00' }
          ]
        }
      ],
      frequency: 'Weekly'
    },
    faqs: [
      {
        question: 'What is the relevant age group?',
        answer: 'No prior experience needed! Our classes are designed for beginners.'
      },
      {
        question: 'What should I wear?',
        answer: 'Comfortable clothing that allows movement and clean indoor shoes.'
      },
      {
        question: 'Can I join mid-month?',
        answer: 'Yes, we offer pro-rated pricing for mid-month joins.'
      }
    ],
    subscriptionPlans: [
      {
        id: 'monthly-basic',
        name: 'Monthly Basic',
        price: 3000,
        interval: 'monthly',
        description: 'Perfect for exploring interest',
        features: [
          'All Basic features'
        ],
        bookingLink: 'https://rzp.io/l/bollywoodgms'
      },
      {
        id: 'quarterly-premium',
        name: 'Quarterly Premium',
        price: 8000,
        interval: 'quarterly',
        description: 'Best value for dedicated dancers',
        features: [
          'All Basic features',
          'Mark holidays',
          '11% off workshops'
        ],
        popular: true,
        bookingLink: 'https://rzp.io/l/bollywoodgms'
      }
    ]
  },
  {
    id: 105,
    type: 'regular',
    title: 'Dance Fit',
    image: 'https://storage.googleapis.com/cityvibe/fitness.PNG?auto=format&fit=crop&w=1500&q=80',
    categories: ['Dance', 'Fitness'],
    location: 'Good Move Studios, Koramangala',
    locationUrl: 'https://g.co/kgs/BYH4hS8',
    description: 'A perfect blend of yoga, dance, and strength training, designed by our expert physiotherapist! This class boosts fitness, flexibility, and fun—all in one energizing session.',
    maxCapacity: 15,
    instagramStoryUrl: 'https://www.instagram.com/p/DA8UlH2y_Ey/',
    level: 'Beginner',
    schedule: {
      batches: [
        {
          name: "Morning Batch",
          days: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
          timeSlots: [
            { start: '7:30 AM', end: '8:30 AM' }
          ]
        }
      ],
      frequency: 'Weekly'
    },
    requirements: [
      'Comfortable clothes',
      'Water bottle'
    ],
    amenities: [
      'Changing rooms',
      'Filtered water.'
    ],
    faqs: [
      {
        question: 'What if I\'m a complete beginner?',
        answer: 'Our classes are designed for all levels.'
      }
    ],
    subscriptionPlans: [
      {
        id: 'monthly-basic',
        name: 'Monthly Basic',
        price: 3789,
        interval: 'monthly',
        description: 'Perfect for exploring interest',
        features: [
          'All Basic features',
          // 'Basic amenities access',
          // 'Online community access',
          // 'Class recordings for 24 hours'
        ],
        bookingLink: 'https://rzp.io/l/TqnrnIW'
      },
      {
        id: 'quarterly-premium',
        name: 'Quarterly Premium',
        price: 9000,
        interval: 'quarterly',
        description: 'Good value for dedicated dancers',
        features: [
          'All Basic features',
          'Mark holidays',
          '17% off workshops'
        ],
        popular: false,
        bookingLink: 'https://rzp.io/l/TqnrnIW'
      },
      {
        id: 'Six Months',
        name: 'Half Yearly Premium',
        price: 15000,
        interval: 'half yearly',
        description: 'Best value for dedicated students',
        features: [
          'All Basic features',
          'Mark holidays',
          '17% off workshops'
        ],
        popular: true,
        bookingLink: 'https://rzp.io/l/TqnrnIW'
      },
      {
        id: 'Yearly',
        name: 'Yearly Super Saver',
        price: 24000,
        interval: 'yearly',
        description: 'Best value super saver',
        features: [
          'All Basic features',
          'Mark holidays',
          '17% off workshops'
        ],
        popular: true,
        bookingLink: 'https://rzp.io/l/TqnrnIW'
      }
    ]
  },
  {
    id: 106,
    type: 'regular',
    title: 'Hula Hoop',
    image: 'https://storage.googleapis.com/cityvibe/logo.PNG?auto=format&fit=crop&w=1500&q=80',
    categories: ['Fitness', 'Others'],
    location: 'Good Move Studios, Koramangala',
    locationUrl: 'https://g.co/kgs/BYH4hS8',
    description: 'Spin, sway, and groove at our fun-filled Hula Hoop Workshop! Learn cool tricks, improve your core strength, and unleash your inner performer in this exciting, high-energy session. Let’s get hooping! \n\nStarts 8th February.',
    maxCapacity: 15,
    instagramStoryUrl: 'https://www.instagram.com/p/DEj6gdkSfVp/',
    level: 'Beginner',
    schedule: {
      batches: [
        {
          name: "Morning Batch",
          days: ['Sunday'],
          timeSlots: [
            { start: '9:30 AM', end: '11:00 AM' }
          ]
        }
      ],
      frequency: 'Weekly'
    },
    requirements: [
      'Comfortable clothes',
      'Water bottle'
    ],
    amenities: [
      'Changing rooms',
      'Filtered water.'
    ],
    faqs: [
      {
        question: 'What if I\'m a complete beginner?',
        answer: 'Our classes are designed for all levels.'
      }
    ],
    subscriptionPlans: [
      {
        id: 'Six Weeks',
        name: 'Six Weeks Premium',
        price: 4800,
        interval: 'Six Weeks',
        description: 'Best value',
        features: [
          'All Basic features',
        ],
        bookingLink: 'https://rzp.io/rzp/r3hyL2Ay'
      }
    ]
  }
];