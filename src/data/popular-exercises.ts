export interface Exercise {
  id: number;
  time: string;
  title: string;
  description: string;
  image: string;
}

export const popularExercises: Exercise[] = [
  {
    id: 1,
    time: '58:24',
    title: 'Treadmill',
    description: '250 est calories ',
    image: '/cards/image 4.png',
  },
  {
    id: 2,
    time: '58:24',
    title: 'Stretching',
    description: '250 est calories ',
    image: '/cards/image 7.png',
  },
  {
    id: 3,
    time: '58:24',
    title: 'Yoga',
    description: '250 est calories ',
    image: '/cards/image 2.png',
  },
  {
    id: 4,
    time: '58:24',
    title: 'Running',
    description: '250 est calories ',
    image: '/cards/image 12.png',
  },
  {
    id: 5,
    time: '58:24',
    title: 'Lifting',
    description: '250 est calories ',
    image: '/cards/image 6.png',
  },
  {
    id: 6,
    time: '58:24',
    title: 'PushUp',
    description: '250 est calories ',
    image: '/cards/image 3.png',
  },
]
