import mongoose from "mongoose";

const { Schema } = mongoose;

const snippetSchema = new Schema({
  title: String,
  language: String,
  code: String,
  description: String,
  favorite: Boolean
},
{
  timestamps: true
});

export const models = [
  {
    name: "Snippet",
    schema: snippetSchema,
    collection: "snippets",
  },
];
