# Portfolio UI Documentation

---

## PATH (inline payload / endpoint)

### Example
```html
<span class="path">../../../../etc/passwd</span>
```

---

## URL

### Example
```html
<a href="https://example.com" class="url">https://example.com</a>
```

---

## TAG

### Example
```html
<span class="tag">smb</span>
<span class="tag">windows</span>
```

---

## CODE BLOCK (foldable)

### Example
```html
<details class="code-block">
    <summary>View exploit</summary>
    <pre><code>
python exploit.py
    </code></pre>
</details>
```

---

## COMMAND EXPLANATION

### Example
```html
<details class="command-explanation">
    <summary>What this command does</summary>

    <p>Scans for open ports and services.</p>

    <pre><code>
nmap -sC -sV 10.10.10.5
    </code></pre>
</details>
```

---

## WRITEUP SECTION

### Example
```html
<section class="writeup-section">
    <h2 class="section-title">Reconnaissance</h2>

    <p>Initial scan revealed open ports.</p>

    <img src="nmap.png" class="lab-image">

    <pre><code>nmap -sC -sV 10.10.10.5</code></pre>
</section>
```

---

## WRITEUP LINK

### Example
```html
<a href="writeups/blue.html" class="writeup-link">
    <span class="lab-name">Blue</span>
    <span class="lab-platform">TryHackMe</span>
    <span class="lab-difficulty easy">Easy</span>
</a>
```

---

## YEAR BLOCK

### Example
```html
<div class="year-block">

    <div class="year-header">
        <span class="chevron">▶</span>
        <span class="year-text">2026</span>
        <span class="count">(2)</span>
    </div>

    <div class="year-content">
        <!-- writeup links -->
    </div>

</div>
```

---

## IMAGE

### Example
```html
<img src="nmap.png" class="lab-image">
```

---

## META LIST

### Example
```html
<ul class="lab-meta">
    <li><strong>Date:</strong> 2026-03-17</li>
    <li><strong>Difficulty:</strong> Easy</li>
</ul>
```

---

## NAVIGATION

### Example
```html
<nav class="nav-bar">
    <div class="terminal">...</div>

    <button class="hamburger">
        <span></span><span></span><span></span>
    </button>

    <div class="nav-links">
        <a href="index.html">Home</a>
        <a href="writeups.html">Writeups</a>
    </div>
</nav>
```
