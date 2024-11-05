/* eslint-disable */
export default async () => {
    const t = {};
    return { "@nestjs/swagger": { "models": [[import("./app/tenant/dto/create-tenant.dto"), { "CreateTenantDto": { name: { required: true, type: () => String, maxLength: 255 }, domain: { required: true, type: () => String, maxLength: 255 }, phone: { required: true, type: () => String }, email: { required: false, type: () => String, format: "email" }, metadata: { required: false, type: () => Object }, is_active: { required: false, type: () => Boolean } } }]], "controllers": [[import("./app/tenant/tenant.controller"), { "TenantController": { "create": {} } }]] } };
};