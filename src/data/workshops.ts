import type { Workshop } from '../types/events';

export const workshops: Workshop[] = [
  {
    id: 1,
    type: 'workshop',
    title: 'Mohe Rang Do By Soham Deb',
    image: 'https://storage.googleapis.com/cityvibe/SohamDeb.jpeg?auto=format&fit=crop&w=600&q=80',
    date: 'Jan 19',
    time: '12:00PM - 2:00PM',
    location: 'Good Move Studio',
    locationUrl: 'https://g.co/kgs/BYH4hS8',
    locationDescription: 'Located on 80 Feet Road, Koramangala, opposite Pasta Street, in the same building as RBL Bank, on the 3rd floor.',
    instagramStoryUrl: 'https://www.instagram.com/p/DEhVZ3WyiMX',
    categories: ['Workshops'],
    featured: true,
    description: 'Such beautiful expressions such Bhav !! Master the art of expressions/bhav rasa and a beautiful kathak based choreo. If I were you I’d jump on to join this workshop in a blink .So what are you waiting for? Register Now‼️',
    price: '₹850',
    studioGuidelines: [
      'Outdoor shoes are not allowed. Carry a clean pair of shoes.',
      'Arrive 10 minutes before the scheduled start time',
      'Carry a water bottle with you.'
    ],
    faqs: [
      {
        question: 'Do I need prior dance experience?',
        answer: 'No prior experience needed.'
      },
      {
        question: 'What should I wear?',
        answer: 'Wear comfortable clothing.'
      }
    ],
    // instructor: 'Michael Chen',
    // contact: 'michael@creativestudio.com',
    ticketCategories: [
      {
        id: 'regular',
        name: 'Regular',
        price: 850,
        description: 'Standard admission ticket',
        enabled: true,
        bookingLink: 'https://pages.razorpay.com/pl_PcvMlqbxLASydF/view'
      }
    ]
  },
  {
    id: 2,
    type: 'workshop',
    title: 'Bhangra Dance Workshop',
    image: 'https://storage.googleapis.com/cityvibe/IMG_8633.PNG?auto=format&fit=crop&w=600&q=80',
    date: 'Jan 12',
    time: '2:00PM - 4:00PM',
    location: 'Good Move Studio',
    locationUrl: 'https://g.co/kgs/BYH4hS8',
    locationDescription: 'Located on 80 Feet Road, Koramangala, opposite Pasta Street, in the same building as RBL Bank, on the 3rd floor.',
    instagramStoryUrl: 'https://www.instagram.com/p/DEe1nIvywJ-/',
    categories: ['Workshops'],
    featured: true,
    description: 'Learn the high-energy traditional dance form of Bhangra! Perfect for beginners and dance enthusiasts, this workshop will get your heart pumping and feet moving.',
    price: '₹499',
    faqs: [
      {
        question: 'Do I need prior dance experience?',
        answer: 'No prior experience needed.'
      },
      {
        question: 'What should I wear?',
        answer: 'Wear comfortable clothing.'
      }
    ],
    studioGuidelines: [
      'Outdoor shoes are not allowed. Carry a clean pair of shoes.',
      'Arrive 10 minutes before the scheduled start time',
      'Carry a water bottle with you.'
    ],
    ticketCategories: [
      {
        id: 'regular',
        name: 'Regular',
        price: 600,
        description: 'Standard admission ticket',
        enabled: true,
        bookingLink: 'https://ticketing.example.com/summer-fest/regular'
      }
    ]
  },
  {
    id: 3,
    type: 'workshop',
    title: 'Sahiba Silhouette Workshop',
    image: 'https://storage.googleapis.com/cityvibe/Silhouette.PNG?auto=format&fit=crop&w=600&q=80',
    date: 'Starts Jan 18',
    time: '7:30PM - 9:00PM',
    location: 'Danzelle Dance Studio',
    locationUrl: 'https://g.co/kgs/6gMdR3t',
    locationDescription: '7, 2nd Floor, Kothnur Main Rd, RBI Layout, JP Nagar 7th Phase',
    instagramStoryUrl: 'https://www.instagram.com/p/DEJkxCtSt87/',
    categories: ['Workshops'],
    featured: true,
    description: 'Silhouette program\nThis is actually a 4 session program (last session will be of 2 hours for individual shoot)\nWhat to expect:-\n1)Basics of classical dance. Mudras ,steps will be taught so you can recreate on any song.\n2) Entire Choreo.\n3) Individual Shoot',
    price: '₹2600',
    faqs: [
      {
        question: 'Is it a multiple day workshop?',
        answer: 'Yes, it spans across 2 weekends i.e 4 classes.'
      },
      {
        question: 'Do I need prior dance experience?',
        answer: 'No prior experience needed.'
      },
      {
        question: 'What should I wear?',
        answer: 'Wear ethnic.'
      },
      {
        question: 'Does the program includes private shoot?',
        answer: 'Yes'
      }
    ],
    studioGuidelines: [
      'Outdoor shoes are not allowed. Carry a clean pair of shoes.',
      'Arrive 10 minutes before the scheduled start time',
      'Carry a water bottle with you.'
    ],
    ticketCategories: [
      {
        id: 'early-bird',
        name: 'Early Bird',
        price: 2200,
        description: 'Limited early bird tickets at a special price',
        enabled: true,
        bookingLink: 'https://rzp.io/rzp/ZH2l1El'
      },
      {
        id: 'regular',
        name: 'Regular',
        price: 2600,
        description: 'Standard admission ticket',
        enabled: true,
        bookingLink: 'https://rzp.io/rzp/ZH2l1El'
      }
    ]
  },
  {
    id: 4,
    type: 'workshop',
    title: 'Art & Wine Evening',
    image: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=600&q=80',
    date: 'Aug 18',
    time: '7:00 PM',
    location: 'Downtown Gallery',
    categories: ['Kids', 'Art & Craft'],
    description: 'Experience an evening of fine art and wine tasting in our beautiful downtown gallery.',
    price: '₹499',
    schedule: [
      { time: '7:00 PM', activity: 'Welcome Reception' },
      { time: '7:30 PM', activity: 'Art Tour Begins' },
      { time: '8:30 PM', activity: 'Wine Tasting' },
      { time: '9:30 PM', activity: 'Artist Meet & Greet' }
    ],
    // organizer: {
    //   name: 'Downtown Gallery',
    //   email: 'events@downtowngallery.com',
    //   phone: '(555) 234-5678'
    // },
    ticketCategories: [
      {
        id: 'early-bird',
        name: 'Early Bird',
        price: 39.99,
        description: 'Limited early bird tickets at a special price',
        enabled: true,
        endDate: '2024-07-15'
      },
      {
        id: 'regular',
        name: 'Regular',
        price: 49.99,
        description: 'Standard admission ticket',
        enabled: true
      },
      {
        id: 'vip',
        name: 'VIP Access',
        price: 99.99,
        description: 'VIP treatment with exclusive backstage access',
        enabled: true
      }
    ]
  },
  {
    id: 4,
    type: 'workshop',
    title: 'Paiya Dei by Bharath',
    image: 'https://storage.googleapis.com/cityvibe/IMG_8640.PNG?auto=format&fit=crop&w=600&q=80',
    date: 'Aug 25',
    time: '6:30 PM',
    location: 'Good Move Studio',
    categories: ['Kids', 'Workshops'],
    // featured: true,
    description: 'Join us for a vibrant dance session inspired by the energetic beats of "Paiya Dei"! Open to all levels, this workshop blends expressive choreography, rhythmic footwork, and cultural insights.',
    price: '₹499',
    instructor: 'Bharath',
    schedule: [
      { time: '6:30 PM', activity: 'Warm-up' },
      { time: '7:00 PM', activity: 'Basic Steps' },
      { time: '8:00 PM', activity: 'Choreography' },
      { time: '8:45 PM', activity: 'Cool-down' }
    ],
    // faqs: [
    //   {
    //     question: 'Do I need prior dance experience?',
    //     answer: 'No prior experience needed! This workshop is suitable for all levels.'
    //   },
    //   {
    //     question: 'What should I wear?',
    //     answer: 'Comfortable workout clothes and athletic shoes.'
    //   }
    // ],
    ticketCategories: [
      {
        id: 'early-bird',
        name: 'Early Bird',
        price: 39.99,
        description: 'Limited early bird tickets at a special price',
        enabled: true,
        endDate: '2024-07-15'
      },
      {
        id: 'regular',
        name: 'Regular',
        price: 49.99,
        description: 'Standard admission ticket',
        enabled: true
      }
    ]
  },
  {
    id: 6,
    type: 'workshop',
    title: 'Semiclassical',
    image: 'https://storage.googleapis.com/cityvibe/IMG_9661.PNG?auto=format&fit=crop&w=600&q=80',
    date: 'Aug 27',
    time: '9:00 AM',
    location: 'Good Move Studios',
    categories: ['Kids', 'Workshops'],
    description: 'Explore urban photography techniques while walking through the city.',
    price: '₹499',
    instructor: 'Sarah Williams',
    // contact: 'sarah@photowalks.com',
    ticketCategories: [
      {
        id: 'early-bird',
        name: 'Early Bird',
        price: 39.99,
        description: 'Limited early bird tickets at a special price',
        enabled: true,
        endDate: '2024-07-15'
      },
      {
        id: 'regular',
        name: 'Regular',
        price: 49.99,
        description: 'Standard admission ticket',
        enabled: true
      }
    ]
  },
    // ... rest of the events remain the same
];

// export const getEventById = (id: number): Event | undefined => {
//   return events.find(event => event.id === id);
// };
