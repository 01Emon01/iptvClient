export async function getSiteSettings() {
  const res = await fetch(`${process.env.API_BASE_URL}/data/admin/siteInfo`);

  if (!res.ok) return null;
  return res.json();
}
