export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '5f4358a2c86c10491fdfb0de',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-k8xtvknj',
                  apiId: '5ac9616f-bd35-4ee1-86d6-6b998a5b8e05'
                },
                {
                  buildHookId: '5f4358a2442f8e3a5cc9c339',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-s9384k1p',
                  apiId: 'c5eb3bd7-a7cd-408b-b147-152d34f30cfa'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/HyacintheHamon/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-s9384k1p.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
