type ID = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'

export interface State {
  id: string;
  file: File | null;
  timestamp: Date | null;
}

export const state: Record<ID, State> = {
  '1': {
    id: '1',
    file: null,
    timestamp: null,
  },
  '2': {
    id: '2',
    file: null,
    timestamp: null,
  },
  '3': {
    id: '3',
    file: null,
    timestamp: null,
  },
  '4': {
    id: '4',
    file: null,
    timestamp: null,
  },
  '5': {
    id: '5',
    file: null,
    timestamp: null,
  },
  '6': {
    id: '6',
    file: null,
    timestamp: null,
  },
  '7': {
    id: '7',
    file: null,
    timestamp: null,
  },
  '8': {
    id: '8',
    file: null,
    timestamp: null,
  },
  '9': {
    id: '9',
    file: null,
    timestamp: null,
  },
}