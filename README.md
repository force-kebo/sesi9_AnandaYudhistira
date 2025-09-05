# 🚀 Sesi9_AnandaYudhistira Selenium WebDriver Test Suite

## 📝 Overview

This project automates browser testing for [SauceDemo](https://www.saucedemo.com/) using Selenium WebDriver, Mocha, and generates rich HTML reports with Mochawesome.

## 📦 Project Description

- **Automated Test:** The suite logs into SauceDemo, interacts with the product sort dropdown, and verifies page behavior.
- **Reporting:** Test results are visualized in a detailed HTML report ([mochawesome-report/mochawesome.html](mochawesome-report/mochawesome.html)), including code snippets and execution stats.

## ⚙️ Installation

1. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd sesi9_AnandaYudhistira-master
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```

## ▶️ Usage

- **Run tests and generate Mochawesome report:**
  ```sh
  npm test
  ```
  This executes [`test-sauce.js`](test-sauce.js) and outputs the report in [mochawesome-report/mochawesome.html](mochawesome-report/mochawesome.html).

- **Run tests without report:**
  ```sh
  npm run cobain
  ```

## 🌐 System Output Language

- **Test Output:** English and Bahasa Indonesia (test case: "Visit SauceDemo dan cek page title").
- **Report Language:** English (system messages, stats, and code).

## 📊 Example Output

- **Terminal:**  
  ```
    Google Search Test
      ✓ Visit SauceDemo dan cek page title (5s)
  ```
- **HTML Report:**  
  See [mochawesome-report/mochawesome.html](mochawesome-report/mochawesome.html) for full details and code.

---

**Author:**  
Ananda Yudhistira  
