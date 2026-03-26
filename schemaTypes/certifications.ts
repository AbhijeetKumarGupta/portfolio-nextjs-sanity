import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'certifications',
    title: 'Certificate',
    type: 'document',
    fields: [
        defineField({
            name: 'certificateName',
            title: 'Certificate Name',
            type: 'string',
        }),
        defineField({
            name: 'skillName',
            title: 'Skill Name',
            type: 'string',
        }),
        defineField({
            name: 'certificateSource',
            title: 'Certificate Source',
            type: 'string',
            options: {
                list: [
                    { title: 'Link', value: 'link' },
                    { title: 'Image', value: 'image' },
                ],
                layout: 'radio',
            },
            initialValue: 'link',
        }),
        defineField({
            name: 'certificateLink',
            title: 'Certificate Link',
            type: 'string',
            hidden: ({ parent }) => parent?.certificateSource !== 'link',
        }),
        defineField({
            name: 'certificate',
            title: 'Certificate',
            type: 'image',
            options: {
                hotspot: true,
            },
            hidden: ({ parent }) => parent?.certificateSource !== 'image',
        }),
        defineField({
            name: 'instituteLink',
            title: 'Institute Link',
            type: 'string',
        }),
        defineField({
            name: 'instituteLogo',
            title: 'Institute Logo',
            type: 'image',
            options: {
                hotspot: true,
            },
        })
    ],
});

