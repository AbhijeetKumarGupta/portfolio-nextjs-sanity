import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'skill',
    title: 'Skill',
    type: 'document',
    fields: [
        defineField({
            name: 'rank',
            title: 'Rank',
            type: 'number',
        }),
        defineField({
            name: 'skillName',
            title: 'Skill Name',
            type: 'string',
        }),
        defineField({
            name: 'skillDetailsLink',
            title: 'Skill Details Link',
            type: 'string',
        }),
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
    ]
})