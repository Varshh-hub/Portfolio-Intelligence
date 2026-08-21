# Portfolio Intelligence & Career Fit Analyzer

An AI-powered system that analyzes a student's portfolio and evaluates how strongly it aligns with a selected career role.

## Overview

Portfolio Intelligence goes beyond checking whether a candidate has listed a particular skill.

It analyzes:

* Projects
* Technical skills
* Certifications
* GitHub evidence
* Portfolio content
* Role requirements

The system evaluates the available evidence, identifies skill gaps, measures project relevance, and generates actionable career insights.

## Key Features

* Portfolio analysis from a URL
* Skill extraction and normalization
* Evidence-based skill validation
* Career role intelligence
* Skill gap analysis
* Project relevance analysis
* Semantic similarity using sentence embeddings
* Explainable role-readiness scoring
* LLM-powered recommendations
* HR, Student, Support, Roast, and Fix analysis modes

## How It Works

```text
Portfolio URL
      |
      v
Web Scraping
      |
      v
Portfolio Analysis
      |
      v
Skill & Evidence Extraction
      |
      v
Role Matching
      |
      v
Semantic Similarity
      |
      v
Scoring Engine
      |
      v
LLM Insights
      |
      v
Results Dashboard
```

## Example

**Target Role:** Data Scientist

| Skill         | Assessment |
| ------------- | ---------- |
| Python        | Strong     |
| Pandas        | Strong     |
| SQL           | Moderate   |
| Statistics    | Moderate   |
| Deep Learning | Missing    |
| Cloud         | Missing    |

The system evaluates not only whether a skill appears in the portfolio, but whether there is supporting evidence that demonstrates its use.

## Project Relevance

Projects are evaluated against the selected career role.

For example, a disease prediction project may have high relevance for a Data Scientist role because it demonstrates concepts such as:

* Python
* Machine Learning
* Classification
* Data Preprocessing
* Model Evaluation

The same project may have significantly lower relevance for a Frontend Developer role.

This does not indicate that the project is poor. It indicates how strongly the project demonstrates the competencies associated with the selected role.

## Scoring

The system combines multiple dimensions of portfolio analysis, including:

* Skill Evidence
* Project Relevance
* Role Alignment
* Content Quality
* UI Quality
* Portfolio Completeness

The resulting **Portfolio Role-Readiness Score** represents how strongly the available portfolio evidence demonstrates readiness for the selected role.

It is not intended to represent a probability of getting hired.

## LLM Integration

The LLM is used to explain structured analysis results rather than independently generating the core score.

```text
Portfolio
    |
    v
Analysis
    |
    v
Evidence & Scoring
    |
    v
NLP / Similarity
    |
    v
Structured Results
    |
    v
LLM
    |
    v
Career Insights
```

This approach makes the system more transparent and explainable than relying entirely on an LLM-generated assessment.

## Technology Stack

### Frontend

* HTML
* CSS
* JavaScript

### Data and Analysis

* Python
* Pandas
* NLP
* Skill Extraction
* Skill Normalization

### Web Scraping

* Selenium
* Playwright
* BeautifulSoup

### Machine Learning and NLP

* Sentence Embeddings
* Cosine Similarity
* Named Entity Recognition
* Keyword-based Extraction

### Generative AI

* Large Language Model (LLM)
* AI-powered explanations
* Career recommendations

## Supported Roles

The role intelligence system is designed to support roles such as:

* Data Analyst
* Data Scientist
* Machine Learning Engineer
* Data Engineer
* Business Analyst
* Software Developer
* Frontend Developer
* Backend Developer
* Full Stack Developer
* AI Engineer

Additional roles can be added through the role competency knowledge base.

## Project Architecture

```text
User
 |
 | Portfolio URL + Target Role
 v
Frontend
 |
 v
Web Scraper
 |
 v
Portfolio Parser
 |
 +-------------------+
 |                   |
 v                   v
Skill Analysis    Project Analysis
 |                   |
 v                   v
Evidence Engine   Project Relevance
 |                   |
 +---------+---------+
           |
           v
     Role Intelligence
           |
           v
    NLP / Embeddings
           |
           v
     Scoring Engine
           |
           v
        LLM Layer
           |
           v
    Results Dashboard
```

## Development Roadmap

* [x] Project concept and architecture
* [x] Frontend interface
* [x] Portfolio URL processing
* [x] Web scraping pipeline
* [x] Portfolio parsing
* [x] Skill extraction and normalization
* [ ] Evidence analysis
* [ ] Role competency database
* [ ] Project-role similarity
* [ ] Scoring engine
* [ ] LLM integration
* [ ] Results dashboard
* [ ] GitHub repository analysis
* [ ] Job-description matching

## Why This Project?

Traditional portfolio checkers may ask:

> "Does the candidate list Python?"

Portfolio Intelligence asks:

> "Does the candidate provide evidence that they have actually used Python?"

The project focuses on **evidence-based and explainable career guidance** rather than making unrealistic hiring predictions.

## Project Status

Currently under development.

The system is being built incrementally, starting with portfolio analysis and role intelligence before integrating the complete scraping, NLP, scoring, and LLM pipeline.

## Future Improvements

* GitHub repository analysis
* Job-description-based role matching
* Personalized learning recommendations
* Job recommendations
* Advanced portfolio quality analysis
* Historical portfolio tracking
* Improved explainable scoring
* Automated portfolio improvement suggestions

## Author

**Varsha**

B.Sc. Artificial Intelligence and Machine Learning

GitHub: [Varshh-hub](https://github.com/Varshh-hub)

## License

This project is intended for educational and portfolio development purposes.
