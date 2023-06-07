import type { TinaField } from "tinacms";

// Client Fields
export function clientFields() {

  // Client Title
  return [
    {
      type: "string",
      name: "clientTitle",
      label: "Client Title",

    },

    // Client URL
    {
      type: "string",
      name: "clientURL",
      label: "Client URL",
    },
    {
      label: "Hide from List",
      name: "hideFromList",
      type: "boolean",
    },
  ] as TinaField[];
}

// CV Fields
export function cvFields() {
  return [

    // CV Place
    {
      type: "string",
      name: "cvPlace",
      label: "CV Place",
    },

    // CV Position
    {
      type: "string",
      name: "cvPosition",
      label: "CV Position",
    },

    // CV Time
    {
      type: "string",
      name: "cvTime",
      label: "CV Time",
    },

    // CV URL
    {
      type: "string",
      name: "cvUrl",
      label: "CV URL",
    },
  ] as TinaField[];
}
export function featureFields() {
  return [
    {
      type: "string",
      name: "featureTitle",
      label: "Feature Title",
    },
    {
      type: "number",
      name: "featureYear",
      label: "Year",
    },
    {
      type: "string",
      name: "featureDescription",
      label: "Feature Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "feature_link",
      label: "Feature Link",
    },
  ] as TinaField[];
}
export function projectFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      label: "Draft",
      name: "draft",
      type: "boolean",
    },
    {
      type: "string",
      name: "projectType",
      label: "Project Type",
      options: ["MDRV", "Client", "Personal"],
    },
    {
      type: "reference",
      name: "client",
      label: "Client",
      collections: ["clients"],
      list: false
    },
    {
      type: "image",
      name: "image",
      label: "Image",
    },
    {
      type: "string",
      name: "imageSize",
      label: "Image Size",
      options: ["contain", "cover"],
    },
    {
      type: "string",
      name: "projectColor",
      label: "Project Color",
      ui: {
        component: "color",
      },
    },
    {
      type: "rich-text",
      name: "description",
      label: "Description",

    },
    {
      type: "number",
      name: "year",
      label: "Year",
    },
    {
      type: "string",
      name: "tags",
      label: "Tags",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "string",
      name: "projectURL",
      label: "Project URL",
    },
    {
      type: "string",
      name: "projectURLSite",
      label: "Project URL Site",
    },
    {
      type: "string",
      name: "size",
      label: "Size",
      options: ["Large", "Normal"],
    },
  ] as TinaField[];
}
