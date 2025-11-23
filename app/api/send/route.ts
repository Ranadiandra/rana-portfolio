import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request){
    try{
        const{ name, email, message} = await req.json();

        const data = await resend.emails.send({
            from: "rana <onboarding@resend.dev>",
            to: ["ranadiandra.0603@gmail.com"],
            subject: "New Message from rana-portofolio",
            html:
            `<div>
            <h2>New Message</h2>
            <p><strong>Name:</strong>${name}</p>
            <p><strong>Email:</strong>${email}</p>
            <p><strong>Message:</strong>${message}</p>
            </div>`,
        });
        return Response.json({ success: true, data });
    }catch(error: any){
        return Response.json({ success: false, error });
    }
}