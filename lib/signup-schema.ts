import { z } from "zod";

export const signupSchema = z.object({
  childName: z.string().min(1, "Vul de naam van je kind in"),
  childAge: z.number().min(5, "Minimaal 5 jaar").max(12, "Maximaal 12 jaar"),
  childSchoolGroup: z.string().optional(),
  parentName: z.string().min(1, "Vul je naam in"),
  parentEmail: z.string().email("Vul een geldig e-mailadres in"),
  parentPhone: z.string().min(6, "Vul een telefoonnummer in"),
  attendance: z.enum(["all", "biweekly", "other"], {
    message: "Kies een optie",
  }),
  attendanceOther: z.string().optional(),
  speelotheek: z.enum(["yes", "no", "unknown"], {
    message: "Kies een optie",
  }),
  careNotes: z.string().max(500, "Maximaal 500 tekens").optional(),
  consentPrivacy: z
    .boolean()
    .refine((v) => v === true, { message: "Privacytoestemming is verplicht" }),
  consentPhoto: z.boolean().optional(),
});

export type SignupFormData = z.infer<typeof signupSchema>;
