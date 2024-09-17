import { NextResponse } from "next/server";
import mockProducts from "@/mockData/mockProducts.json";

export async function GET() {
    return NextResponse.json(mockProducts);
}