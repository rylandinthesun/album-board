import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://gmulraunyjsxlnbrpvje.supabase.co"
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdtdWxyYXVueWpzeGxuYnJwdmplIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIwMjUyMjgsImV4cCI6MTk2NzYwMTIyOH0.3oU0jHFOntl3rhO9K9ufEaQVsqWd7jgJFnCqQE-Mc-w"

export const supabase = createClient(supabaseUrl, supabaseKey)
