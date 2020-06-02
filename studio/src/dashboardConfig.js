export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ed5e5466afa3cae40941f87',
                  title: 'Sanity Studio',
                  name: 'against-lightning-studio',
                  apiId: '64e70196-6bd4-43e0-9a38-1b34515f395b'
                },
                {
                  buildHookId: '5ed5e546661e51429120a930',
                  title: 'Blog Website',
                  name: 'against-lightning',
                  apiId: '26e267bf-3853-413e-9458-9d18db5fd25f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dustwise/against-lightning',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://against-lightning.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
