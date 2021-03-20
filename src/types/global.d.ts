export type Json =
  | null
  | boolean
  | number
  | string
  | Json[]
  | { [prop: string]: Json };

export type Impact = "minor" | "moderate" | "serious" | "critical" | null;
