(function () {
  'use strict';
  var button = document.getElementById('home-language-toggle');
  if (!button) return;
  var labels = {
    'Homepage': '主页', 'About Me': '关于我', 'News': '最新动态',
    'Selected Publications': '代表性论文', 'Honors and Awards': '荣誉与奖励',
    'Educations': '教育经历', 'Academic Services': '学术服务',
    'Hongzhao Li': '李泓钊',
    'PhD student at Zhengzhou University.': '郑州大学博士研究生。',
    'Zhengzhou, China': '中国，郑州', 'Zhengzhou University': '郑州大学',
    'Email': '邮箱', 'Google Scholar': '谷歌学术'
  };
  var translatedNodes = [];
  document.querySelectorAll('.masthead, .profile_box').forEach(function (root) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    var node;
    while ((node = walker.nextNode())) {
      var original = node.nodeValue;
      var key = original.trim();
      if (Object.prototype.hasOwnProperty.call(labels, key)) {
        translatedNodes.push({node: node, en: original, zh: original.replace(key, labels[key])});
      }
    }
  });
  // Markdown headings can have identical IDs in both languages (e.g. journal names).
  // Only the visible language should own those IDs.
  var headingIds = [];
  document.querySelectorAll('[data-home-lang] [id]').forEach(function (node) {
    headingIds.push({node: node, id: node.id});
  });
  var language = 'en';
  function setLanguage(next) {
    language = next;
    document.querySelectorAll('[data-home-lang]').forEach(function (block) {
      block.hidden = block.getAttribute('data-home-lang') !== language;
    });
    headingIds.forEach(function (entry) {
      if (entry.node.closest('[data-home-lang]').hidden) entry.node.removeAttribute('id');
      else entry.node.id = entry.id;
    });
    translatedNodes.forEach(function (entry) { entry.node.nodeValue = entry[language]; });
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    button.textContent = language === 'zh' ? 'English' : '中文';
    button.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : '切换为中文');
    button.lang = language === 'zh' ? 'en' : 'zh-CN';
    // Let the existing navigation recalculate its available width.
    window.dispatchEvent(new Event('resize'));
  }
  button.addEventListener('click', function () {
    setLanguage(language === 'en' ? 'zh' : 'en');
    try { localStorage.setItem('homepage-language', language); } catch (error) { /* Storage may be disabled. */ }
  });
  try { if (localStorage.getItem('homepage-language') === 'zh') language = 'zh'; } catch (error) { /* Use English by default. */ }
  button.hidden = false;
  setLanguage(language);
}());
