const PROJECT_SLUG = "mithila-folk-fusion";

const API_BASE = (() => {
  const stored = typeof window !== "undefined" ? localStorage.getItem("mf_api_base") : null;
  if (stored) return stored + "/api";
  return "https://chiti-console.vercel.app/api";
})();

export function sanitize(str: string): string {
  return str.replace(/<[^>]*>/g, "").replace(/javascript:/gi, "").replace(/data:/gi, "").trim();
}

export async function submitLead(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
  artworkTitle?: string;
  source?: string;
}): Promise<{ id: string }> {
  const message = data.artworkTitle
    ? `Subject: ${data.subject}\nArtwork: ${data.artworkTitle}\n\n${data.message}`
    : `Subject: ${data.subject}\n\n${data.message}`;

  const response = await fetch(`${API_BASE}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: sanitize(data.name),
      email: sanitize(data.email),
      message: sanitize(message),
      projectSlug: PROJECT_SLUG,
      company: data.source || "website",
    }),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({ error: "Request failed" }));
    throw new Error(err.error || `HTTP ${response.status}`);
  }

  const result = await response.json();
  return { id: result.data?.id || "unknown" };
}

export function getEmailUrl(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
  artworkTitle?: string;
}): string {
  const subjectLine = `Mithila Folk Fusions - ${sanitize(data.subject)}`;
  const body = [
    `Name: ${sanitize(data.name)}`,
    `Email: ${sanitize(data.email)}`,
    `Subject: ${sanitize(data.subject)}`,
    ...(data.artworkTitle ? [`Artwork: ${data.artworkTitle}`] : []),
    "",
    sanitize(data.message),
    "",
    "---",
    "Sent from Mithila Folk Fusions",
  ].join("\n");

  return (
    "https://mail.google.com/mail/u/0/?tf=cm" +
    "&to=" + encodeURIComponent("Mithilafolkfusions@gmail.com") +
    "&su=" + encodeURIComponent(subjectLine) +
    "&body=" + encodeURIComponent(body)
  );
}
