import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const toDisplay =(
  <div>
    <div>
  <img src='https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fHww' height="200px" alt ="img"/>
  <h1>h w!</h1>
  <p>Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph.
</p>
</div>
  </div>

)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(toDisplay)


