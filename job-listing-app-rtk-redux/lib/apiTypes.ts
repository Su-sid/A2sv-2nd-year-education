// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  errors: null | any;
  count: number;
}

// Payment Option Type
export interface PaymentOption {
  currency: string;
  paymentType: string;
}

// API Job Opportunity Type
export interface ApiJobOpportunity {
  id: string;
  title: string;
  description: string;
  responsibilities: string;
  requirements: string;
  idealCandidate: string;
  categories: string[];
  opType: string;
  startDate: string;
  endDate: string;
  deadline: string;
  location: string[];
  requiredSkills: string[];
  whenAndWhere: string;
  createdBy: string;
  orgID: string;
  datePosted: string;
  status: string;
  applicantsCount: number;
  viewsCount: number;
  orgName: string;
  logoUrl: string;
  isBookmarked: boolean;
  isRolling: boolean;
  questions: null | any;
  perksAndBenefits: null | string | any;
  createdAt: string;
  updatedAt: string;
  orgPrimaryPhone: string;
  orgEmail: string;
  isPaid: boolean;
  average_rating: number;
  total_reviews: number;
  engagementType: string;
  paymentOption: PaymentOption;
}

