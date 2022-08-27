import { nanoid } from 'nanoid';

export type Result = {
  id: string;
  title: string;
  summary: string;
  value: number;
  normalRange: [number, number];
  isNormal: boolean;
};

export const resultsList: Result[] = [
  {
    id: nanoid(),
    title: 'Hemoglobin',
    summary: 'Your hemoglobin value is worst from last result.',
    value: 17,
    normalRange: [14, 17],
    isNormal: false,
  },
  {
    id: nanoid(),
    title: 'WBC',
    summary: 'Your white blood cell count has increased from last results.',
    value: 11_000,
    normalRange: [14, 17],
    isNormal: true,
  },
  {
    id: nanoid(),
    title: 'WBC',
    summary: 'Your white blood cell count has increased from last results.',
    value: 11_000,
    normalRange: [14, 17],
    isNormal: true,
  },
  {
    id: nanoid(),
    title: 'WBC',
    summary: 'Your white blood cell count has increased from last results.',
    value: 11_000,
    normalRange: [14, 17],
    isNormal: true,
  },
];
