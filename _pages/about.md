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

<span class='anchor' id='about-me'></span>

# 👋 关于我 (About Me)

我目前是 **郑州大学** 软件工程专业的在读博士生。在此之前，我在 **西北大学** 获得了计算机科学与技术硕士学位，并在 **河南大学** 完成了软件工程本科学业。

我的研究兴趣主要集中在 **多模态领域泛化 (Multimodal Domain Generalization)**、**医学图像分析** 以及 **放射报告生成 (Radiology Report Generation)**。目前已在 AAAI, ACM MM, ESWA, KBS 等国际顶级会议和期刊上发表多篇论文。

<a href='https://scholar.google.com/citations?user=iWCZj9wAAAAJ'>
  <img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations">
</a>

# 🔥 新闻 (News)
- *2025.12*: &nbsp;🎉 我们的论文 "Balancing Multimodal Domain Generalization via Gradient Modulation and Projection" 被 **AAAI 2026** 接收并选为 **Oral** 演示。
- *2025.07*: &nbsp;🎉 我们的论文 "Towards Robust Multimodal Domain Generalization..." 被 **ACM MM 2025** 接收。
- *2024.09*: &nbsp;🚀 开启在郑州大学的博士研究生涯。

# 📝 论文发表 (Selected Publications) 

<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge">AAAI 2026 (Oral)</div>
      <img src='images/aaai26.png' alt="AAAI 2026" width="100%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

[Balancing Multimodal Domain Generalization via Gradient Modulation and Projection](https://scholar.google.com/citations?user=iWCZj9wAAAAJ)

**Hongzhao Li**, et al.

- 提出了梯度调制与投影技术，用于平衡多模态学习中的领域泛化问题。
- 被人工智能顶级会议 AAAI 2026 接收为 Oral 论文 (CCF-A)。
</div>
</div>

### 更多论文 (More Publications)

- **Towards Robust Multimodal Domain Generalization via Modality-Domain Joint Adversarial Training**, **Hongzhao Li**, et al., **ACM MM 2025** (CCF-A)
- **RRGMambaFormer: A hybrid Transformer-Mamba architecture for radiology report generation**, **Hongzhao Li**, et al., **Expert Systems with Applications**, 2025 (Q1, IF: 7.5)
- **Context-enhanced framework for medical image report generation using multimodal contexts**, **Hongzhao Li**, et al., **Knowledge-Based Systems**, 2025 (Q1, IF: 7.2)
- **Prompt-guided generation of structured chest X-ray report using a pre-trained LLM**, **Hongzhao Li**, et al., **ICME 2024** (CCF-B)
- **Multi-Modality and Multi-Grained Transformer for Accurate Radiology Report Generation**, **Hongzhao Li**, et al., **ICIC 2025** (CCF-C, Oral)

# 🎓 教育经历 (Educations)
- *2024.09 - 至今*, **郑州大学**, 软件工程, 博士
- *2021.09 - 2024.07*, **西北大学**, 计算机科学与技术, 硕士
- *2017.09 - 2021.07*, **河南大学**, 软件工程, 本科

# 👨‍🏫 导师与合作者 (Supervisors)
- **博士生导师**: [李舒攀](https://scholar.google.com/citations?user=iWCZj9wAAAAJ) (郑州大学), [徐明亮](https://scholar.google.com/citations?user=iWCZj9wAAAAJ) (郑州大学教授/院长)
- **硕士生导师**: [冯筠](https://scholar.google.com/citations?user=iWCZj9wAAAAJ) (西北大学教授)
- **学术合作者**: [Muhammad Haris Khan](https://scholar.google.com/citations?user=iWCZj9wAAAAJ) (MBZUAI)

# 💻 学术服务 (Academic Service)
- **期刊审稿人**: IJCV, TNNLS, TASE, TCDS, TETCI
- **会议审稿人**: AAAI, ACM MM, ICME
