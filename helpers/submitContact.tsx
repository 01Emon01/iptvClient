"use server";

export default async function submitContact(formData: FormData) {
  const payload = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  try {
    await fetch(`${process.env.API_BASE_URL}/data/admin/contacts/upload`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });
    return { success: true };
  } catch (err) {
    console.error("Server Action Error:", err);
    return { success: false };
  }
}
