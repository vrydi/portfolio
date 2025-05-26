export default defineEventHandler(async (event) => {
  const { sendMail } = useNodeMailer();

  const body = await readBody(event);

  const message = `
    Name: ${body.name}
    Company: ${body.company}
    Email: ${body.email}
    Phone: ${body.phone}
    Message: ${body.request}
  `;

  return sendMail({
    subject: "Nuxt + nodemailer",
    text: "Hello from nuxt-nodemailer!",
    to: "vrydi.oudewaal@outlook.com",
  });
});
