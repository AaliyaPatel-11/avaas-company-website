import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, topic, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // Server-side logging for incoming inquiries
    console.log("[AVAAS Contact Form Submission]", {
      timestamp: new Date().toISOString(),
      name,
      email,
      topic: topic || "General Inquiry",
      message,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been received successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[AVAAS Contact Error]", error);
    return NextResponse.json(
      { success: false, error: "Failed to process inquiry. Please try again." },
      { status: 500 }
    );
  }
}
