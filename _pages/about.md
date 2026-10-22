---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<link rel="stylesheet" href="{{ "/assets/css/home-language.css" | relative_url }}">

<span class='anchor' id='about-me'></span>

{% capture home_copy %}
# 🙋‍♂️ About Me

I am currently a Ph.D. student at the School of Computer and Artificial Intelligence, **Zhengzhou University (郑州大学)**, under the supervision of Prof. **[Mingliang Xu (徐明亮)](https://www7.zzu.edu.cn/csai/info/1234/2497.htm)** and Prof. **[Shupan Li (李书攀)](https://www.scopus.com/authid/detail.uri?authorId=56688691400)**.

I am also privileged to receive remote academic guidance from Prof. **[Muhammad Haris Khan](https://m-haris-khan.com/)** at the **Mohamed bin Zayed University of Artificial Intelligence (MBZUAI)** and Prof. **[Hao Dong (董浩)](https://donghao51.github.io/)** at the **ELLIS Institute Finland** and **Tampere University**.

My research interests primarily focus on **Domain Generalization** and **Multimodal Learning**.

*I am always open to potential research collaborations and discussions, feel free to get in touch via email.*

*📧 **Email:** lihongzhao@gs.zzu.edu.cn*

<!-- <a href='https://scholar.google.com/citations?user=iWCZj9wAAAAJ'>Google Scholar Profile <img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a> -->
{% endcapture %}
<div data-home-lang="en" lang="en">{{ home_copy | markdownify }}</div>

{% capture home_copy %}
# 🙋‍♂️ 关于我

我目前是**郑州大学**计算机与人工智能学院的博士研究生，导师为 **[徐明亮](https://www7.zzu.edu.cn/csai/info/1234/2497.htm)** 教授和 **[李书攀](https://www.scopus.com/authid/detail.uri?authorId=56688691400)** 教授。

同时，我有幸得到**Mohamed bin Zayed University of Artificial Intelligence (MBZUAI)**的 **[Muhammad Haris Khan](https://m-haris-khan.com/)** 教授，以及 **ELLIS Institute Finland**与**Tampere University**的 **[董浩](https://donghao51.github.io/)** 教授的远程学术指导。

我的研究方向主要包括**域泛化**与**多模态学习**。

*欢迎交流学术问题、探讨科研合作，随时通过邮件与我联系。*

*📧 **邮箱：** lihongzhao@gs.zzu.edu.cn*

<!-- <a href='https://scholar.google.com/citations?user=iWCZj9wAAAAJ'>Google Scholar Profile <img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a> -->
{% endcapture %}
<div data-home-lang="zh" lang="zh-CN" hidden>{{ home_copy | markdownify }}</div>
<span class='anchor' id='news'></span>

{% capture home_copy %}
# 🔥 News
- *2026*: &nbsp;🎉 Selected for the **2026 CAST Young Science and Technology Talent Cultivation Program (Doctoral Student Special Plan)**, China Association for Science and Technology (CAST).
- *2026.09*: &nbsp;🎉 One paper is accepted by **NeurIPS 2026** (<span style="color: #e74c3c;">**CCF-A**</span>).
- *2026.09*: &nbsp;🏆 I am honored to receive the **National Scholarship 2026!**
- *2026.07*: &nbsp;🚀 One paper is accepted by **International Journal of Computer Vision (IJCV)** (<span style="color: #e74c3c;">5-year IF 20.0</span>, <span style="color: #e74c3c;">**CCF-A**</span>).
- *2026.07*: &nbsp;🎉 One paper is accepted by **ACM MM 2026** (<span style="color: #e74c3c;">**CCF-A**</span>).
- *2026.04*: &nbsp;🌟 One paper is accepted by **CVPR 2026** (<span style="color: #e74c3c;">**CCF-A**</span>) and selected as <span style="color: #e74c3c;">**Highlight**</span>!
- *2026.03*: &nbsp;🎊 Invited to serve as **Area Chair** for **ICIC 2026** (<span style="color: #e74c3c;">**CCF-C**</span>).
- *2025.12*: &nbsp;🤝 Honored to host Prof. **[Chi Liu (刘驰)](https://cs.bit.edu.cn/szdw/jsml/bssds/e99eddb6f93f4c1f9388bea0b4f9979e.htm)** (BIT) during his visit to Zhengzhou. Deeply grateful for his generous academic guidance.
- *2025.12*: &nbsp;🤝 Honored to host Prof. **[Weinan Zhang (张伟楠)](https://wnzhang.net/)** (SJTU) during his visit to Zhengzhou. Deeply grateful for his inspiring academic guidance.
- *2025.10*: &nbsp;🎉 One paper is accepted by **AAAI 2026** (<span style="color: #e74c3c;">**CCF-A**</span>) as an <span style="color: #e74c3c;">**Oral**</span> presentation.
- *2025.10*: &nbsp;✨ **Grant**: Awarded as Principal Investigator for **the Natural Science Foundation of Henan Provincial** (Youth Student Project).
- *2025.07*: &nbsp;🎉 One paper is accepted by **ACM MM 2025** (<span style="color: #e74c3c;">**CCF-A**</span>) as an <span style="color: #e74c3c;">**Oral**</span> presentation.
- *2025.05*: &nbsp;🚀 One paper is accepted by **Expert Systems with Applications (ESWA)** (<span style="color: #e74c3c;">IF 9.4</span>).
- *2025.03*: &nbsp;🚀 One paper is accepted by **Knowledge-Based Systems (KBS)** (<span style="color: #e74c3c;">IF 8.0</span>).
- *2024.03*: &nbsp;🎉 One paper is accepted by **ICME 2024** (<span style="color: #e74c3c;">**CCF-B**</span>).
{% endcapture %}
<div data-home-lang="en" lang="en">{{ home_copy | markdownify }}</div>

{% capture home_copy %}
# 🔥 最新动态
- *2026*: &nbsp;🎉 入选 **2026 年中国科协青年科技人才培育工程博士生专项计划**。
- *2026.09*: &nbsp;🎉 一篇论文被录用于 **NeurIPS 2026** (<span style="color: #e74c3c;">**CCF-A**</span>).
- *2026.09*: &nbsp;🏆 荣获 **2026 年国家奖学金！**
- *2026.07*: &nbsp;🚀 一篇论文被录用于 **International Journal of Computer Vision (IJCV)** (<span style="color: #e74c3c;">五年影响因子 20.0</span>, <span style="color: #e74c3c;">**CCF-A**</span>).
- *2026.07*: &nbsp;🎉 一篇论文被录用于 **ACM MM 2026** (<span style="color: #e74c3c;">**CCF-A**</span>).
- *2026.04*: &nbsp;🌟 一篇论文被录用于 **CVPR 2026** (<span style="color: #e74c3c;">**CCF-A**</span>) ，并入选 <span style="color: #e74c3c;">**亮点论文（Highlight）**</span>!
- *2026.03*: &nbsp;🎊 受邀担任 **ICIC 2026** **领域主席** (<span style="color: #e74c3c;">**CCF-C**</span>).
- *2025.12*: &nbsp;🤝 有幸接待北京理工大学**[刘驰](https://cs.bit.edu.cn/szdw/jsml/bssds/e99eddb6f93f4c1f9388bea0b4f9979e.htm)**教授来郑州访问，衷心感谢他的学术指导。
- *2025.12*: &nbsp;🤝 有幸接待上海交通大学**[张伟楠](https://wnzhang.net/)**教授来郑州访问，衷心感谢他的启发与学术指导。
- *2025.10*: &nbsp;🎉 一篇论文被录用于 **AAAI 2026** (<span style="color: #e74c3c;">**CCF-A**</span>) ，报告形式为 <span style="color: #e74c3c;">**口头报告（Oral）**</span>。
- *2025.10*: &nbsp;✨ **科研项目**：获批主持**河南省自然科学基金青年学生项目**。
- *2025.07*: &nbsp;🎉 一篇论文被录用于 **ACM MM 2025** (<span style="color: #e74c3c;">**CCF-A**</span>) ，报告形式为 <span style="color: #e74c3c;">**口头报告（Oral）**</span>。
- *2025.05*: &nbsp;🚀 一篇论文被录用于 **Expert Systems with Applications (ESWA)** (<span style="color: #e74c3c;">影响因子 9.4</span>).
- *2025.03*: &nbsp;🚀 一篇论文被录用于 **Knowledge-Based Systems (KBS)** (<span style="color: #e74c3c;">影响因子 8.0</span>).
- *2024.03*: &nbsp;🎉 一篇论文被录用于 **ICME 2024** (<span style="color: #e74c3c;">**CCF-B**</span>).
{% endcapture %}
<div data-home-lang="zh" lang="zh-CN" hidden>{{ home_copy | markdownify }}</div>
<span class='anchor' id='publications'></span>

{% capture home_copy %}
# 📝 Publications

- **Hongzhao Li**, Siwei Liu, Guohao Shen, Shupan Li<sup style="font-size: 1em;">✉</sup>, Mingliang Xu<sup style="font-size: 1em;">✉</sup>. "[Multimodal Domain Generalization via Adaptive Dual-Objective Feature Learning](https://link.springer.com/article/10.1007/s11263-026-02991-0)." **International Journal of Computer Vision**, 2026, <span style="color: #e74c3c;">**CCF-A**</span>, **Q1 (CAS/JCR)**, <span style="color: #e74c3c;">**5-year IF 20.0**</span>.
- **Hongzhao Li**, Hao Dong, Hualei Wan, Shupan Li<sup style="font-size: 1em;">✉</sup>, Mingliang Xu<sup style="font-size: 1em;">✉</sup>, Muhammad Haris Khan. "[Towards Multimodal Domain Generalization with Few Labels](https://arxiv.org/abs/2602.22917)." **CVPR 2026**, <span style="color: #e74c3c;">**CCF-A**</span>, <span style="color: #e74c3c;">**Highlight**</span>.
- **Hongzhao Li**, Guohao Shen, Shupan Li<sup style="font-size: 1em;">✉</sup>, Mingliang Xu<sup style="font-size: 1em;">✉</sup>, Muhammad Haris Khan. "[Balancing Multimodal Domain Generalization via Gradient Modulation and Projection](https://arxiv.org/abs/2603.14175)." **AAAI 2026**, <span style="color: #e74c3c;">**CCF-A**</span>, <span style="color: #e74c3c;">**Oral**</span>.
- **Hongzhao Li**, Hualei Wan, Liangzhi Zhang, Mingyuan Jiu, Shupan Li<sup style="font-size: 1em;">✉</sup>, Mingliang Xu<sup style="font-size: 1em;">✉</sup>, Muhammad Haris Khan. "[Towards Robust Multimodal Domain Generalization via Modality-Domain Joint Adversarial Training](https://dl.acm.org/doi/abs/10.1145/3746027.3754954)." **ACM MM 2025**, <span style="color: #e74c3c;">**CCF-A**</span>, <span style="color: #e74c3c;">**Oral**</span>.
- **Hongzhao Li**, Siwei Liu, Hui Wang, Xiaoheng Jiang, Mingyuan Jiu, Li Chen, Yang Lu, Shupan Li<sup style="font-size: 1em;">✉</sup>, Mingliang Xu<sup style="font-size: 1em;">✉</sup>. "[RRGMambaFormer: A hybrid Transformer-Mamba architecture for radiology report generation](https://www.sciencedirect.com/science/article/abs/pii/S0957417425010413)." **Expert Systems with Applications**, 2025, **Q1 (CAS/JCR)**, <span style="color: #e74c3c;">**IF 9.4**</span>.
- **Hongzhao Li**, Hongyu Wang, Xia Sun, Hua He<sup style="font-size: 1em;">✉</sup>, Jun Feng<sup style="font-size: 1em;">✉</sup>. "[Context-enhanced framework for medical image report generation using multimodal contexts](https://www.sciencedirect.com/science/article/abs/pii/S0950705124015478)." **Knowledge-Based Systems**, 2025, **Q1 (CAS/JCR)**, <span style="color: #e74c3c;">**IF 8.0**</span>.
- **Hongzhao Li**, Hongyu Wang, Xia Sun<sup style="font-size: 1em;">✉</sup>, Hua He, Jun Feng<sup style="font-size: 1em;">✉</sup>. "[Prompt-guided generation of structured chest X-ray report using a pre-trained LLM](https://ieeexplore.ieee.org/abstract/document/10687707)." **ICME 2024**, <span style="color: #e74c3c;">**CCF-B**</span>.
{% endcapture %}
<div data-home-lang="en" lang="en">{{ home_copy | markdownify }}</div>

{% capture home_copy %}
# 📝 论文发表

- **Hongzhao Li**, Siwei Liu, Guohao Shen, Shupan Li<sup style="font-size: 1em;">✉</sup>, Mingliang Xu<sup style="font-size: 1em;">✉</sup>. "[Multimodal Domain Generalization via Adaptive Dual-Objective Feature Learning](https://link.springer.com/article/10.1007/s11263-026-02991-0)." **International Journal of Computer Vision**, 2026, <span style="color: #e74c3c;">**CCF-A**</span>, **中科院一区 / JCR Q1**, <span style="color: #e74c3c;">**五年影响因子 20.0**</span>.
- **Hongzhao Li**, Hao Dong, Hualei Wan, Shupan Li<sup style="font-size: 1em;">✉</sup>, Mingliang Xu<sup style="font-size: 1em;">✉</sup>, Muhammad Haris Khan. "[Towards Multimodal Domain Generalization with Few Labels](https://arxiv.org/abs/2602.22917)." **CVPR 2026**, <span style="color: #e74c3c;">**CCF-A**</span>, <span style="color: #e74c3c;">**亮点论文（Highlight）**</span>.
- **Hongzhao Li**, Guohao Shen, Shupan Li<sup style="font-size: 1em;">✉</sup>, Mingliang Xu<sup style="font-size: 1em;">✉</sup>, Muhammad Haris Khan. "[Balancing Multimodal Domain Generalization via Gradient Modulation and Projection](https://arxiv.org/abs/2603.14175)." **AAAI 2026**, <span style="color: #e74c3c;">**CCF-A**</span>, <span style="color: #e74c3c;">**口头报告（Oral）**</span>.
- **Hongzhao Li**, Hualei Wan, Liangzhi Zhang, Mingyuan Jiu, Shupan Li<sup style="font-size: 1em;">✉</sup>, Mingliang Xu<sup style="font-size: 1em;">✉</sup>, Muhammad Haris Khan. "[Towards Robust Multimodal Domain Generalization via Modality-Domain Joint Adversarial Training](https://dl.acm.org/doi/abs/10.1145/3746027.3754954)." **ACM MM 2025**, <span style="color: #e74c3c;">**CCF-A**</span>, <span style="color: #e74c3c;">**口头报告（Oral）**</span>.
- **Hongzhao Li**, Siwei Liu, Hui Wang, Xiaoheng Jiang, Mingyuan Jiu, Li Chen, Yang Lu, Shupan Li<sup style="font-size: 1em;">✉</sup>, Mingliang Xu<sup style="font-size: 1em;">✉</sup>. "[RRGMambaFormer: A hybrid Transformer-Mamba architecture for radiology report generation](https://www.sciencedirect.com/science/article/abs/pii/S0957417425010413)." **Expert Systems with Applications**, 2025, **中科院一区 / JCR Q1**, <span style="color: #e74c3c;">**影响因子 9.4**</span>.
- **Hongzhao Li**, Hongyu Wang, Xia Sun, Hua He<sup style="font-size: 1em;">✉</sup>, Jun Feng<sup style="font-size: 1em;">✉</sup>. "[Context-enhanced framework for medical image report generation using multimodal contexts](https://www.sciencedirect.com/science/article/abs/pii/S0950705124015478)." **Knowledge-Based Systems**, 2025, **中科院一区 / JCR Q1**, <span style="color: #e74c3c;">**影响因子 8.0**</span>.
- **Hongzhao Li**, Hongyu Wang, Xia Sun<sup style="font-size: 1em;">✉</sup>, Hua He, Jun Feng<sup style="font-size: 1em;">✉</sup>. "[Prompt-guided generation of structured chest X-ray report using a pre-trained LLM](https://ieeexplore.ieee.org/abstract/document/10687707)." **ICME 2024**, <span style="color: #e74c3c;">**CCF-B**</span>.
{% endcapture %}
<div data-home-lang="zh" lang="zh-CN" hidden>{{ home_copy | markdownify }}</div>
<span class='anchor' id='honors-and-awards'></span>

{% capture home_copy %}
# 🎖 Honors and Awards
- *2026* Selected for the **CAST Young Science and Technology Talent Cultivation Program (Doctoral Student Special Plan)**, China Association for Science and Technology (CAST).
- *2026.09* **National Scholarship**, Ministry of Education of China.
- *2026.09* First-class Ph.D. Scholarship, Zhengzhou University.
- *2025.10* Principal Investigator, **the Natural Science Foundation of Henan Provincial** (Youth Student Project).
- *2025.09* First-class Ph.D. Scholarship, Zhengzhou University.
- *2024.09* First-class Ph.D. Scholarship, Zhengzhou University.
{% endcapture %}
<div data-home-lang="en" lang="en">{{ home_copy | markdownify }}</div>

{% capture home_copy %}
# 🎖 荣誉与奖励
- *2026* 入选**中国科协青年科技人才培育工程博士生专项计划**。
- *2026.09* **国家奖学金**，中华人民共和国教育部。
- *2026.09* 郑州大学博士研究生一等学业奖学金。
- *2025.10* 主持**河南省自然科学基金青年学生项目**。
- *2025.09* 郑州大学博士研究生一等学业奖学金。
- *2024.09* 郑州大学博士研究生一等学业奖学金。
{% endcapture %}
<div data-home-lang="zh" lang="zh-CN" hidden>{{ home_copy | markdownify }}</div>
<span class='anchor' id='educations'></span>

{% capture home_copy %}
# 📖 Educations
- *2024.09 - Present*: **Zhengzhou University**, Ph.D. in Software Engineering.
- *2021.09 - 2024.06*: **Northwest University**, M.S. in Computer Science and Technology.
- *2017.09 - 2021.06*: **Henan University**, B.E. in Software Engineering.
{% endcapture %}
<div data-home-lang="en" lang="en">{{ home_copy | markdownify }}</div>

{% capture home_copy %}
# 📖 教育经历
- *2024.09 - 至今*: **郑州大学**，软件工程，博士研究生。
- *2021.09 - 2024.06*: **西北大学**，计算机科学与技术，硕士。
- *2017.09 - 2021.06*: **河南大学**，软件工程，学士。
{% endcapture %}
<div data-home-lang="zh" lang="zh-CN" hidden>{{ home_copy | markdownify }}</div>
<span class='anchor' id='academic-services'></span>

{% capture home_copy %}
# 🏛️ Academic Services
* **Area Chair:**
  - International Conference on Intelligent Computing (ICIC 2026)

* **Conference Reviewer:**
  - AAAI Conference on Artificial Intelligence (AAAI)
  - ACM International Conference on Multimedia (ACM MM)
  - International Conference on Medical Image Computing and Computer-Assisted Intervention (MICCAI)
  - IEEE International Conference on Multimedia and Expo (ICME)
  - International Joint Conference on Neural Networks (IJCNN)

* **Journal Reviewer:**
  - International Journal of Computer Vision (IJCV)
  - IEEE Transactions on Multimedia (TMM)
  - IEEE Transactions on Neural Networks and Learning Systems (TNNLS)
  - IEEE Transactions on Automation Science and Engineering (TASE)
  - IEEE Transactions on Cognitive and Developmental Systems (TCDS)
  - IEEE Transactions on Emerging Topics in Computational Intelligence (TETCI)
  - IEEE Journal of Biomedical and Health Informatics (JBHI)
  - Engineering Applications of Artificial Intelligence (EAAI)
  - Knowledge-Based Systems (KBS)
  - Artificial Intelligence in Medicine (AIIM)
  - Biomedical Signal Processing and Control (BSPC)
  - Informatics in Medicine Unlocked (IMU)
  - Array

- **Conference Service:**
  - *2025.12* &nbsp; **[The 3rd National Conference on Virtual-Real Integration and Interaction](https://www.c2.org.cn/h-nd-2504.html)**: Immensely enjoyed my time with Prof. **[Chi Liu (刘驰)](https://cs.bit.edu.cn/szdw/jsml/bssds/e99eddb6f93f4c1f9388bea0b4f9979e.htm)** (BIT), and I am sincerely thankful for his generous mentorship and invaluable advice on academic writing.
  - *2025.12* &nbsp; **[The 6th NSFC Forum for PIs of Young Scientists Fund in AI (Category B)](https://www.zzu.edu.cn/info/1217/87300.htm)**: Had the privilege of hosting Prof. **[Weinan Zhang (张伟楠)](https://wnzhang.net/)** (SJTU). I am deeply grateful for our enlightening discussions on Reinforcement Learning, which greatly broadened my research horizons.
  - *2024.11* &nbsp; **[CIE 2024 Symposium on Generative AI Technology](https://www.zzu.edu.cn/info/1217/84745.htm)**: Assisted in the conference organization and was honored to serve and learn from distinguished academicians and senior scholars in the field.
{% endcapture %}
<div data-home-lang="en" lang="en">{{ home_copy | markdownify }}</div>

{% capture home_copy %}
# 🏛️ 学术服务
* **领域主席：**
  - International Conference on Intelligent Computing (ICIC 2026)

* **会议审稿人：**
  - AAAI Conference on Artificial Intelligence (AAAI)
  - ACM International Conference on Multimedia (ACM MM)
  - International Conference on Medical Image Computing and Computer-Assisted Intervention (MICCAI)
  - IEEE International Conference on Multimedia and Expo (ICME)
  - International Joint Conference on Neural Networks (IJCNN)

* **期刊审稿人：**
  - International Journal of Computer Vision (IJCV)
  - IEEE Transactions on Multimedia (TMM)
  - IEEE Transactions on Neural Networks and Learning Systems (TNNLS)
  - IEEE Transactions on Automation Science and Engineering (TASE)
  - IEEE Transactions on Cognitive and Developmental Systems (TCDS)
  - IEEE Transactions on Emerging Topics in Computational Intelligence (TETCI)
  - IEEE Journal of Biomedical and Health Informatics (JBHI)
  - Engineering Applications of Artificial Intelligence (EAAI)
  - Knowledge-Based Systems (KBS)
  - Artificial Intelligence in Medicine (AIIM)
  - Biomedical Signal Processing and Control (BSPC)
  - Informatics in Medicine Unlocked (IMU)
  - Array

- **会议服务：**
  - *2025.12* &nbsp; **[第三届全国虚实融合与交互大会](https://www.c2.org.cn/h-nd-2504.html)**: 有幸与北京理工大学**[刘驰](https://cs.bit.edu.cn/szdw/jsml/bssds/e99eddb6f93f4c1f9388bea0b4f9979e.htm)**教授交流，衷心感谢他在学术写作方面的悉心指导与宝贵建议。
  - *2025.12* &nbsp; **[第六届人工智能领域国家自然科学基金优秀青年科学基金项目（B 类）负责人论坛](https://www.zzu.edu.cn/info/1217/87300.htm)**: 有幸接待上海交通大学**[张伟楠](https://wnzhang.net/)**教授。感谢他围绕强化学习开展的深入交流，极大地拓展了我的研究视野。
  - *2024.11* &nbsp; **[中国电子学会 2024 年生成式人工智能技术专题研讨会](https://www.zzu.edu.cn/info/1217/84745.htm)**: 协助会议组织工作，有幸为与会院士及资深学者提供服务，并向他们学习。
{% endcapture %}
<div data-home-lang="zh" lang="zh-CN" hidden>{{ home_copy | markdownify }}</div>
<script src="{{ "/assets/js/home-language.js" | relative_url }}" defer></script>
