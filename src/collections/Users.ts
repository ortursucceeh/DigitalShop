import { CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
  slug: "users",
  auth: {
    // verify: {
    //   generateEmailHTML: ({ token }) => {
    //     return `<a href="${process.env.NEXT_PUBLIC_SERVICE_URL}/virify-email?token=${token}">Hello</a>`;
    //   },
    // },
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: "role",
      defaultValue: "user",
      required: true,
      admin: { condition: () => false },
      type: "select",
      options: [
        { label: "Admin", value: "admin" },
        { label: "User", value: "user" },
      ],
    },
  ],
};
