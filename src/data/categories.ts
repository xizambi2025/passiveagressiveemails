export interface Category {
  id: string;
  label: string;
  description: string;
  emoji: string;
  scenarioCount: number;
}

export const categories: Category[] = [
  {
    id: 'clients',
    label: 'Clients',
    description: 'For when "the customer is always right" meets "the customer is delusional"',
    emoji: '🤝',
    scenarioCount: 28,
  },
  {
    id: 'coworkers',
    label: 'Coworkers',
    description: 'Navigating office politics without catching a case',
    emoji: '👥',
    scenarioCount: 32,
  },
  {
    id: 'managers',
    label: 'Managers',
    description: 'Responding to people who think "synergy" is an action item',
    emoji: '📊',
    scenarioCount: 30,
  },
  {
    id: 'suppliers',
    label: 'Suppliers',
    description: 'When "shipping soon" means "we haven\'t started yet"',
    emoji: '🚚',
    scenarioCount: 22,
  },
  {
    id: 'meetings',
    label: 'Meetings',
    description: 'Emails about meetings that should have been emails',
    emoji: '📅',
    scenarioCount: 25,
  },
  {
    id: 'deadlines',
    label: 'Deadlines',
    description: 'Gentle reminders that time is, in fact, linear',
    emoji: '⏰',
    scenarioCount: 26,
  },
  {
    id: 'invoices',
    label: 'Invoices',
    description: 'Creative ways to ask "where is my money"',
    emoji: '💰',
    scenarioCount: 20,
  },
  {
    id: 'corporate-buzzwords',
    label: 'Corporate Buzzwords',
    description: 'Weaponizing the very jargon they use against you',
    emoji: '🏢',
    scenarioCount: 22,
  },
];
