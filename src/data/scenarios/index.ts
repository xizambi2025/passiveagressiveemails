export type { Scenario } from './types';

import { coworkerScenarios } from './coworkers';
import { managerScenarios } from './managers';
import { clientScenarios } from './clients';
import { supplierScenarios } from './suppliers';
import { employeeScenarios } from './employees';
import { freelancerScenarios } from './freelancers';
import { deadlineScenarios } from './deadlines';
import { meetingScenarios } from './meetings';
import { invoiceScenarios } from './invoices';
import { corporateBuzzwordScenarios } from './corporate-buzzwords';
import { miscScenarios } from './misc';
import { extraScenarios } from './extra';
import { extra2Scenarios } from './extra2';

import type { Scenario } from './types';

export const scenarios: Scenario[] = [
  ...coworkerScenarios,
  ...managerScenarios,
  ...clientScenarios,
  ...supplierScenarios,
  ...employeeScenarios,
  ...freelancerScenarios,
  ...deadlineScenarios,
  ...meetingScenarios,
  ...invoiceScenarios,
  ...corporateBuzzwordScenarios,
  ...miscScenarios,
  ...extraScenarios,
  ...extra2Scenarios,
];

export default scenarios;
