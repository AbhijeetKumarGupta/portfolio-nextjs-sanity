import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'images',
    title: 'Images',
    type: 'document',
    fields: [
        defineField({
            name: 'topbarlogo',
            title: 'Topbar Logo',
            type: 'image',
            options: {
              hotspot: true,
            },
          }),
        defineField({
            name: 'homeBackground',
            title: 'Home Background',
            type: 'image',
            options: {
              hotspot: true,
            },
          }),
        defineField({
            name: 'skillsBackground',
            title: 'Skills Background',
            type: 'image',
            options: {
              hotspot: true,
            },
          }),
        defineField({
            name: 'contactBackground',
            title: 'Contact Background',
            type: 'image',
            options: {
              hotspot: true,
            },
          })
    ]
})