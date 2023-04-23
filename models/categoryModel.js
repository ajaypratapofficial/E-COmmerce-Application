import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  slug: {
    type: String,
    lowercase: true,
    },
});

export default mongoose.model("Category", categorySchema);

// defining a Mongoose schema for a category object in a MongoDB database. The code imports the Mongoose library, which is an Object Data Modeling (ODM) library for MongoDB and Node.js. It defines a schema for the category object, which includes two fields: name and slug. The name field is a required string with a unique constraint, while the slug field is a lowercase string.

// The category schema can be used to create a Mongoose model using the mongoose.model() method, which takes two arguments: the name of the model and the schema definition. In this case, the model name is "Category", and the schema definition is categorySchema. The resulting model can be used to interact with the MongoDB database, including creating, updating, and deleting category documents.

// slugify is good for website SEO