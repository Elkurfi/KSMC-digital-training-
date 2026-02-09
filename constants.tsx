
import React from 'react';
import { Calendar, Clock, MapPin, Phone, Laptop, Users, Target } from 'lucide-react';

export const COLORS = {
  primary: 'text-green-700',
  primaryBg: 'bg-green-700',
  secondary: 'text-orange-500',
  secondaryBg: 'bg-orange-500',
  accent: 'text-white',
};

export const CONTACT_NUMBERS = [
  { display: '0809 585 9463', wa: '2348095859463' },
  { display: '0701 289 7133', wa: '2347012897133' },
  { display: '0803 856 8785', wa: '2348038568785' },
];

export const PARTNERS = [
  { name: 'KSMC' },
  { name: 'The Asisx' },
  { name: 'FMA' },
  { name: 'Attention Company' },
  { name: 'Kaduna State Government' }
];

export const FEATURES = [
  {
    title: 'Practical Skills',
    description: 'Hands-on training focused on content creation, digital marketing, and modern tools.',
    icon: <Laptop className="w-8 h-8 text-green-700" />,
  },
  {
    title: 'Community Impact',
    description: 'Empowering the next generation of digital leaders in Kaduna and beyond.',
    icon: <Users className="w-8 h-8 text-green-700" />,
  },
  {
    title: 'Career Growth',
    description: 'Helping youths create, earn, and inspire through sustainable digital careers.',
    icon: <Target className="w-8 h-8 text-green-700" />,
  },
];

export const TRAINING_INFO = [
  { label: 'Date', value: '7th – 14th February 2026', icon: <Calendar className="w-5 h-5" /> },
  { label: 'Time', value: '9:00 AM – 4:00 PM (Mon–Sat)', icon: <Clock className="w-5 h-5" /> },
  { label: 'Location', value: 'Kaduna, Nigeria', icon: <MapPin className="w-5 h-5" /> },
];

export const GALLERY_IMAGES = [
  { id: '1', url: 'https://picsum.photos/id/1/600/400', caption: 'Focused learning sessions' },
  { id: '2', url: 'https://picsum.photos/id/2/600/400', caption: 'Interactive workshop' },
  { id: '3', url: 'https://picsum.photos/id/3/600/400', caption: 'Group project collaboration' },
  { id: '4', url: 'https://picsum.photos/id/4/600/400', caption: 'Registration day highlights' },
  { id: '5', url: 'https://picsum.photos/id/5/600/400', caption: 'Networking with peers' },
  { id: '6', url: 'https://picsum.photos/id/6/600/400', caption: 'Digital skills in action' },
];

export const HOSTS = [
  {
    id: 'h1',
    name: 'Lead Coordinator',
    title: 'Program Leadership',
    imageUrl: 'https://picsum.photos/id/1005/800/1200',
    description: 'Overseeing the strategic direction and community engagement of the KSMC Digital Training Program.'
  },
  {
    id: 'h2',
    name: 'Facilitation Team',
    title: 'Technical Experts',
    imageUrl: 'https://picsum.photos/id/1012/1200/800',
    description: 'Our lead facilitators ensuring quality education and hands-on digital skills transfer to every participant.'
  }
];
