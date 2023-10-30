export interface UserProfile {
  id: number;
  name: string;
  email: string;
  bio: string;
}

export interface APIResponse<T> {
  data: T;
  message: string;
  status: "success" | "error";
}
