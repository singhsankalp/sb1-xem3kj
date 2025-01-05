import type { Workshop } from '../types/events';

export const workshops: Workshop[] = [
  {
    id: 1,
    type: 'workshop',
    title: 'Summer Music Festival',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80',
    date: 'Aug 15',
    time: '4:00 PM',
    location: 'Central Park',
    categories: ['Kids', 'Workshops'],
    attendees: 234,
    description: 'Join us for an unforgettable evening of live music under the stars at Central Park\'s iconic amphitheater.',
    price: '$49.99',
    schedule: [
      { time: '4:00 PM', activity: 'Gates Open' },
      { time: '5:00 PM', activity: 'Opening Act: The Melodics' },
      { time: '6:30 PM', activity: 'Main Performance: Stellar Dreams' },
      { time: '8:00 PM', activity: 'Headliner: Electric Pulse' },
      { time: '10:30 PM', activity: 'Closing Ceremony' }
    ],
    ticketCategories: [
      {
        id: 'early-bird',
        name: 'Early Bird',
        price: 39.99,
        description: 'Limited early bird tickets at a special price',
        available: 0,
        total: 100,
        enabled: true,
        endDate: '2024-07-15'
      },
      {
        id: 'regular',
        name: 'Regular',
        price: 49.99,
        description: 'Standard admission ticket',
        available: 150,
        total: 400,
        enabled: true
      },
      {
        id: 'vip',
        name: 'VIP Access',
        price: 99.99,
        description: 'VIP treatment with exclusive backstage access',
        available: 25,
        total: 50,
        enabled: true
      }
    ]
  },
  {
    id: 2,
    type: 'workshop',
    title: 'Art & Wine Evening',
    image: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=600&q=80',
    date: 'Aug 18',
    time: '7:00 PM',
    location: 'Downtown Gallery',
    categories: ['Kids', 'Art & Craft'],
    attendees: 89,
    description: 'Experience an evening of fine art and wine tasting in our beautiful downtown gallery.',
    price: '$75',
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
        available: 0,
        total: 100,
        enabled: true,
        endDate: '2024-07-15'
      },
      {
        id: 'regular',
        name: 'Regular',
        price: 49.99,
        description: 'Standard admission ticket',
        available: 150,
        total: 400,
        enabled: true
      },
      {
        id: 'vip',
        name: 'VIP Access',
        price: 99.99,
        description: 'VIP treatment with exclusive backstage access',
        available: 25,
        total: 50,
        enabled: true
      }
    ]
  },
  {
    id: 3,
    type: 'workshop',
    title: 'Paiya Dei by Bharath',
    image: 'https://storage.googleapis.com/cityvibe/IMG_8640.PNG?auto=format&fit=crop&w=600&q=80',
    date: 'Aug 25',
    time: '6:30 PM',
    location: 'Good Move Studio',
    categories: ['Kids', 'Workshops'],
    attendees: 22,
    description: 'Join us for a vibrant dance session inspired by the energetic beats of "Paiya Dei"! Open to all levels, this workshop blends expressive choreography, rhythmic footwork, and cultural insights.',
    price: '$35',
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
        available: 10,
        total: 100,
        enabled: true,
        endDate: '2024-07-15'
      },
      {
        id: 'regular',
        name: 'Regular',
        price: 49.99,
        description: 'Standard admission ticket',
        available: 150,
        total: 400,
        enabled: true
      }
    ]
  },
  {
    id: 4,
    type: 'workshop',
    title: 'Photography Workshop',
    image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=600&q=80',
    date: 'Aug 22',
    time: '10:00 AM',
    location: 'Creative Studio',
    categories: ['Fitness', 'Workshops'],
    attendees: 45,
    description: 'Learn professional photography techniques in this hands-on workshop.',
    price: '$199',
    instructor: 'Michael Chen',
    contact: 'michael@creativestudio.com',
    ticketCategories: [
      {
        id: 'regular',
        name: 'Regular',
        price: 49.99,
        description: 'Standard admission ticket',
        available: 150,
        total: 400,
        enabled: true
      }
    ]
  },
  {
    id: 5,
    type: 'workshop',
    title: 'Bhangra Dance Workshop',
    image: 'https://storage.googleapis.com/cityvibe/IMG_8633.PNG?auto=format&fit=crop&w=600&q=80',
    date: 'Aug 25',
    time: '6:30 PM',
    location: 'Dance Studio',
    categories: ['Kids', 'Workshops'],
    attendees: 123,
    description: 'Learn the high-energy traditional dance form of Bhangra! Perfect for beginners and dance enthusiasts, this workshop will get your heart pumping and feet moving.',
    price: '$35',
    instructor: 'Priya Singh',
    // contact: 'priya@dancestudio.com',
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
        available: 10,
        total: 100,
        enabled: true,
        endDate: '2024-07-15'
      },
      {
        id: 'regular',
        name: 'Regular',
        price: 49.99,
        description: 'Standard admission ticket',
        available: 150,
        total: 400,
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
    attendees: 20,
    description: 'Explore urban photography techniques while walking through the city.',
    price: '$45',
    instructor: 'Sarah Williams',
    contact: 'sarah@photowalks.com',
    ticketCategories: [
      {
        id: 'early-bird',
        name: 'Early Bird',
        price: 39.99,
        description: 'Limited early bird tickets at a special price',
        available: 0,
        total: 100,
        enabled: true,
        endDate: '2024-07-15'
      },
      {
        id: 'regular',
        name: 'Regular',
        price: 49.99,
        description: 'Standard admission ticket',
        available: 150,
        total: 400,
        enabled: true
      }
    ]
  },
    // ... rest of the events remain the same
];

// export const getEventById = (id: number): Event | undefined => {
//   return events.find(event => event.id === id);
// };