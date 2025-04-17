import * as z from "zod";

export const productFormSchema = z.object({
  optionName: z
    .string()
    .min(1, { message: "Option name should not be empty!" }),
  options: z.any(),
});

export type ProductFormType = z.infer<typeof productFormSchema>;
