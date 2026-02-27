# PF 102: Event-Driven Programming

## Week 3: Laboratory – Responsive Navbar with Event-Driven Components

---

## Laboratory Objectives

By the end of this lab, students should be able to:

- Build a fully responsive navigation bar
    
- Use event listeners properly
    
- Apply asynchronous behavior using setTimeout
    
- Manage and update application state
    
- Demonstrate event propagation
    
- Prevent default browser behavior
    

---

# Laboratory Project: Responsive Interactive Navbar

## Project Overview

Students will create a **fully responsive navigation bar** with interactive components that demonstrate Week 3 concepts:

- Event handling
    
- Callbacks
    
- Asynchronous execution
    
- Application state
    
- Event bubbling
    
- preventDefault()
    

The navbar must work on both:

- Desktop view
    
- Mobile view (hamburger menu)
    

---

# Part 1: Responsive Navbar Structure

## Requirements

1. Create a navigation bar that contains:
    
    - Logo / Brand name
        
    - 4 Navigation links (Home, About, Services, Contact)
        
    - Hamburger icon (visible on small screens)
        
2. On small screens:
    
    - Navigation links must be hidden by default
        
    - Clicking the hamburger menu toggles visibility
        

---

## Functional Requirements

### 1. Toggle Menu (Event Handling + State)

Use JavaScript to:

- Create a variable:
    
    ```javascript
    let isMenuOpen = false;
    ```
    
- When hamburger is clicked:
    
    - Toggle `isMenuOpen`
        
    - Show or hide the menu
        

This demonstrates:

- Application state
    
- Event listener
    
- UI update based on state
    

---

# Part 2: Active Link State Management

## Requirement

When a navigation link is clicked:

- Highlight the clicked link
    
- Remove highlight from others
    

### Rules

- Store the currently active link in a variable
    
- Update state when a new link is clicked
    

Example concept:

```javascript
let activeLink = null;
```

This demonstrates:

- State management
    
- Event handling
    

---

# Part 3: Asynchronous Notification Component

## Requirement

When a navigation link is clicked:

1. Immediately show a small notification message:  
    "Loading page..."
    
2. After 2 seconds, change it to:  
    "Page Loaded!"
    

Use:

```javascript
setTimeout(() => {
    // change message
}, 2000);
```

This demonstrates:

- Asynchronous execution
    
- Event loop behavior
    
- Callback functions
    

---

# Part 4: Prevent Default Behavior

## Requirement

Navigation links must:

- NOT reload the page
    
- Use `event.preventDefault()`
    

Students must explain in comments:

- What happens without preventDefault()?
    
- Why is it needed in single-page applications?
    

---

# Part 5: Event Propagation Demonstration

## Requirement

1. Wrap the navbar inside a container div.
    
2. Add a click event listener to:
    
    - The container
        
    - The navigation links
        
3. Log messages in the console.
    

Students must observe:

- What happens when a link is clicked?
    
- Why does the container event also trigger?
    

They must answer:

- What is event bubbling?
    

---

# Bonus (Optional – For Higher Grades)

- Add smooth animation when menu opens/closes
    
- Close mobile menu automatically after clicking a link
    
- Add dark/light mode toggle (state-based feature)
    

---

# Submission Requirements

Students must submit:

- index.html
    
- style.css
    
- script.js
    
- Screenshot (Desktop View)
    
- Screenshot (Mobile View)
    
- Short reflection (1–2 paragraphs) explaining:
    
    - How state was managed
        
    - Where asynchronous behavior was used
        
    - What event bubbling is
        

---

# Grading Rubric (100 Points)

|Criteria|Points|
|---|---|
|Responsive layout works properly|20|
|Menu toggle using state|15|
|Active link state management|15|
|Asynchronous notification works|15|
|Proper use of preventDefault()|10|
|Event propagation demonstrated|10|
|Code organization and readability|10|
|Reflection answers|5|
|**Total**|**100**|

---

# Expected Learning Outcome

After completing this laboratory activity, students should be able to:

- Connect theory (event loop, callbacks, state) to a real UI component
    
- Understand how modern web applications manage interaction
    
- Build interactive, responsive components using event-driven programming principles