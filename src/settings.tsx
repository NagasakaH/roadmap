import {reactiveSVGSettings} from '@nagasakah/reactive-svg';

const additionalContent = `
  <hr/>
  <div id="overlayInProgress">学習中: aaa,bbb,ccc</div>
  <div id="overlayContentCompleted">習得者: ddd,eee,fff</div>
`;

export const settings: reactiveSVGSettings = {
  baseURL: `${process.env.PUBLIC_URL}/md/`,
  events: [
    {
      name: 'linux-packagemanager',
      markdownFile: 'linux/packagemanager.md',
      additionalHTMLContent: additionalContent,
    },
    {
      name: 'linux-usergroupmanagement',
      markdownFile: 'linux/usergroupmanagement.md',
      additionalHTMLContent: additionalContent,
    },
    {
      name: 'linux-shellcommand',
      markdownFile: 'linux/shellcommand.md',
      additionalHTMLContent: additionalContent,
    },
    {
      name: 'linux-shellscript',
      markdownFile: 'linux/shellscript.md',
      additionalHTMLContent: additionalContent,
    },
    {
      name: 'linux-network',
      markdownFile: 'linux/network.md',
      additionalHTMLContent: additionalContent,
    },
    {
      name: 'docker-introduction',
      markdownFile: 'docker/introduction.md',
      additionalHTMLContent: additionalContent,
    },
    {
      name: 'docker-introduction-core',
      markdownFile: 'docker/introduction-core.md',
      additionalHTMLContent: additionalContent,
    },
    {
      name: 'docker-introduction-core-cgroups',
      markdownFile: 'docker/introduction-core-cgroups.md',
      additionalHTMLContent: additionalContent,
    },
    {
      name: 'docker-introduction-core-unionfs',
      markdownFile: 'docker/introduction-core-unionfs.md',
      additionalHTMLContent: additionalContent,
    },
    {
      name: 'docker-introduction-core-namespaces',
      markdownFile: 'docker/introduction-core-namespaces.md',
      additionalHTMLContent: additionalContent,
    },
    {
      name: 'docker-introduction-compare',
      markdownFile: 'docker/introduction-compare.md',
      additionalHTMLContent: additionalContent,
    },
  ],
};
