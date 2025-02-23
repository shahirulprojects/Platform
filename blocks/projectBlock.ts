import { Block, Field } from "payload";

export const projectBlock: Block = {
  slug: "projectBlock",
  labels: {
    singular: "Project Block",
    plural: "Project Blocks",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      // helps identify the project in the admin UI
      admin: {
        description: "the name of the project",
      },
    },
    {
      name: "description",
      type: "textarea",
      required: true,
      admin: {
        description: "brief description of the project",
      },
    },
    {
      name: "projectImage",
      type: "upload",
      relationTo: "media",
      required: true,
      admin: {
        description: "main project image that appears in the center",
      },
    },

    {
      name: "technologyIcons",
      type: "array",
      required: true,
      fields: [
        {
          name: "icon",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
      admin: {
        description: "list of technology icons used in the project",
      },
    },
    {
      name: "liveSiteUrl",
      type: "text",
      required: true,
      admin: {
        description: "URL to the live project",
      },
    },
  ] as Field[],
};
