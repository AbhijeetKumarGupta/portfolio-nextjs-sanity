import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'links',
  title: 'Links',
  type: 'document',
  fields: [
    defineField({
      name: 'github',
      title: 'Github',
      type: 'url',
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn',
      type: 'url',
    })
]
})