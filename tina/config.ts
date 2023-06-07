import * as React from "react";

import { defineConfig } from "tinacms";
import { clientFields } from "./templates";
import { cvFields } from "./templates";
import { featureFields } from "./templates";
import { projectFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "y", // Get this from tina.io
  token: null, // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "CV",
        name: "cv",
        path: "content/cv",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...cvFields(),
        ],
      },
      {
        format: "md",
        label: "Imprint",
        name: "imprint",
        path: "content",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "imprint",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Imprint",
            description: "Imprint Text",
            isBody: true,
          },
        ],
      },
      {
        format: "md",
        label: "Privacy",
        name: "privacy",
        path: "content",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "privacy",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Privacy",
            description: "Privacy Text",
            isBody: true,
          },
        ],
      },
      {
        format: "md",
        label: "Projects",
        name: "projects",
        path: "content/posts",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...projectFields(),
        ],
      },
      {
        format: "md",
        label: "Clients",
        name: "clients",
        path: "content/clients",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          ...clientFields()
        ],
      },
      {
        format: "md",
        label: "Features",
        name: "features",
        path: "content/features",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          ...featureFields(),
        ],
      },
      {
        format: "md",
        label: "Pages",
        name: "pages",
        path: "content",
        frontmatterFormat: "yaml",
        match: {
          include: "*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
