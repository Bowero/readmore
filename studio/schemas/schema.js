// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    {
      // Display name: "Book"
      title: 'Book',

      // Identifier: "book"
      name: 'book',

      // Type: "document",
      type: 'document',

      // Fields:
      fields: [
        {
          // Display name: "Title"
          title: 'Title',

          // Identifier: "title"
          name: 'title',

          // Type: "string",
          type: 'string',
        },
        {
          // Display name: "Author"
          title: 'Author',

          // Identifier: "author"
          name: 'author',
          
          // Type: "string",
          type: 'string',
        },
        {
          // Display name: "Description"
          title: 'Description',

          // Identifier: "description"
          name: 'description',

          // Type: "string",
          type: 'string',
        },
        {
          // Display name: "Cover"
          title: 'Cover',

          // Identifier: "cover"
          name: 'cover',

          // Type: "image",
          type: 'image',
        },
        {
          // Display name: "Price"
          title: 'Price',

          // Identifier: "price"
          name: 'price',

          // Type: "number",
          type: 'number',
        },
        {
          // Display name: "URL"
          title: 'URL',

          // Identifier: "url"
          name: 'url',

          // Type: "string",
          type: 'string',
        },
        {
          // Display name: "Twitter URL"
          title: 'Twitter URL',

          // Identifier: "twitterUrl"
          name: 'twitterUrl',

          // Type: "string",
          type: 'string',
        },
      ],
    }
  ]),
})
