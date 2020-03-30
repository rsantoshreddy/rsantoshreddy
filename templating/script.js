(() => {
  const data = [
    {
      title: 'Mr.',
      name: 'santosh',
      age: 32,
      city: 'bangalore',
      pin: 569845
    },
    {
      title: 'Mr.',
      name: 'santosh',
      age: 32,
      city: 'bangalore',
      pin: 569845
    }
  ];

  const render = (data, templateId) => {
    const list = document.getElementById(templateId);
    const templateHtml = list.innerHTML;
    let results = '';
    if (data) {
      data.forEach(element => {
        let fragment = templateHtml;
        Object.keys(element).forEach(key => {
          const regex = new RegExp(`{{${key}}}`, 'g');
          fragment = fragment.replace(regex, element[key]);
        });
        results += fragment;
      });
      return results;
    }
  };

  const root = document.getElementById('root');
  root.innerHTML = render(data, 'list');
})();
