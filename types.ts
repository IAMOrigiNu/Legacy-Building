export enum Section {
  OVERVIEW = 'overview',
  TECH_STACK = 'tech_stack',
  ROADMAP = 'roadmap',
  COSTS = 'costs',
  AI_ASSISTANT = 'ai_assistant'
}

export interface RoadmapItem {
  id: number;
  phase: string;
  days: string;
  description: string;
  deliverables: string[];
  status: 'pending' | 'active' | 'completed';
}

export interface MaintenanceOption {
  name: string;
  monthlyCost: number;
  annualCost: number;
  description: string;
  roi: string;
  features: string[];
  recommended?: boolean;
  isVendorCost?: boolean;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}
