export default defineEventHandler(async () => {
  const { sendMail } = useNodeMailer();

  try {
    sendMail({
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
