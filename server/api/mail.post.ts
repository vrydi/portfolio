export default defineEventHandler(async (event) => {
  const { sendMail } = useNodeMailer();

  try {
    return sendMail({
      subject: "Nuxt + nodemailer",
      text: "Hello from nuxt-nodemailer!",
      to: "vrydi.oudewaal@outlook.com",
    });
  } catch (error) {
    console.error("Error:", error);
    return {
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
});
