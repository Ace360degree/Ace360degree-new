export const STRATEGY_CALL_OPEN_EVENT = "ace360:open-strategy-call" as const;

export function openStrategyCall() {
  if (typeof window === "undefined") return;

  window.dispatchEvent(new CustomEvent(STRATEGY_CALL_OPEN_EVENT));
}

export async function submitEnquiry(data: {
  name: string;
  email: string;
  phone: string;
  service: string;
  country: string;
  message: string;
  source: string;
}) {
  const response = await fetch(
    "https://api.ace360degree.com/enquiry.php",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result?.message || "Failed to submit enquiry");
  }

  return result;
}