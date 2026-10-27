// Forwards GraphQL queries to the indexer, which stays on the private network.

const INDEXER_URL = process.env.INDEXER_URL ?? "http://localhost:42069";

export async function POST(request: Request): Promise<Response> {
  const body = await request.text();
  if (body.length > 10_000) return new Response("Query too large", { status: 413 });
  try {
    const upstream = await fetch(`${INDEXER_URL}/graphql`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body,
      cache: "no-store",
    });
    return new Response(upstream.body, {
      status: upstream.status,
      headers: { "content-type": "application/json" },
    });
  } catch {
    return Response.json({ errors: [{ message: "Indexer unavailable" }] }, { status: 502 });
  }
}
