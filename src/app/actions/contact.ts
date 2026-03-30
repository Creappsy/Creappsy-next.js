"use server";

import { contactService, type ContactFormData } from "../services/api";
import { z } from "zod";

const contactSchema = z.object({
  fullName: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

export type ContactState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function submitContact(
  prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const rawData: ContactFormData = {
    fullName: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: (formData.get("phone") as string) || undefined,
    company: (formData.get("company") as string) || undefined,
    service: (formData.get("service") as string) || undefined,
    message: formData.get("message") as string,
  };

  const validated = contactSchema.safeParse(rawData);

  if (!validated.success) {
    const errors: Record<string, string[]> = {};
    validated.error.errors.forEach((err) => {
      const field = err.path[0] as string;
      if (!errors[field]) {
        errors[field] = [];
      }
      errors[field].push(err.message);
    });

    return {
      success: false,
      message: "Por favor corrige los errores",
      errors,
    };
  }

  try {
    const result = await contactService.submit(validated.data);

    if (result.success) {
      return {
        success: true,
        message: "¡Mensaje enviado con éxito! Te contactaremos pronto.",
      };
    }

    return {
      success: false,
      message: result.message || "Error al enviar el mensaje",
    };
  } catch (error) {
    console.error("Contact form error:", error);
    return {
      success: false,
      message: "Error de conexión. Por favor intenta de nuevo.",
    };
  }
}
