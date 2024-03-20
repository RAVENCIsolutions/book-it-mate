"use server";

const CreateContact = async (prevState: any, formData: FormData) => {
  const newContact = formData.get("email");

  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": process.env.NEXT_PUBLIC_BREVO_API,
    },
    body: JSON.stringify({
      updateEnabled: false,
      email: newContact,
    }),
  };

  try {
    await fetch("https://api.brevo.com/v3/contacts", options);
    return {
      message: "Contact Added",
    };
  } catch (error) {
    return {
      message: error.message,
    };
  }
};

export { CreateContact };
