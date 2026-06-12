export interface Tone {
  level: number;
  label: string;
  description: string;
  color: string;
  emoji: string;
}

export const tones: Tone[] = [
  {
    level: 1,
    label: 'Professional',
    description: 'Completely civil. Your HR department would approve.',
    color: 'text-green-500',
    emoji: '😊',
  },
  {
    level: 2,
    label: 'Slightly Annoyed',
    description: 'A hint of irritation wrapped in politeness. The eyebrow raise of emails.',
    color: 'text-lime-500',
    emoji: '🙂',
  },
  {
    level: 3,
    label: 'Concerned',
    description: 'You are "just checking in" but with undertones of disappointment.',
    color: 'text-yellow-500',
    emoji: '😐',
  },
  {
    level: 4,
    label: 'Passive Aggressive',
    description: 'The sweet spot. Plausible deniability meets weaponized politeness.',
    color: 'text-orange-500',
    emoji: '🙃',
  },
  {
    level: 5,
    label: 'Per My Previous Email',
    description: 'You have receipts and you are not afraid to use them.',
    color: 'text-red-500',
    emoji: '😤',
  },
  {
    level: 6,
    label: 'Corporate Assassin',
    description: 'Career-ending energy disguised as professional correspondence. Use with caution.',
    color: 'text-purple-500',
    emoji: '💀',
  },
];
