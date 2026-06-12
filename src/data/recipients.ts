export interface Recipient {
  id: string;
  label: string;
  description: string;
  icon: string;
}

export const recipients: Recipient[] = [
  {
    id: 'manager',
    label: 'Manager',
    description: 'The person who schedules meetings about meetings and calls everything "urgent"',
    icon: '👔',
  },
  {
    id: 'client',
    label: 'Client',
    description: 'The one who wants champagne results on a tap water budget',
    icon: '💼',
  },
  {
    id: 'supplier',
    label: 'Supplier',
    description: 'The entity that treats delivery dates as creative fiction',
    icon: '📦',
  },
  {
    id: 'coworker',
    label: 'Coworker',
    description: 'The colleague who reply-alls to say "thanks" and steals your lunch',
    icon: '🧑‍💻',
  },
  {
    id: 'employee',
    label: 'Employee',
    description: 'The team member who interprets deadlines as gentle suggestions',
    icon: '📋',
  },
  {
    id: 'freelancer',
    label: 'Freelancer',
    description: 'The contractor who vanishes like a magician mid-project',
    icon: '🎨',
  },
];
