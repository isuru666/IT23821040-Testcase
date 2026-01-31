"# IT23821040-Testcase"
# Singlish to Sinhala Translator – Automated Testing Suite

![Node.js](https://img.shields.io/badge/Node.js-14%2B-green?logo=node.js)
![Playwright](https://img.shields.io/badge/Playwright-1.x-blue?logo=playwright)
![License](https://img.shields.io/badge/License-Educational-purple)
![Tests](https://img.shields.io/badge/Tests-36%20cases-orange)

---

## Project Overview
This testing framework validates the **Singlish to Sinhala Translator** web application:  
https://www.swifttranslator.com/

The automation suite checks:
- Translation accuracy for valid Singlish inputs  
- Robustness for invalid / edge-case inputs (negative scenarios)  
- UI stability for key user interactions  

---

## Academic Context
- **Course:** IT3040 – IT Project Management  
- **Program:** BSc (Hons) in Information Technology (Year 3, Semester 1)  
- **Assignment:** Assignment 1  
- **Registration:** IT23821040  

---

## Quick Start

### Prerequisites
- **Node.js (v14 or higher)** → https://nodejs.org/  
- **Git (for cloning)** → https://git-scm.com/  

Verify:
```bash
node --version
git --version
```

### Installation & Setup
```bash
# 1. Clone repository
git clone https://github.com/isuru666/IT23821040-Testcase.git
cd IT23821040

# 2. Install dependencies
npm install

# 3. Install Playwright browser
npx playwright install chromium

# 4. Verify Playwright
npx playwright --version
```

---

## Test Execution

### Run complete test suite
```bash
npx playwright test
```

### Targeted test execution

| Command | Description | Coverage |
|---|---|---:|
| `npx playwright test tests/positive_cases.spec.js` | Positive functional tests | 27 |
| `npx playwright test tests/negative_cases.spec.js` | Negative / edge-case tests | 10 |
| `npx playwright test tests/ui_cases.spec.js` | UI validation tests | 1 |

### Execution modes
```bash
# Headless mode (default)
npx playwright test --headed false

# Headed mode (with browser UI)
npx playwright test --headed

# Chromium only
npx playwright test --project=chromium

# Run with one worker (reduces flakiness on live sites)
npx playwright test --workers=1
```

> **Note about Negative Tests:**  
> Negative functional tests are designed to demonstrate **system limitations / incorrect behavior**, so some tests may intentionally **FAIL** (depending on how you structured the assertions and marking requirement).

---

## Test Architecture

### Positive Test Cases (25)
Validates correct translation of legitimate Singlish inputs including:
- Present / past / future tense  
- Questions & imperatives  
- Mixed Singlish + English terms  
- Multi-line inputs & long paragraphs  

IDs: **Pos_Fun_0001 → Pos_Fun_0025**

### Negative Test Cases (10)
Assesses system robustness with edge cases such as:
- Case sensitivity / letter ambiguity  
- Missing spaces / joined words  
- Heavy typos and repeated characters  
- Slang or punctuation overload  
- Long mixed input causing partial conversion  

IDs: **Neg_Fun_0001 → Neg_Fun_0010**

### UI Test Cases (1)
- **Pos_UI_0001:** Verify input clear functionality resets output field

---

## Test Reporting

### Generate & view HTML report
```bash
npx playwright show-report
```

**Report Location:** `playwright-report/`

Report includes:
- Pass/Fail summary  
- Execution duration  
- Failure logs (and screenshots if configured)

---

## Configuration
Key settings are in: `playwright.config.js`  
Example highlights:
- Test directory: `./tests`
- Timeout: 60 seconds (or configured value)
- HTML reporter enabled

---

## Troubleshooting Guide

### Common issues
| Issue | Solution |
|---|---|
| Timeout errors | Run with `--workers=1` or increase timeout in config |
| Browser not installed | `npx playwright install chromium` |
| Node too old | Upgrade Node.js (v14+) |
| Website slow/unreachable | Check network / try again later |

### Diagnostic commands
```bash
node --version
npm --version
npx playwright --version
npx playwright install --dry-run
```

Run one test for debugging:
```bash
npx playwright test tests/positive_cases.spec.js -g "Pos_Fun_0001"
```

---

## Project Structure
```text
IT23821040/
├── tests/
│   ├── positive_cases.spec.js    # 27 positive test cases
│   ├── negative_cases.spec.js    # 10 negative test cases
│   └── ui_cases.spec.js          # 1 UI test case
├── playwright.config.js          # Test configuration
├── package.json                  # Dependencies
├── .gitignore
├── README.md
└── playwright-report/            # Generated report (after running tests)
```

---

## Test Coverage Metrics

| Test Category | Cases | Focus |
|---|---:|---|
| Functional | 38 | Translation accuracy + edge cases |
| UI/UX | 1 | UI stability (clear / real-time update) |
| Total | 38 | Full suite |

---

## Developer Information
- **Registration Number:** IT23821040  
- **Institution:** SLIIT  
- **Module:** IT3040 – IT Project Management  
- **Repository:** https://github.com/isuru666/IT23821040-Testcase.git 

---

## License
This project is developed for **educational purposes** as part of the BSc (Hons) in Information Technology curriculum at **SLIIT**.

<div align="center">

Quality Assurance | Automated Testing | Academic Project 

</div>


