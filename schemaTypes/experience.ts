import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
        defineField({
            name: 'rank',
            title: 'Rank',
            type: 'number',
        }),
        defineField({
            name: 'companyName',
            title: 'Company Name',
            type: 'string',
        }),
        defineField({
            name: 'companyDescription',
            title: 'Company Description',
            type: 'text',
        }),
        defineField({
            name: 'workingDuration',
            title: 'Working Duration',
            type: 'string',
        }),
        defineField({
            name: 'role',
            title: 'Role',
            type: 'string',
        }),
        defineField({
            name: 'year',
            title: 'Year (From-To)',
            type: 'string',
        }),
        defineField({
            name: 'companyLink',
            title: 'Company Link',
            type: 'string',
        }),
        defineField({
            name: 'companyLogo',
            title: 'Company Logo',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
    ]
})