import { defineField, defineType } from 'sanity'

export const categoryType = defineType({
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'color',
            title: 'Label Color',
            type: 'string',
            options: {
                list: [
                    { title: 'Green (Default)', value: 'green' },
                    { title: 'Blue', value: 'blue' },
                    { title: 'Red', value: 'red' },
                    { title: 'Purple', value: 'purple' },
                    { title: 'Orange', value: 'orange' },
                    { title: 'Gray', value: 'gray' },
                ],
            },
            initialValue: 'green',
        }),
    ],
})
