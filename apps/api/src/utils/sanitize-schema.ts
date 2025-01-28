export const sanitizeSchema = (schema: string) => {
  return schema.replace(/[^a-zA-Z0-9_]/g, "").trim();
};

export const validateSchema = (schema: string) => {
  const validRegx = /^[a-zA-Z_][a-zA-Z0-9_]{0,62}$/;
  return validRegx.test(schema.trim());
};
