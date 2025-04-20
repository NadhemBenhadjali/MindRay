# 🧠 MindRay

**MindRay** is an integrated AI system designed to streamline medical workflows by combining advanced radiology analysis with mental health support. The system includes:

- **MindMate**: A fine-tuned conversational AI for mental health support.
- **XpeRay**: A multimodal model for automated radiology image interpretation.
- **Website**: An Angular-based frontend for login and doctor appointment scheduling.

---

## 🧠 MindMate – Mental Health AI System

MindMate is a conversational AI platform fine-tuned to support mental health tasks, including empathetic dialogue and automated symptom extraction. Built on the **LLaMA 3-8B Chat** model and enhanced through **PEFT (LoRA)**, MindMate brings state-of-the-art AI capabilities to the domain of mental health care.

### 🔍 Features

- 💬 **Conversational AI** — Engages in supportive, non-judgmental conversations with users.
- 🧠 **Symptom Analysis** — Extracts and summarizes mental health symptoms from user dialogue.
- ⚙️ **Fine-Tuned Model** — Custom-trained on mental health datasets for high contextual understanding.
- 🚀 **Lightweight Deployment** — Runs efficiently on consumer GPUs (e.g., NVIDIA P100 with fp16).
- 📊 **Prompt Engineering** — Tailored prompts for therapeutic dialogue and clinical text analysis.

### 📚 Datasets Used

MindMate was fine-tuned on a merged corpus of mental health counseling datasets:

- [`Amod/mental_health_counseling_conversations`](https://huggingface.co/datasets/Amod/mental_health_counseling_conversations)
- [`mpingale/mental-health-chat-dataset`](https://huggingface.co/datasets/mpingale/mental-health-chat-dataset)
- [`heliosbrahma/mental_health_chatbot_dataset`](https://huggingface.co/datasets/heliosbrahma/mental_health_chatbot_dataset)

### 📓 Notebooks (Located in `/MindMate`)

#### `llama-3-8b-chat-hf-finetuning.ipynb`
- Loads and preprocesses data
- Applies LoRA fine-tuning to LLaMA 3-8B
- Optimizer: `paged_adamw_32bit`
- Batch size: 2 (train), 1 (eval)
- Epochs: 2 — Final Loss: ~0.87 after ~6200 steps

#### `mindmate-testing-and-prompt-engineering.ipynb`
- Tests conversation quality
- Engineers prompt templates for different personas:
  - `MindMate Psychologist`: for empathetic support
  - `MindMate Analyzer`: for structured symptom extraction

#### `integrating-the-mindmate-model-with-a-frontend.ipynb`
- Demonstrates model integration with a frontend using **FastAPI**
- Deploys locally with **Ngrok** for quick testing

---

## 🖼️ XpeRay – Vision-Language Model for Radiology

**XpeRay** is an AI-powered vision-language model designed to automate the analysis of radiological images and generate clinically accurate medical reports. It leverages **LLaMA 3.2** for both visual encoding and text generation, and is trained using LoRA and supervised fine-tuning techniques.

### ✅ Key Features

- 📷 **Medical Image Analysis** — Processes and interprets radiology images
- 📝 **Report Generation** — Outputs diagnostic reports in natural language
- 🧠 **Fine-Tuned Architecture** — Uses LoRA and supervised fine-tuning
- ⚡ **Real-Time Support** — Assists radiologists in reducing time and improving accuracy

### 📓 Scripts (Located in `/XpeRay`)

- `training.py` — Fine-tunes the XpeRay model on radiology image-report datasets
- `test.py` — Evaluates the model’s performance and generates diagnostic outputs

---

## 🌐 Website – Angular Frontend

A responsive UI built with **Angular**, enabling:

- 🔐 **User Login** and authentication
- 📅 **Doctor Appointment Booking**
- 📊 **Integration with AI outputs**

Located in the `/Website` directory.

---

## ⚙️ Angular CLI – Frontend Development Guide

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.4.

### 📦 Development Server

Start a local dev server:

```bash
ng serve
```

Visit `http://localhost:4200/` in your browser. The app reloads automatically when you make changes.

### 🏗️ Code Scaffolding

To generate a new component:

```bash
ng generate component component-name
```

For available schematics (e.g., directives, pipes):

```bash
ng generate --help
```

### 🛠️ Building the Project

To build the application for production:

```bash
ng build
```

Compiled files will be in the `dist/` directory.

### 🧪 Running Unit Tests

Run tests with the [Karma](https://karma-runner.github.io) test runner:

```bash
ng test
```

### 🔍 End-to-End Testing

To run e2e tests:

```bash
ng e2e
```

> ⚠️ Note: Angular CLI doesn’t include an e2e framework by default. Choose one (e.g., Cypress, Playwright) as needed.

### 📘 Additional Resources

- [Angular CLI Overview](https://angular.dev/tools/cli)

---

## 📁 Project Structure

```bash
MindRay/
├── MindMate/                        # Notebooks and scripts for mental health AI
│   ├── llama-3-8b-chat-hf-finetuning.ipynb
│   ├── mindmate-testing-and-prompt-engineering.ipynb
│   └── integrating-the-mindmate-model-with-a-frontend.ipynb
│
├── XpeRay/                          # Vision-language model for radiology
│   ├── training.py
│   └── test.py
│
├── Website/                         # Angular app for login and appointment booking
│
├── README.md                        # You're here!
```

---

## 🚀 Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/<your-username>/MindRay.git
cd MindRay
```

2. **Navigate to a module and run**

For XpeRay training and testing:

```bash
cd XpeRay
python training.py
python test.py
```

For frontend:

```bash
cd Website
npm install
ng serve
```

---

## 📄 License

MIT License. See `LICENSE` file for full terms.

---

## 🤝 Contributing

Pull requests are welcome! For major changes, open an issue first to discuss what you'd like to improve or add.
