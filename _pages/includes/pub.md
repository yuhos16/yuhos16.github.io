# Publications
*# Equal Contribution*
## 🩺 AI-Driven Intelligence System for Dermtoalogy 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2026 · Under Review</div><img src='images/skingpt_r1.jpg' alt="SkinGPT-R1" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[SkinGPT-R1: A Minimal-Parameter Dermatology Reasoning Model via Adapter-Only Dual Distillation on Vision–R1](https://arxiv.org/abs/2511.15242) \\
**Yuhao Shen#**, Jiahe Qian#, Zhangtianyi Chen, Yuanhao He, Juexiao Zhou

<!-- [**Project**](https://github.com/placeholder/SkinGPT-R1) \| [**Code**](https://github.com/placeholder/SkinGPT-R1)  <strong><span class='show_paper_citations' data='PLACEHOLDER_SKINGPT_R1'></span></strong> -->

- Freeze Vision–R1 and train only ~0.001% parameters via adapter-only **dual distillation** (visual prior transfer + instruction-tuned CoT) for step-by-step, verifiable dermatologic reasoning.
- Teacher-free, low-latency inference; strong gains on safety & medical groundedness on DermBench (details in paper).
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Scientific Data · Under Review</div><img src='images/skincare.png' alt="SkinCaRe Dataset" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[SkinCaRe: A Multimodal Dermatology Dataset Annotated with Medical Caption and Chain-of-Thought Reasoning](https://arxiv.org/abs/2405.18004) \\
**Yuhao Shen#**, Liyuan Sun#, Yan Xu#, Wenbin Liu#, Shuping Zhang#, Shawn Afvari, Zhongyi Han, Jiaoyan Song, Yongzhi Ji, Tao Lu, Xiaonan He, Xin Gao, Juexiao Zhou

[**Dataset**](https://huggingface.co/datasets/yuhos16/SkinCaRe)
 <!-- \| [**Project**](https://github.com/placeholder/SkinCaRe)  <strong><span class='show_paper_citations' data='PLACEHOLDER_SKINCARE'></span></strong> -->

- Release **SkinCaRe**, unifying SkinCAP (medical captions) and SkinCoT (clinician-verified chains-of-thought) for transparent dermatologic reasoning.
- Enables training and evaluation of VLMs that both **describe** findings and **explain** diagnostic steps.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICLR 2026 · Under Review</div><img src='images/dermeval.jpg' alt="DermBench & DermEval" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Towards Trustworthy Dermatology MLLMs: A Benchmark and Multimodal Evaluator for Diagnostic Narratives](https://arxiv.org/abs/2511.09195) \\
**Yuhao Shen#**, Jiahe Qian#, Shuping Zhang#, Zhangtianyi Chen, Tao Lu, Juexiao Zhou*

<!-- [**Benchmark**](https://github.com/placeholder/DermBench) \| [**Project**](https://github.com/placeholder/DermEval)  <strong><span class='show_paper_citations' data='PLACEHOLDER_DERMBENCH'></span></strong> -->

- Propose **DermBench** (six clinical dimensions) and **DermEval** (reference-free evaluator) for image–text dermatology reasoning aligned with physician scoring.
- Curate dermatologist-verified image–narrative pairs; standardized reporting for safety, groundedness, and reasoning quality.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2026 · Under Review</div><img src='images/ttt.png' alt="CoTBox-TTT" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[CoTBox-TTT: Grounding Medical VQA with Visual Chain-of-Thought Boxes During Test-time Training](https://arxiv.org/abs/2511.12446) \\
Jiahe Qian#, **Yuhao Shen#**, Zhangtianyi Chen, Juexiao Zhou, Peisong Wang

<!-- [**Project**](https://github.com/placeholder/CoTBox-TTT) \| [**Code**](https://github.com/placeholder/CoTBox-TTT)  <strong><span class='show_paper_citations' data='PLACEHOLDER_COTBOX_TTT'></span></strong> -->

- Evidence-first **test-time training** with all backbones frozen; update a small set of continuous soft prompts guided by **visual chain-of-thought boxes**.
- Enforces answer consistency between full image and localized crops; label-free, plug-and-play, robust to domain shift with low compute.
</div>
</div>