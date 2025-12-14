export interface NeedItem {
  id: string;
  name: string;
  category?: string;
  quantity?: number;
}

/**
 * Fetch needs list from backoffice.
 * Ensure REACT_APP_API_URL is set in .env (ex: https://api.example.com)
 */
export async function fetchNeeds(listId?: string): Promise<NeedItem[]> {
  const base = process.env.REACT_APP_API_URL ?? "";
  const url = `${base.replace(/\/$/, "")}/needs${listId ? `?list=${encodeURIComponent(listId)}` : ""}`;
  const res = await fetch(url, { credentials: "include" });
  if (!res.ok) throw new Error(`Failed to fetch needs (${res.status})`);
  return (await res.json()) as NeedItem[];
}