export async function POST(req) {
  try {
    const body = await req.formData();
    const formData = new FormData();

    
    for (const [key, value] of body.entries()) {
      formData.append(key, value);
    }

    // Add API key from env
    formData.append("access_key", process.env.WEB3FORMS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, message: "Server error" }), { status: 500 });
  }
}
