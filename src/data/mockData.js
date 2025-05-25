
export const navigationItems = [
  { id: 'dashboard', label: 'Dashboard', icon: 'grid', active: true },
  { id: 'history', label: 'History', icon: 'clock' },
  { id: 'calendar', label: 'Calendar', icon: 'calendar' },
  { id: 'appointments', label: 'Appointments', icon: 'users' },
  { id: 'statistics', label: 'Statistics', icon: 'bar-chart' },
];

export const healthStatus = [
  {
    id: 'heart',
    name: 'Healthy Heart',
    status: 'healthy',
    color: 'green',
    position: { top: '25%', left: '45%' }
  }
];

export const healthCards = [
  {
    id: 'lungs',
    title: 'Lungs',
    date: 'Tue, 26 Oct 2021',
    status: 'warning',
    progress: 75
  },
  {
    id: 'teeth',
    title: 'Teeth',
    date: 'Tue, 26 Oct 2021',
    status: 'healthy',
    progress: 75
  },
  {
    id: 'bone',
    title: 'Bone',
    date: 'Tue, 26 Oct 2021',
    status: 'average',
    progress: 75
  }
];

export const calendarData = {
  month: 'October 2021',
  week: 'This Week',
  days: [
    { day: 25, dayName: 'Mon', appointments: ['10:00', '11:00', '12:00'] },
    { day: 26, dayName: 'Tue', appointments: ['08:00', '09:00*', '10:00'] },
    { day: 27, dayName: 'Wed', appointments: ['12:00', '⎯', '13:00'] },
    { day: 28, dayName: 'Thu', appointments: ['10:00', '11:00*.', '⎯'] },
    { day: 29, dayName: 'Fri', appointments: ['⎯', '14:00', '16:00'] },
    { day: 30, dayName: 'Sat', appointments: ['12:00*.', '14:00', '15:00'] },
    { day: 31, dayName: 'Sun', appointments: ['09:00*.', '10:00', '11:00'] }
  ],
  currentAppointments: [
    {
      id: 1,
      type: 'Dentist',
      time: '09:00-11:00',
      doctor: 'Dr Cameron Williamson',
      color: 'blue'
    },
    {
      id: 2,
      type: 'Physiotherapy Appointment',
      time: '11:00-12:00',
      doctor: 'Dr Kevin Djoras',
      color: 'darkblue'
    }
  ]
};

export const upcomingSchedule = [
  {
    day: 'On Thursday',
    appointments: [
      {
        id: 1,
        title: 'Health checkup complete',
        time: '11:00 AM',
        icon: 'activity',
        color: 'purple'
      },
      {
        id: 2,
        title: 'Ophthalmologist',
        time: '14:00 PM',
        icon: 'eye',
        color: 'purple'
      }
    ]
  },
  {
    day: 'On Saturday',
    appointments: [
      {
        id: 3,
        title: 'Cardiologist',
        time: '12:00 AM',
        icon: 'heart',
        color: 'purple'
      },
      {
        id: 4,
        title: 'Neurologist',
        time: '16:00 PM',
        icon: 'brain',
        color: 'purple'
      }
    ]
  }
];

export const activityData = {
  title: 'Activity',
  subtitle: '3 appointments on this week',
  chartData: [
    { day: 'Mon', value: 30 },
    { day: 'Tue', value: 60 },
    { day: 'Wed', value: 45 },
    { day: 'Thu', value: 80 },
    { day: 'Fri', value: 55 },
    { day: 'Sat', value: 75 },
    { day: 'Sun', value: 40 }
  ]
};
