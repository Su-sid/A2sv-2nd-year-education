// redux/services/jobsApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiResponse, ApiJobOpportunity } from '@/lib/apiTypes';

interface SearchParams {
  query?: string;
  page?: number;
  limit?: number;
  [key: string]: string | number | undefined;
}

interface ErrorResponse {
  status: number;
  data: {
    message: string;
    [key: string]: unknown;
  };
}

export const jobsApi = createApi({
  reducerPath: 'jobsApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://akil-backend.onrender.com/' 
  }),
  tagTypes: ['Opportunity'],
  endpoints: (builder) => ({
    // Get all opportunities
    getOpportunities: builder.query<ApiResponse<ApiJobOpportunity[]>, SearchParams | undefined>({
      query: (params = {}) => ({
        url: 'opportunities/search',
        params, // Pass any query parameters here
      }),
      // Transform the response if needed
      transformResponse: (response: ApiResponse<ApiJobOpportunity[]>) => {
        // Check if the API response is successful
        if (!response.success) {
          throw new Error(response.message || 'Failed to fetch opportunities');
        }
        return response;
      },
      // Handle errors
      transformErrorResponse: (response: ErrorResponse) => {
        return response.data || { message: 'An unknown error occurred' };
      },
      providesTags: ['Opportunity'],
    }),
    
    // Get opportunity by ID
    getOpportunityById: builder.query<ApiJobOpportunity, string>({
      query: (id) => `opportunities/${id}`,
      
      // Transform the response to get just the data
      transformResponse: (response: ApiResponse<ApiJobOpportunity>) => {
        
        // Check if the API response is successful
        if (!response.success) {
          throw new Error(response.message || 'Failed to fetch opportunity');
        }
        return response.data;
      },
      
      // Handle errors
      transformErrorResponse: (response: ErrorResponse) => {
        return response.data || { message: 'An unknown error occurred' };
      },
      providesTags: (result, error, id) => [{ type: 'Opportunity', id }],
    }),
  }),
});

// Export hooks for usage in components
export const { useGetOpportunitiesQuery, useGetOpportunityByIdQuery } = jobsApi;