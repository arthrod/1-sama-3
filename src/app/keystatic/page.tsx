import { redirect } from "next/navigation";
import KeystaticAdmin from "./keystatic";

// Server-side authentication check
function isAdmin() {
  // In development, allow access
  if (process.env.NODE_ENV === 'development') {
    return true;
  }

  // In production, you should check if the user is authenticated and authorized
  // This is where you would:
  // 1. Check for authentication session
  // 2. Verify user has admin privileges
  // 3. Possibly check for specific admin tokens or headers

  // For now, we'll check for a special admin query parameter or header
  // You should replace this with proper authentication
  return false; // Implement your auth check here
}

export default function KeystaticPage() {
  if (!isAdmin()) {
    redirect('/');
  }

  return <KeystaticAdmin />;
}