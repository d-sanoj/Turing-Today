# Turing > Today

A visual history of artificial intelligence, told as a scrollable timeline from the foundations of computation to frontier models, AI infrastructure, agents, and regulation.

**Live site:** [https://d-sanoj.github.io/Turing-Today/](https://d-sanoj.github.io/Turing-Today/)

The site treats AI as a long story rather than a single invention. It starts with Alan Turing, early electronic computing, artificial neurons, and the Dartmouth Conference, then moves through symbolic AI, expert systems, the AI Winters, statistical machine learning, deep learning, transformers, generative AI, and the present race around chips, cloud infrastructure, multimodal systems, reasoning models, and AI agents.

## Features

- **66 milestone cards** spanning 1936 through 2024–present, grouped into 13 eras
- **Sticky timeline on desktop:** each card locks into place as you scroll, with a live year marker and era label
- **Detail dialog:** click or press Enter on a card to open the full write-up, image, and complete bullet list
- **Companies and labs:** 19 organizations, from SRI International and IBM to OpenAI, Anthropic, xAI, DeepSeek, and the European Union
- **People:** 57 researchers, builders, and leaders, each with a short note on their breakthrough
- **References:** 36 primary papers, official reports, and historical overviews, linked from the site
- **Image fallbacks:** if an external image fails to load, a simple inline graphic takes its place
- **Mobile layout:** a vertical feed, a full-screen dialog, and no sticky-card stacking on small screens
- **No build step:** plain HTML, CSS, and JavaScript, hosted on GitHub Pages

## Timeline coverage

| Era | Milestones |
| --- | ---: |
| Pre-AI Foundations | 4 |
| Birth of AI | 5 |
| Early Optimism | 7 |
| AI Winter I | 1 |
| Expert Systems Boom | 5 |
| AI Winter II | 1 |
| Machine Learning Revolution | 6 |
| Big Data & Cloud | 3 |
| Deep Learning Revival | 4 |
| Deep Learning Explosion | 8 |
| Transformers & Foundation Models | 5 |
| Generative AI Boom | 10 |
| AI Infrastructure & Agents | 7 |

Highlights along the way include the Universal Turing Machine, the Dartmouth Conference, ELIZA, Shakey, the two AI Winters, backpropagation, ImageNet, AlexNet, AlphaGo, the Transformer, ChatGPT, GPT-4, Llama, DeepSeek-R1, the EU AI Act, and the current wave of AI agents.

## Tech stack

This is a static frontend with no framework, bundler, or server-side code.

| Piece | Role |
| --- | --- |
| `index.html` | Page structure, navigation, and the detail dialog |
| `styles.css` | Layout, typography, sticky timeline, and mobile styles |
| `data.js` | Timeline events, companies, people, and references on `window.TIMELINE_DATA` |
| `script.js` | Rendering, scroll-linked year/era updates, and dialog behavior |
| GitHub Pages | Hosting from the `main` branch, with `.nojekyll` so Pages serves the files as-is |

## Run locally

There are no dependencies to install. From the repository root, use any static file server:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in a browser.

You can also open `index.html` directly, though a local server is the more reliable option for loading assets.

## Project structure

```
Turing-Today/
├── index.html          # Page markup
├── styles.css          # Styles
├── script.js           # Timeline, lists, and dialog logic
├── data.js             # Event, company, people, and reference data
├── assets/
│   └── ai-winter.png   # Shared graphic for both AI Winter milestones
├── .nojekyll           # Keeps GitHub Pages from running Jekyll
└── README.md
```

## Sources

The [References](https://d-sanoj.github.io/Turing-Today/#references) section on the site lists the 36 sources used for the timeline, including Turing's *Computing Machinery and Intelligence*, the Dartmouth proposal, and papers on backpropagation, AlexNet, Transformers, GPT-3, AlphaFold, RAG, diffusion models, the EU AI Act, and DeepSeek-R1.

## Image credits

Visual material comes mainly from Wikimedia Commons and Wikipedia file paths. Several simple diagrams and word marks are original inline SVGs made for this timeline. The AI Winter graphic in `assets/ai-winter.png` was provided by the project owner.

<details>
<summary>Wikimedia and related image sources</summary>

1. Alan Turing portrait. https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg
2. Bletchley Park Bombe. https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Bletchley_Park_Bombe_IMG_3570.JPG/1280px-Bletchley_Park_Bombe_IMG_3570.JPG
3. Artificial neuron graphic. https://upload.wikimedia.org/wikipedia/commons/4/44/Neuron3.png
4. ENIAC programming photograph. https://upload.wikimedia.org/wikipedia/commons/d/d3/Glen_Beck_and_Betty_Snyder_program_the_ENIAC_in_building_328_at_the_Ballistic_Research_Laboratory.jpg
5. Honeywell C-1 autopilot control panel. https://upload.wikimedia.org/wikipedia/commons/2/26/Honeywell_C-1_Autopilot_Control_Panel.jpg
6. Artificial intelligence concept image. https://upload.wikimedia.org/wikipedia/commons/5/5a/AI_Artificial_Intelligence_concept_%2852917075159%29.jpg
7. Frank Rosenblatt photograph. https://upload.wikimedia.org/wikipedia/commons/3/3b/Frank_Rosenblatt.jpg
8. John McCarthy photograph. https://upload.wikimedia.org/wikipedia/commons/4/49/John_McCarthy_Stanford.jpg
9. General Motors logo. https://upload.wikimedia.org/wikipedia/commons/b/b0/General_Motors_%282021%29.svg
10. ELIZA conversation image. https://upload.wikimedia.org/wikipedia/commons/7/79/ELIZA_conversation.png
11. K-nearest neighbors classification diagram. https://upload.wikimedia.org/wikipedia/commons/e/e7/KnnClassification.svg
12. SHRDLU / Winograd image. https://upload.wikimedia.org/wikipedia/commons/9/97/WinogradSkeleton.jpg
13. Lighthill Report cover image. https://upload.wikimedia.org/wikipedia/en/b/b3/Lighthill_3.jpeg
14. LISP logo. https://upload.wikimedia.org/wikipedia/commons/4/48/Lisp_logo.svg
15. IBM logo. https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg
16. NETtalk back-propagation image. https://upload.wikimedia.org/wikipedia/commons/e/e4/NETtalk-Back-propagation.jpg
17. Iris dataset diagram. https://upload.wikimedia.org/wikipedia/commons/d/df/Base_de_dados_de_flores_de_%C3%ADris_-_largura_vs._comprimento_das_p%C3%A9talas.svg
18. Deep Blue image. https://en.wikipedia.org/wiki/Special:FilePath/Deep_Blue.jpg
19. CNN diagram. https://upload.wikimedia.org/wikipedia/commons/6/63/Typical_cnn.png
20. Big data transparent graphic. https://upload.wikimedia.org/wikipedia/commons/e/e3/BigData_2267x1146_trasparent.png
21. Google logo. https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg
22. AWS logo. https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg
23. Geoffrey Hinton photograph. https://upload.wikimedia.org/wikipedia/commons/8/82/Geoffrey_Hinton_in_2026.jpg
24. Fei-Fei Li photograph. https://upload.wikimedia.org/wikipedia/commons/c/c7/Fei-Fei_Li_at_AI_for_Good_2017.jpg
25. NVIDIA logo. https://upload.wikimedia.org/wikipedia/commons/c/c7/NVidia_Logo.jpg
26. Generative adversarial network diagram. https://upload.wikimedia.org/wikipedia/commons/8/83/Generative_adversarial_network.svg
27. Microsoft logo. https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg
28. AlphaGo logo. https://upload.wikimedia.org/wikipedia/commons/0/0b/Alphago_logo_Reversed.svg
29. OpenAI logo. https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg
30. AlphaFold animation. https://upload.wikimedia.org/wikipedia/commons/e/ee/T1044-alphafold3-layey-by-layer.gif
31. Anthropic logo. https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg
32. Gemini icon. https://upload.wikimedia.org/wikipedia/commons/8/8f/Google-gemini-icon.svg
33. Meta logo. https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png
34. Mistral AI logo. https://upload.wikimedia.org/wikipedia/commons/e/e6/Mistral_AI_logo_%282025%E2%80%93%29.svg
35. GenAI logo. https://upload.wikimedia.org/wikipedia/commons/b/b5/GenAI.mil_black_logo.svg
36. Google DeepMind logo. https://upload.wikimedia.org/wikipedia/commons/5/51/Google_DeepMind_logo.svg
37. xAI logo. https://upload.wikimedia.org/wikipedia/commons/0/01/XAI_Logo.svg
38. Hugging Face logo. https://upload.wikimedia.org/wikipedia/commons/8/8e/Hugging_Face_logo.svg
39. Marvin Minsky photograph. https://upload.wikimedia.org/wikipedia/commons/9/94/Marvin_Minsky_at_OLPCb.jpg
40. Claude Shannon photograph. https://upload.wikimedia.org/wikipedia/commons/9/99/ClaudeShannon_MFO3807.jpg
41. Herbert Simon and Allen Newell photograph. https://upload.wikimedia.org/wikipedia/commons/4/4d/Herbert_A._Simon_and_Allen_Newell_1956.jpg
42. Prolog logo. https://upload.wikimedia.org/wikipedia/commons/f/f8/Prolog_logo.svg
43. Artificial neural network diagram. https://upload.wikimedia.org/wikipedia/commons/e/e4/Artificial_neural_network.svg
44. Geoffrey Hinton photograph. https://upload.wikimedia.org/wikipedia/commons/d/d0/Geoffrey_Hinton_at_UBC.jpg
45. Yann LeCun photograph. https://upload.wikimedia.org/wikipedia/commons/5/53/Yann_LeCun_-_2018_%28cropped%29.jpg
46. Yoshua Bengio photograph. https://upload.wikimedia.org/wikipedia/commons/4/4d/Yoshua_Bengio_2019_cropped.jpg
47. SVM margin diagram. https://upload.wikimedia.org/wikipedia/commons/7/72/SVM_margin.png
48. Demis Hassabis photograph. https://upload.wikimedia.org/wikipedia/commons/9/9e/Demis_Hassabis_Royal_Society.jpg
49. Lee Sedol photograph. https://upload.wikimedia.org/wikipedia/commons/7/7a/Lee_Sedol_%28cropped%29.jpg
50. Sam Altman photograph. https://upload.wikimedia.org/wikipedia/commons/a/a2/Sam_Altman_TechCrunch_SF_2019_Day_2_Oct_3_%28cropped%29.jpg
51. Dario Amodei photograph. https://upload.wikimedia.org/wikipedia/commons/8/8e/Dario_Amodei_2023_%28cropped%29.jpg
52. Jensen Huang photograph. https://upload.wikimedia.org/wikipedia/commons/8/86/Jensen_Huang_2023.jpg
53. Andrew Ng photograph. https://upload.wikimedia.org/wikipedia/commons/6/69/Andrew_Ng_2017.jpg
54. Jeff Dean photograph. https://upload.wikimedia.org/wikipedia/commons/0/00/Jeff_Dean_%28computer_scientist%29_2018.jpg
55. Mira Murati photograph. https://upload.wikimedia.org/wikipedia/commons/2/22/Mira_Murati_-_Flickr_-_TechCrunch.jpg
56. NVIDIA logo, secondary Wikimedia source. https://upload.wikimedia.org/wikipedia/sco/2/21/Nvidia_logo.svg

</details>
