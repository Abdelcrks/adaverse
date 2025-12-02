import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
    return Response.json ({ message : "Ok reçu 5/5" })
}