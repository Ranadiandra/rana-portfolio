import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try{
        const data = await req.json()
        console.log("Form received successfully: ", data)

        return NextResponse.json(
            { message: "Form received successfully" },
            { status: 200}
        )
    }catch(error){
        return NextResponse.json(
            { message: "Error processing request" },
            { status: 500 }              
        )
    }
}