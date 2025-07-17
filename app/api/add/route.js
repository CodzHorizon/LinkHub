import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {
    const body = await request.json();

    const client = await clientPromise;
    const db = client.db("linkit");
    const collection = db.collection("links");

    // ✅ Check if username already exists
    const existing = await collection.findOne({ username: body.username });

    if (existing) {
      return Response.json(
        {
          success: false,
          message: "Username already taken",
          error: true,
        },
        { status: 400 }
      );
    }

    // ✅ Insert new document only if username is available
    const result = await collection.insertOne(body);

    return Response.json({
      success: true,
      message: "Your LinkIt Page is generated successfully",
      error: false,
      result,
    });
  } catch (error) {
    console.error("Error inserting link:", error);
    return Response.json(
      {
        success: false,
        message: "Failed to create link. Try again later.",
        error: true,
        details: error.message,
      },
      { status: 500 }
    );
  }
}
