
// User Types
export type UserType = 'agent' | 'b2b' | 'b2c' | 'admin';

//defined user
export interface User {
  id: string;
  email: string;
  phone: string;
  name: string;
  userType: UserType;
  status: 'pending' | 'approved' | 'rejected'; // Add status field
}